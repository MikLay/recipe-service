const db = require("../models");
const Recipe = db.recipe;
const User = db.user;

exports.deleteRecipe = (req, res) => {
  Recipe.deleteOne({ _id: req.params.id })
    .then(recipe => {
      res.status(200).send(recipe);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.patchRecipe = (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, recipe) {
    if (err) throw err;
    res.status(200).send(recipe);
  }).catch(err => {
    console.log(err);
  });
};

exports.getAllRecipes = (req, res) => {
  Recipe.find()
    .populate("author", "username")
    .then(recipes => {
      res.status(200).send(recipes);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getRecipeByID = (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      res.status(200).send(recipe);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.createRecipe = (req, res) => {
  Recipe.create(req.body)
    .then(recipe => {
      User.findByIdAndUpdate(
        recipe.author,
        { $push: { recipes: recipe._id } },
        { new: true, upsert: true },
        function(err, managerparent) {
          if (err) throw err;
          console.log(managerparent);
        }
      );
      res.status(200).send(recipe);
    })
    .catch(err => {
      console.log(err);
    });
};
