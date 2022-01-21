const path = require('path');
const router = require('express').Router();


// gets the index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// gets the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// gets index when user tries for any other
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
  
module.exports = router;