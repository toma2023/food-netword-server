const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const recipes = require('./data/recipe.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('dragon is running!!!!!!')
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedChefRecipe = recipes.find(n =>n.id == id);
    res.send(selectedChefRecipe);
})


app.listen(port, () => {
    console.log(`Dragon is running on port: ${port}`)
})













