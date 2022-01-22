const router = require('express').Router();
const fs = require('fs');
let notes;

router.get('/notes', (req, res) => {
    //reads the json file and returns to the client.
    notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // adds the new note to the notes json
    let newNotes = req.body;
    notes.push(newNotes);

    // writes the new note to the json file
    fs.writeFileSync('db/db.json', JSON.stringify(notes), 'utf8');

    // returns the new note to the client, posting it on the side bar
    res.json(notes);
});

module.exports = router;