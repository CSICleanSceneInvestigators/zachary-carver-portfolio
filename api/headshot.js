const SOURCE_URL =
  'https://raw.githubusercontent.com/CSICleanSceneInvestigators/zachary-carver-portfolio/7028d3792ca76a5d2cce3463fb1f7e6313da753d/assets/zachary-carver-headshot-hq.svg';

module.exports = async function headshotHandler(request, response) {
  try {
    const upstream = await fetch(SOURCE_URL);
    if (!upstream.ok) {
      throw new Error('Approved headshot source could not be loaded.');
    }

    const svg = await upstream.text();
    const match = svg.match(/data:image\/jpeg;base64,([^"\s]+)/);
    if (!match) {
      throw new Error('JPEG data was not found in the approved headshot source.');
    }

    const jpeg = Buffer.from(match[1], 'base64');
    if (jpeg[0] !== 0xff || jpeg[1] !== 0xd8) {
      throw new Error('Recovered headshot data is not a JPEG.');
    }

    response.setHeader('Content-Type', 'image/jpeg');
    response.setHeader('Content-Length', String(jpeg.length));
    response.setHeader('Cache-Control', 'public, max-age=31536000, s-maxage=31536000, immutable');
    response.status(200).send(jpeg);
  } catch (error) {
    console.error('Unable to serve portfolio headshot:', error);
    response.status(502).send('Headshot unavailable');
  }
};
