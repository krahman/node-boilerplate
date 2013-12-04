/**
 * Created by nevda on 4/12/13.
 */
module.exports = require('optimist')
    .usage('Usage: $0 --port [port]')
    .alias('port', 'p')
    .describe('port', 'Port number for the Express application.')
    .default('port', 8081)
    .argv;