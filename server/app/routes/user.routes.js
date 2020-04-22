const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/users", controller.allAccess);

  app.get("/api/users/user", [authJwt.verifyToken], controller.userBoard);

  app.get("/api/users/:id", [authJwt.verifyToken], controller.getUserDetails);

  app.post(
    "/api/users/favourite",
    [authJwt.verifyToken],
    controller.addFavRecipe
  );

};
