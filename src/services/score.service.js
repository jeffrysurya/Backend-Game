const { Score } = require('../models');

const saveScore = async (ScoreBody) => {
  const scoreDoc = await Score.create(ScoreBody);
  return scoreDoc;
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
  saveScore,
};
