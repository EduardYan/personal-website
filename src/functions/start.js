/**
 * Utils functions for the start
 * of the web server.
 */

function getPort() {
  return process.env.PORT || 5000;
}

module.exports = { getPort };
