import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:9000/api/'});

function fetchRecipe(id) {
    return api.get(`/recipes/${id}`)
        .then(resp => resp.data);
}

function fetchAllRecipes() {
    return api.get('/recipes')
        .then(({data}) => data);
}

async function deleteRecipe(id) {
    return await api.delete(`/recipes/${id}`);
}

function updateRecipe(recipe) {
    return api.patch(`/recipes/${recipe._id}`, recipe);
}

function createRecipe(recipe) {
    return api.post('/recipes', recipe);
}

export default {
    createRecipe,
    updateRecipe,
    fetchRecipe,
    fetchAllRecipes,
    deleteRecipe,
};