import React, {useEffect, useState} from "react";
import api from "../../api/api";
import RecipeCard from "../Recipes/components/RecipeCard";

const Profile = () => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [userLikedRecipes, setUserLikedRecipes] = useState([]);

  useEffect(() => {
    api
      .getUserDetails(
        localStorage.getItem("user_token"),
        localStorage.getItem("user_id")
      )
      .then(user => {
        setUserRecipes(user.recipes);
        setUserLikedRecipes(user.likedRecipes);
      });
  }, []);

  const renderUserRecipes = userRecipes.map(recipe => (
    <RecipeCard recipe={recipe} key={recipe._id} editable/>
  ));

  const renderUserLikedRecipes = userLikedRecipes.map(recipe => (
    <RecipeCard recipe={recipe} key={recipe._id} />
  ));

  return (
    <div className="container">
      <div className="d-flex flex-column m-5">
        <div className="d-flex flex-row">
          <div className="flex-column w-50">
            <h4 className="text-center mb-2">
              Your recipes <i className="fa fa-address-book"></i>
            </h4>

            {renderUserRecipes.length ? (
              <div className="flex-column" style={{ columnCount: "auto" }}>
                {renderUserRecipes}
              </div>
            ) : (
              <h3>You haven`t created any recipes yes</h3>
            )}
          </div>
          <div className="flex-column w-50 ml-4">
            <h4 className="text-center mb-2">
              Recipes you <i className="fa fa-heart"></i>
            </h4>
            {renderUserRecipes.length ? (
              <div className="flex-column" style={{ columnCount: "auto" }}>
                {renderUserLikedRecipes}
              </div>
            ) : (
              <h3>You haven`t liked any recipes yet</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
