//#10 $ npm i moment. A time module.
const moment = require('moment')

//#8 Here we execute any function we want which will fire when the page is touched.
const logger = (req, res, next) => {
    //: ${moment().format() is added in step #10
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`); 
    //#8.1 Looks for next in stack.
    next();
}

module.exports = logger;