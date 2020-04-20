import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router";
import api from "../../api/api";
import styled from "styled-components";

const Header = styled.div`
  text-align: center;
`;

const Info = styled.div`
  margin: 30px;
`;

const Img = styled.img`
  src: ${props => props.src};
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const Recipe = () => {
    const [recipe, setRecipe] = useState(null);
    const id = useLocation().pathname.substring("/recipes/".length);
    const history = useHistory();

    useEffect(() => {
        api.fetchRecipe(id).then(setRecipe);
    }, []);

    if (!recipe) {
        return <h3>Loading...</h3>;
    }

    return (
        <div className="container">
            <Info>
                <Header as="h1">{recipe.name}</Header>
                <div className="d-flex m-3">
                    <Img src={recipe.picture}/>
                </div>
                <div className="d-flex flex-column">
                    <h3>{recipe.shortDesc}</h3>
                    <p>{recipe.longDesc}</p>
                </div>
                <h6>{recipe.createDate}</h6>
                <div className="d-flex m-4 btn-group-lg" style={{justifyContent: "center"}} role="group">
                    <button className="btn btn-primary" onClick={() => history.push(`/edit/${id}`)}>
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        color="red"
                        onClick={() => {
                            api.deleteRecipe(id);
                            history.push("/recipes");
                        }}
                    >
                        Delete
                    </button>
                </div>
            </Info>
        </div>
    );
};

export default Recipe;
