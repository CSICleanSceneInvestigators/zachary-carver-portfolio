const zlib = require('zlib');

function normalizeHexPart(value, expectedLength) {
  const clean = value.replace(/[^0-9a-f]/gi, '');
  if (clean.length < expectedLength) {
    throw new Error(`Headshot source chunk is too short (${clean.length}/${expectedLength}).`);
  }
  return clean.slice(0, expectedLength);
}

const leadingHex = [
  normalizeHexPart(require('./headshot-data/part-00'), 15000),
  normalizeHexPart(require('./headshot-data/part-01'), 15000)
].join('');

const compressedMiddleReversed = [
  require('./headshot-data/middle-a'),
  require('./headshot-data/middle-b'),
  require('./headshot-data/middle-c')
].join('');

const leadingBytes = Buffer.from(leadingHex, 'hex');
const middleBytes = zlib.inflateSync(
  Buffer.from(compressedMiddleReversed.split('').reverse().join(''), 'base64')
);

const trailingHex = [
  normalizeHexPart(require('./headshot-data/part-03'), 15000),
  normalizeHexPart(require('./headshot-data/part-04').split('').reverse().join(''), 12316)
].join('');
const trailingBytes = Buffer.from(trailingHex, 'hex');

const jpeg = Buffer.concat([leadingBytes, middleBytes, trailingBytes]);

module.exports = function headshotHandler(request, response) {
  try {
    const isValidJpeg =
      jpeg.length === 36158 &&
      jpeg[0] === 0xff &&
      jpeg[1] === 0xd8 &&
      jpeg[jpeg.length - 2] === 0xff &&
      jpeg[jpeg.length - 1] === 0xd9;

    if (!isValidJpeg) {
      throw new Error(`Invalid headshot image (${jpeg.length} bytes).`);
    }

    response.setHeader('Content-Type', 'image/jpeg');
    response.setHeader('Content-Length', String(jpeg.length));
    response.setHeader(
      'Cache-Control',
      'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, immutable'
    );
    response.status(200).send(jpeg);
  } catch (error) {
    console.error('Unable to serve portfolio headshot:', error);
    response.status(502).send('Headshot unavailable');
  }
};
