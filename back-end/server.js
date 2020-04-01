const express = require('express');
const bodyParser = require("body-parser");

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images',
  limits: {
    fileSize: 10000000
  }
});

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/recipes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const recipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  ingredients: [{
    name: String,
    measurement: String
  }],
  recipe: [String],
  difficulty: String,
  imageSource: String,
  recipeSource: String
});

// Create a model for items in the museum.
const Recipe = mongoose.model('Recipe', recipeSchema);

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  bio: String,
  favorite_recipes: [mongoose.Schema.Types.ObjectId],
  experience: String
});

const User = mongoose.model('User', userSchema);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/api/recipes', async (req, res) => {
  try {
    let recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
});

app.post('/api/recipes', async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    difficulty: req.body.difficulty,
    image: req.body.image,
    ingredients: req.body.ingredients,
    recipe: req.body.recipe,
    imageSource: req.body.imageSource,
    recipeSource: req.body.recipeSource
  });
  try {
    await recipe.save();
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.listen(3001, () => console.log('Server listening on port 3001!'));
