const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { scoreService } = require('../services');

const createScore = catchAsync(async (req, res) => {
  const userId = req.user._id;
  const score = await scoreService.createScore(userId, req.body);
  res.status(httpStatus.CREATED).send(score);
});

const getScores = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['playerscore', 'opponentscore', 'result']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await scoreService.queryScore(filter, options);
  res.send(result);
});

const getScore = catchAsync(async (req, res) => {
  const score = await scoreService.getScoreByUserId(req.params.userId);
  if (!score) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Score not found');
  }
  res.send(score);
});

module.exports = {
  createScore,
  getScores,
  getScore,
};
