const db = require("../models");
const User = db.user;

exports.getUserDetails = (req, res) => {
  User.findById(req.params.id, "username email likedRecipes recipes")
    .populate({
      path: "recipes",
      populate: { path: "author", select: "username" }
    })
    .populate({
      path: "likedRecipes",
      populate: { path: "author", select: "username" }
    })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.addFavRecipe = (req, res) => {
  User.findByIdAndUpdate(
    req.body.userId,
    { $push: { likedRecipes: req.body.recipeId } },
    { new: true, upsert: true },
    function(err, updatedUser) {
      if (err) throw err;
      res.status(200).send(updatedUser);
    }
  );
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

