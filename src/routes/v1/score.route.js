const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const scoreValidation = require('../../validations/score.validation');
const scoreController = require('../../controllers/score.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(scoreValidation.createScore), scoreController.createScore)
  .get(auth(), validate(scoreValidation.getScores), scoreController.getScores);

router.route('/:userId').get(auth(), scoreController.getScore);

module.exports = router;
