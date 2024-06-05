const Character = require('../models/characters');

exports.addCharacter = (req, res, next) => {
    if (!req.body.name || req.body.sexe === undefined || req.body.sexe === null || req.body.colorIndex === undefined || req.body.colorIndex === undefined)
        return res.status(401).json({ message: 'Missing params.' });
    const character = new Character({
        name: req.body.name,
        sexe: req.body.sexe,
        colorIndex: req.body.colorIndex,
        classIndex: req.body.classIndex,
        userId: req.body.userId,
        level: 1,
    });
    character.save()
        .then(() => res.status(201).json({ message: 'Character created !' }))
        .catch(error => res.status(401).json({ error }));
  };

exports.deleteCharacter = (req, res, next) => {
    Character.deleteOne({ _id: req.params.id })
      .then(res.status(200).json({ message: 'Character deleted!' }))
      .catch(error => res.status(401).json({ error }));
}

exports.getCharacterByUser = (req, res, next) => {
    Character.find({ userId: req.params.id })
      .then((characters) => res.status(200).json(characters))
      .catch(error => res.status(401).json({ error }));
}

exports.getCharacter = (req, res, next) => {
    Character.findOne({ _id: req.params.id })
      .then((character) => res.status(200).json(character))
      .catch(error => res.status(401).json({ error }));
}

exports.updateCharacter = (req, res, next) => {
    Character.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Character updated' }))
      .catch(error => res.status(401).json({ error }));
}