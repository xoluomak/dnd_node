const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;

const characterSchema = mongoose.Schema({
  name: { type: String, required: true },
  sexe: { type: Boolean, required: true },
  colorIndex: { type: Number, required: true },
  level: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

characterSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Character', characterSchema);