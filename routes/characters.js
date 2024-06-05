const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const characterCtrl = require('../controllers/characters');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');

var jsonParser = bodyParser.json()

router.post('/', jsonParser, characterCtrl.addCharacter);
router.get('/:id', characterCtrl.getCharacter);
router.get('/user/:id', characterCtrl.getCharacterByUser);
router.delete('/:id', jsonParser, characterCtrl.deleteCharacter);
router.put('/:id', jsonParser, characterCtrl.updateCharacter);

module.exports = router;