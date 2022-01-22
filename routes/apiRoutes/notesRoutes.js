const router = require('express').Router();
const fs = require('fs');

// npm package to create a unique id
const { nanoid } = require('nanoid');
const id = nanoid();

// sets up array for notes
let notes;

// gets the notes data
router.get('/notes', (req, res) => {
    //reads the json file and returns to the client.
    notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(notes);
});

// create new notes
router.post('/notes', (req, res) => {
    req.body.id = id;

    // adds the new note to the notes json
    let newNotes = req.body;
    notes.push(newNotes);

    // writes the new note to the json file
    fs.writeFileSync('db/db.json', JSON.stringify(notes), 'utf8');

    // returns the new note to the client, posting it on the side bar
    res.json(notes);
});

// delete note upon clicking the trash can icon
router.delete('/notes/:id', (req, res) => {
    // get the note to delete by id
    const noteId = req.params.id;
    
    let notesRemain = notes.filter( currNote => {
        return currNote.id != noteId;
    })

    // writes the notes to the json file without the deleted note
    fs.writeFileSync('db/db.json', JSON.stringify(notesRemain), 'utf8');
    res.json(notesRemain);
});

module.exports = router;