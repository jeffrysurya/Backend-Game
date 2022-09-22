const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const scoreSchema = mongoose.Schema({
  playerscore: {
    type: Number,
    required: true,
  },
  opponetscore: {
    type: Number,
    required: true,
  },
  result: {
    type: String,
    required: true,
    trim: true,
  },
});

scoreSchema.plugin(toJSON);

const Score = mongoose.model('Score', scoreSchema);
module.exports = Score;
