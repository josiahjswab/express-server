
//#11 this imports the package moment which is a lightweight JavaScript date library for parsing, validating, 
//manipulating, and formatting dates. https://www.npmjs.com/package/moment
const moment = require('moment');
//#10 This code logs the URL hit and what time when a request is made to our server.
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

module.exports = logger;

