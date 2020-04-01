const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
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

// Create a scheme for items in the museum: a title and a path to an image.
const recipeSchema = new mongoose.Schema({
  id: Integer,
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
  favorite_recipes: [Schema.Types.ObjectId],
  experience: String
});

const User = mongoose.model('User', userSchema);


app.listen(3000, () => console.log('Server listening on port 3001!'));
