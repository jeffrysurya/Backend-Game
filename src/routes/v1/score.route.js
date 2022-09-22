const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const scoreValidation = require('../../validations/score.validation');
const scoreController = require('../../controllers/score.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageScores'), validate(scoreValidation.createScore), scoreController.createScore)
  .get(auth('getScores'), validate(scoreValidation.getScores), scoreController.getScores);

router
  .route('/:scoreId')
  .get(auth('getScores'), validate(scoreValidation.getScore), scoreController.getScore)
  .patch(auth('manageScores'), validate(scoreValidation.updateScore), scoreController.updateScore)
  .delete(auth('manageScores'), validate(scoreValidation.deleteScore), scoreController.deleteScore);

module.exports = router;
