const parseHTTP = require('../index.js');

describe("parses HTTP", function() {
  it("parses a request line", function() {
    // Arrange
    const request = `GET / HTTP/1.1`;

    // Act
    const output = parseHTTP(request);
    const expected = {"verb":"GET", "path":"/", "version":"HTTP/1.1"};
    // Assert
    expect(output).toEqual(expected);
  })
})
