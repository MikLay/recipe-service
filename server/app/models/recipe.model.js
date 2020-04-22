const mongoose = require("mongoose");

const Recipe = mongoose.model(
  "Recipe",
  new mongoose.Schema(
    {
      name: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      picture: String,
      category: String,
      shortDesc: String,
      longDesc: String,
      createDate: String
    },
    {
      versionKey: false
    }
  )
);

module.exports = Recipe;
