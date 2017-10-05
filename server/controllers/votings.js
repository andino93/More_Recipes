import db from '../models';

const Voting = db.Voting;
const User = db.User;
const Recipe = db.Recipe;

let vote = (req, res, status) => {
  const voteData = [];
  const findUser = User.findOne({
    where: {
      id: req.decoded.userId
    }
  });

  const findRecipe = Recipe.findOne({
    where: {
      id: req.body.recipeId
    }
  });

  const findVote = Voting.findOne({
    where: {
      recipeId: req.body.recipeId,
      userId: req.decoded.id
    }
  });

  voteData.push(findUser);
  voteData.push(findRecipe);
  voteData.push(findVote);

  Promise.all(voteData)
    .then((results) => {
      const user = results[0];
      if (user) {
        return res.status(404).json({
          code: 404,
          message: 'This user does not exist'
        });
      }

      const recipe = results[1];
      if (!recipe) {
        return res.status(404).json({
          code: 404,
          message: 'This recipe does not exist'
        });
      }

      const voting = results[2];
      if (voting) {
        return voting.update({
          vote: status
        });
      }
      return Voting.create({
        vote: status,
        recipeId: req.body.recipeId,
        userId: req.decoded.id
      });
    })
    .then((updated) => {
      return res.status(201).json({
        status: 201,
        message: 'Vote successful',
        data: updated
      });
    })
    .catch(error => res.status(400).json({
      message: 'An error occured during this operation',
      errors: error.errors
    }));
};

const votingController = {
  upVote(req, res) {
    vote(req, res, 1);
  },
  downVote(req, res) {
    vote(req, res, 0);
  }
};

export default votingController;