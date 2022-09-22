const Joi = require('joi');

const createScore = {
  body: Joi.object().keys({
    playerScore: Joi.number().required(),
    opponentScore: Joi.number().required(),
    result: Joi.string().required(),
  }),
};

module.exports = {
  createScore,
};
