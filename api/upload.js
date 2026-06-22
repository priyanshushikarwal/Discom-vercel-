const crypto = require('crypto');

module.exports = async (req, res) => {
  // Allow CORS from our own frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-File-Path, Content-Length');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const pathInBucket = req.headers['x-file-path'];
    const contentType = req.headers['content-type'] || 'application/octet-stream';

    if (!pathInBucket) {
      return res.status(400).json({ error: 'Missing X-File-Path header' });
    }

    // 1. Read request body bytes
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const fileBytes = Buffer.concat(chunks);

    if (fileBytes.length === 0) {
      return res.status(400).json({ error: 'Empty file body' });
    }

    const b2KeyId = '0053ade5953313e0000000003';
    const b2ApplicationKey = 'K005CYv1SZCEdRMhu/cuCjef4G/OvWs';
    const b2BucketId = '930afd5e55e9d57393e1031e';
    const b2BucketName = 'Discomfiles';

    // 1. Authorize B2
    const authCredentials = Buffer.from(`${b2KeyId}:${b2ApplicationKey}`).toString('base64');
    const authResponse = await fetch('https://api.backblazeb2.com/b2api/v2/b2_authorize_account', {
      headers: { 'Authorization': `Basic ${authCredentials}` }
    });

    if (!authResponse.ok) {
      const errText = await authResponse.text();
      return res.status(500).json({ error: `B2 authorization failed: ${errText}` });
    }

    const authData = await authResponse.json();
    const apiUrl = authData.apiUrl;
    const authorizationToken = authData.authorizationToken;
    const downloadUrl = authData.downloadUrl;

    // 2. Get Upload URL
    const uploadUrlResponse = await fetch(`${apiUrl}/b2api/v2/b2_get_upload_url`, {
      method: 'POST',
      headers: {
        'Authorization': authorizationToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bucketId: b2BucketId })
    });

    if (!uploadUrlResponse.ok) {
      const errText = await uploadUrlResponse.text();
      return res.status(500).json({ error: `B2 get upload URL failed: ${errText}` });
    }

    const uploadData = await uploadUrlResponse.json();
    const uploadUrl = uploadData.uploadUrl;
    const uploadAuthToken = uploadData.authorizationToken;

    // 3. Upload File
    const cleanPath = pathInBucket.startsWith('/') ? pathInBucket.substring(1) : pathInBucket;
    const sha1Hash = crypto.createHash('sha1').update(fileBytes).digest('hex');

    const uploadResponse = await fetch(uploadUrl, {
      method: 'POST',
      headers: {
        'Authorization': uploadAuthToken,
        'X-Bz-File-Name': encodeURI(cleanPath),
        'Content-Type': contentType,
        'Content-Length': fileBytes.length.toString(),
        'X-Bz-Content-Sha1': sha1Hash
      },
      body: fileBytes
    });

    if (!uploadResponse.ok) {
      const errText = await uploadResponse.text();
      return res.status(500).json({ error: `B2 upload failed: ${errText}` });
    }

    const publicUrl = `${downloadUrl}/file/${b2BucketName}/${cleanPath}`;
    return res.status(200).json({ url: publicUrl });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
