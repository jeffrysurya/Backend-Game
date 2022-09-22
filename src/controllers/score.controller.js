const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { scoreService } = require('../services');

const createScore = catchAsync(async (req, res) => {
  const score = await scoreService.createScore(req.body);
  res.status(httpStatus.CREATED).send(score);
});

const getScores = catchAsync(async (req, res) => {
  const result = await scoreService.queryScores();
  res.send(result);
});

module.exports = {
  createScore,
  getScores,
};
