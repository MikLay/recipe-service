import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8080/api/" });

function fetchRecipe(id) {
  return api.get(`/recipes/${id}`).then(resp => resp.data);
}

function fetchAllRecipes() {
  return api.get("/recipes").then(resp => resp.data);
}

async function deleteRecipe(id) {
  return await api.delete(`/recipes/${id}`, {
    headers: { "x-access-token": localStorage.getItem("user_token") }
  });
}

function updateRecipe(recipe) {
  return api.patch(`/recipes/${recipe._id}`, recipe, {
    headers: { "x-access-token": localStorage.getItem("user_token") }
  });
}

function createRecipe(recipe) {
  return api.post("/recipes", recipe, {
    headers: { "x-access-token": localStorage.getItem("user_token") }
  });
}

function authUser(data) {
  return api.post("/auth/signin", data).then(({ data }) => data);
}

function getUserDetails(accessToken, id) {
  return api
    .get("/users/" + id, {
      headers: { "x-access-token": accessToken }
    })
    .then(({ data }) => data);
}

function addUsersFavouriteRecipe(userId, recipeId) {
  return api
    .post(
      "/users/favourite",
      { userId: userId, recipeId: recipeId },
      {
        headers: { "x-access-token": localStorage.getItem("user_token") }
      }
    )
    .then(({ data }) => data);
}
export default {
  createRecipe,
  updateRecipe,
  fetchRecipe,
  fetchAllRecipes,
  deleteRecipe,
  authUser,
  getUserDetails,
  addUsersFavouriteRecipe
};
