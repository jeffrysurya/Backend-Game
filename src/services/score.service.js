const { Score } = require('../models');

const createScore = async (userId, ScoreBody) => {
  const scr = {
    playerscore: ScoreBody.playerscore,
    opponentscore: ScoreBody.opponentscore,
    result: ScoreBody.result,
    user: userId,
  };
  const scoreDoc = await Score.create(scr);
  return scoreDoc;
};

// const queryScore = async() => {

// };

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
};
