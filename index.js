//#1 Brings in express module.
const express = require('express');
//#5.1 Brings in path module which is from node.js used to join folders. Next step eventually entropied into ./routes/api/members.js
const path = require('path');
//#11 step #10 created this module.
const logger = require('./middleware/logger')

//#2 Init const app with express. express() is top level function.
const app = express();

//#9 Init middleware. The next step is in ./middleware/logger.
app.use(logger);



//#5.2 Use is used when you want to include middleware. dirname has 2 underscores in front of it. _!_dirname
app.use(express.static(path.join(__dirname, 'public')));

//#13 Members api routes.
app.use('/api/members', require('./routes/api/members'));

//#region #5 look at top for #5.1
// Accesse a single route. This way.

// app.get('/', (req, res) => {
//     res.send('<h1>superworld</h1>');
//     res.getFile(path.join(_dirname, 'public', 'index.html'));
// })
//#endregion

//#3 This is being set up with the future in mind for deployment of the project. process.env.PORT is looking for a process enviornment PORT.
const PORT = process.env.PORT || 5000;
//#4 The const app now contains a lot of props one of which is listen.
// In listen we put in our port variable ^ and can do a callback as a second variable.
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));