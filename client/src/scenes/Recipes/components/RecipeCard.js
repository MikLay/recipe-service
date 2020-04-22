import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import api from "../../../api/api";
import { CATEGORIES } from "../../../constants/entity_config";

const RecipeCard = props => {
  const { recipe, editable } = props;
  const history = useHistory();
  const [userId] = useState(localStorage.getItem("user_id") || null);

  return (
    <div className="card">
      <img src={recipe.picture} className="card-img-top" alt={recipe.name} />
      <div className="card-img-overlay row m-2 ">
        <div className="card-title">
          <small className="badge-info p-2">
            {CATEGORIES.find(category => category.key === recipe.category).text}
          </small>
        </div>
          <div className="card-title "><small className="badge-dark p-2">{recipe.author.username}</small></div>
      </div>
      <div className="card-body">
        <Link className="card-title" to={"/recipes/" + recipe._id}>
          <h5 className="position-relative">{recipe.name}</h5>
        </Link>
        <p className="card-text">{recipe.shortDesc}</p>
      </div>
      <div className="card-footer justify-content-center align-items-center">
        <div className="text-center position-relative">
          {userId &&
            (editable ? (
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary btn-md"
                  onClick={() => history.push("/edit/" + recipe._id)}
                >
                  <i className="fa fa-edit" /> Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-md"
                  onClick={() => {
                    api.deleteRecipe(recipe._id);
                    history.push("/recipes");
                  }}
                >
                  Delete <i className="fa fa-trash" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn-info"
                onClick={() => {
                  api.addUsersFavouriteRecipe(userId, recipe._id);
                }}
              >
                Add to favourites <i className="fa fa-thumbs-up" />
              </button>
            ))}
        </div>
        <div className="text-center flex-column">
          <small className="text-muted" style={{ alignSelf: "right" }}>
            {recipe.createDate}
          </small>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
