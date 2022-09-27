const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { paginate } = require('./plugins');

const scoreSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    playerscore: {
      type: Number,
      required: true,
    },
    opponentscore: {
      type: Number,
      required: true,
    },
    result: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

scoreSchema.plugin(toJSON);
scoreSchema.plugin(paginate);

const Score = mongoose.model('Score', scoreSchema);
module.exports = Score;
