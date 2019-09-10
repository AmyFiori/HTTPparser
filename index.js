module.exports = function parseHTTP(request) {
  const parsed = {};

  // The parts of the request are separated by spaces. I THINK this always holds true.
  const parts = request.split(" ");
  parsed.verb = parts[0];
  parsed.path = parts[1];
  parsed.version = parts[2];

  return parsed;
}
