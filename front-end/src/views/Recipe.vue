<template>
<div class="recipePage">
  <h1>{{recipe.name}}</h1>
  <img :src="recipe.image">
  <h3>Ingredients</h3>
  <ul>
    <li class="ingredients" v-for="(ingredient, index) in recipe.ingredients" :key="`ingredient-${index}`">{{ingredient.measurement}} {{ingredient.name}}</li>
  </ul>
  <h3>Instructions</h3>
  <ol>
    <li class="instructions" v-for="(instruction, index) in recipe.recipe" :key="`instruction-${index}`">{{instruction.instruction}}</li>
  </ol>
  <div class="imageSource" v-if="hasImageSource">
    <p>Image taken from: <a :href="recipe.imageSource">Link</a></p>
  </div>
  <div class="recipeSource" v-if="hasRecipeSource">
    <p>Recipe taken from: <a :href="recipe.recipeSource">Link</a></p>
  </div>
  <div class="addFavorite">
    <input v-model="searchUser" placeholder="Search by Username">
    <button @click="addFavorite">Add to Favorites</button>
    <button @click="removeFavorite">Remove from Favorites</button>
    <p>{{message}}</p>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RecipePage',
  props: {
    recipeID: String
  },
  data() {
    return {
      recipe: '',
      searchUser: '',
      message: '',
    };
  },
  created() {
    this.getRecipe()
  },
  methods: {
    async getRecipe() {
      try {
        if (this.recipeID === 'random') {
          let response = await axios.get("/api/recipes");
          let recipes = response.data;
          this.recipe = recipes[Math.floor(Math.random() * recipes.length)]
        } else {
          let response = await axios.get("/api/recipes/" + this.recipeID)
          this.recipe = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async addFavorite() {
      try {
        let response = await axios.put("/api/users/favorite", {
          username: this.searchUser,
          recipeID: this.recipe._id,
        });
        this.message = response.data;
        this.searchUser = '';
      } catch (error) {
        console.log(error);
        this.message = error.response.data;
      }
    },
    async removeFavorite() {
      try {
        let response = await axios.put("/api/users/unfavorite", {
          username: this.searchUser,
          recipeID: this.recipe._id,
        });
        this.message = response.data;
        this.searchUser = '';
      } catch (error) {
        console.log(error);
        this.message = error.response.data;
      }
    }
  },
  computed: {
    hasImageSource() {
      return !(this.recipe.imageSource === '');
    },
    hasRecipeSource() {
      return !(this.recipe.recipeSource === '');
    }
  }
}
</script>

<style>
.ingredients,
.instructions {
  text-align: left;
  padding-bottom: 20px;
}

.recipePage img {
  width: 40%;
}
</style>
