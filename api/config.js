// Vercel serverless function: membaca kredensial dari Environment Variables,
// sehingga tidak perlu ditulis di index.html maupun di repo GitHub.
module.exports = (req, res) => {
  const { CLOUD_URL, CLOUD_KEY } = process.env;
  if (!CLOUD_URL || !CLOUD_KEY) return res.status(500).json({ error: 'not_configured' });
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ url: CLOUD_URL, key: CLOUD_KEY });
};
