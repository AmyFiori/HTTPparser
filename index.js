module.exports = function parseHTTP(request) {
  const parsed = {};

  /*
    Syntax assumptions (PRETTY sure these are always true):
    The request is on the first line.
    The request is always in the format: [verb] [path] [version]
    Headers come immediately after the request.
    Each header is on its own line.
    Each header is always in the format: [key]: [value]
  */
  const lines = request.split("\n");
  const requestParts = lines[0].split(" ");
  parsed.verb = requestParts[0].toUpperCase();
  parsed.path = requestParts[1];
  parsed.version = requestParts[2];

  const headers = lines.slice(1);
  headers.forEach(function(header) {
    const headerParts = header.split(": ");
    if (headerParts.length === 2) { // If this isn't true of a header line, something's wrong. OTOH, we could just have run out of headers - have to see where this parser goes from here. FOR NOW, this is just insurance.
      if (!parsed.headers) {
        parsed.headers = {};
      }
      parsed.headers[headerParts[0].trim()] = headerParts[1].trim(); // Use trim to remove extra whitespace
    }
  })
  return parsed;
}
