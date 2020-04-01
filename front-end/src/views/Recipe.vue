<template>
<div class="recipePage">
  <h1>{{recipe.name}}</h1>
  <img :src="'/images/recipes/' + recipe.image">
  <h3>Ingredients</h3>
  <ul>
    <li class="ingredients" v-for="ingredient in recipe.ingredients" :key="ingredient.name">{{ingredient.measurement}} {{ingredient.name}}</li>
  </ul>
  <h3>Instructions</h3>
  <ol>
    <li class="instructions" v-for="(instruction, index) in recipe.recipe" :key="`instruction-${index}`">{{instruction}}</li>
  </ol>
  <p>Image taken from: <a :href="recipe.imageSource">Link</a></p>
  <p>Recipe taken from: <a :href="recipe.recipeSource">Link</a></p>
</div>
</template>

<script>
export default {
  name: 'RecipePage',
  props: {
    recipeName: String
  },
  data() {
    if (this.recipeName === "random") {
      return {
        recipe: this.$root.$data.recipes[Math.floor(Math.random() * this.$root.$data.recipes.length)]
      }
    } else
      return {
        recipe: this.$root.$data.recipes.find(recipe => recipe.name === this.recipeName)
      }
  },
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
