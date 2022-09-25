const Joi = require('joi');

const createScore = {
  body: Joi.object().keys({
    playerscore: Joi.number().required(),
    opponentscore: Joi.number().required(),
    result: Joi.string().required(),
  }),
};

module.exports = {
  createScore,
};
