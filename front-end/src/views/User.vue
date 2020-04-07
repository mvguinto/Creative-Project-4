<template>
<div class="userPage">
	<img src="/images/Chef-Logo.jpg">
	<h1>Username: {{user.username}}</h1>
	<h2>Name: {{user.name}}</h2>
	<p>Bio: </p>
	<div class="userBio">
		<p>{{user.bio}}</p>
	</div>
	<p>Experience: {{user.experience}}</p>
	<p>{{user.username}}'s Favorited Recipes</p>
	<div class="favoriteRecipes" v-if="favoriteRecipes.length > 0">
		<div class="recipe" v-for="recipe in favoriteRecipes" :key="recipe._id">
			<img :src="recipe.image">
			<div class="info">
				<router-link :to="{ name: 'Recipe', params: {recipeID: recipe._id }}">{{recipe.name}}</router-link>
				<p>Difficulty: {{recipe.difficulty}}</p>
			</div>
		</div>
	</div>
	<div v-else>
		<p>This user does not have any favorited recipes</p>
	</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'UserPage',
	props: {
		userID: String
	},
	data() {
		return {
			user: '',
			favoriteRecipes: []
		}
	},
	async created() {
		try {
			await this.getUser()
			for (let i = 0; i < this.user.favorite_recipes.length; i++) {
				let recipe = await this.getRecipe(this.user.favorite_recipes[i]);
				this.favoriteRecipes.push(recipe);
			}
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		async getUser() {
			try {
				let response = await axios.get("/api/users/" + this.userID)
				this.user = response.data;
			} catch (error) {
				console.log(error);
			}
		},
		async getRecipe(recipeID) {
			try {
				let response = await axios.get("/api/recipes/" + recipeID)
				return response.data;
			} catch (error) {
				console.log(error);
			}
		}
	}
}
</script>

<style>
.menu p {
	margin: 0px;
}

img {
	width: 40%;
}

a {
	color: #d9bd8b;
}

.active {
	color: #321e17;
}

.favoriteRecipes {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 25px;
	padding-bottom: 0px;
}

.recipe {
	width: 100%;
	padding-bottom: 15px;
}

.recipe a {
	color: #000000
}

.recipe img,
	{
	height: 125px;
	width: 75px;
	object-fit: cover;
}

.info p {
	font-size: 12px;
	margin: 0px;
}

.userBio {
	border: 1px solid #000000
}

@media only screen and (min-width: 961px) {
	img {
		width: 20%;
	}

	.recipe {
		width: 33%;
	}

	.recipe img {
		height: 200px;
		width: 150px;
	}

	.info p {
		font-size: 24px;
		margin: 0px;
	}

	input {
		width: 40%;
	}
}
</style>
