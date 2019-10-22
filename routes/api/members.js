const express = require('express');
const router = express.Router();
//#7
const members = require('../../Members');

//#6 This code creates an api endpoint on your website.
router.get('/', (req, res) => res.json(members));
// Creates a json object that can be hit at this extension http://localhost:5000/api/members

//#12 Get single member by adding parameter to the address bar: http://localhost:5000/api/members/1 = id #1
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) { // this returns the entire object that contains the id of input.
        res.json(members.filter(member => member.id === parseInt(req.params.id) ));
    } else {
        res.status(400).json({msg:`No member with the id of ${req.params.id}`})
    }
});

module.exports = router;