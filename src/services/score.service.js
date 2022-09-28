const { Score } = require('../models');

const createScore = async (userId, ScoreBody) => {
  const scoreWithId = {
    playerscore: ScoreBody.playerscore,
    opponentscore: ScoreBody.opponentscore,
    result: ScoreBody.result,
    user: userId,
  };
  const scoreDoc = await Score.create(scoreWithId);
  return scoreDoc;
};

const getScoreByUserId = async (userId) => {
  const scoreDoc = await Score.find({ user: userId });
  return scoreDoc;
};

const queryScore = async (filter, options) => {
  const score = await Score.paginate(filter, options);
  return score;
};

// const getScore = async (id) => {
//   const scoreDoc = await Score.findById(id);
//   return scoreDoc;
// };

// const getScores = async () => {
//   const scoreDoc = await Score.find();
//   return scoreDoc;
// };

module.exports = {
  createScore,
  getScoreByUserId,
  queryScore,
};
