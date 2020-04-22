const { authJwt } = require("../middlewares");
const controller = require("../controllers/recipe.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app
    .route("/api/recipes/")
    .get(controller.getAllRecipes)
    .post([authJwt.verifyToken], controller.createRecipe);

  app
    .route("/api/recipes/:id")
    .get(controller.getRecipeByID)
    .patch([authJwt.verifyToken], controller.patchRecipe)
    .delete([authJwt.verifyToken], controller.deleteRecipe);
};
