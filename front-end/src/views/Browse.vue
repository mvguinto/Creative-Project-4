<template>
<div>
	<div class="menu">
		<img src="/images/Recipe-Cards.jpg">
		<p>Search By:</p>
		<a @click="select('Name')" href="#" v-bind:class="{active: nameIsActive}">Name</a> |
		<a @click="select('Ingredient')" href="#" v-bind:class="{active: ingredientIsActive}">Ingredient</a> |
		<a @click="select('User')" href="#" v-bind:class="{active: userIsActive}">User</a>
		<form class="pure-form">
			<i class="fas fa-search"></i><input v-model="searchText" />
		</form>
	</div>
	<div class="recipes" v-if="filteredRecipes.length > 0">
		<div class="recipe" v-for="recipe in filteredRecipes" :key="recipe._id">
			<img :src="recipe.image">
			<div class="info">
				<router-link :to="{ name: 'Recipe', params: {recipeID: recipe._id }}">{{recipe.name}}</router-link>
				<p>Difficulty: {{recipe.difficulty}}</p>
			</div>
		</div>
	</div>
	<div class="users" v-if="filteredUsers.length > 0">
		<div class="user" v-for="user in filteredUsers" :key="user._id">
			<img src="/images/Chef-Logo.jpg">
			<div class="info">
				<router-link :to="{ name: 'User', params: {userID: user._id }}">{{user.username}}</router-link>
				<p>Experience: {{user.experience}}</p>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Browse',
	data() {
		return {
			recipes: [],
			users: [],
			filter: 'Name',
			searchText: ''
		}
	},
	created() {
		this.getRecipes();
		this.getUsers();
	},
	computed: {
		filteredRecipes() {
			if (this.filter === 'Name') {
				return this.recipes.filter(recipe => recipe.name.toLowerCase()
					.search(this.searchText.toLowerCase()) >= 0);
			} else if (this.filter == 'Ingredient') {
				return this.recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.toLowerCase()
					.search(this.searchText.toLowerCase()) >= 0));
			} else {
				return [];
			}
		},
		filteredUsers() {
			if (this.filter === 'User') {
				return this.users.filter(user => user.username.toLowerCase()
					.search(this.searchText.toLowerCase()) >= 0);
			} else {
				return [];
			}
		},
		nameIsActive() {
			return this.filter === "Name"
		},
		ingredientIsActive() {
			return this.filter === "Ingredient"
		},
		userIsActive() {
			return this.filter === "User"
		},
	},
	methods: {
		async getRecipes() {
			try {
				let response = await axios.get("/api/recipes");
				this.recipes = response.data;
				return true;
			} catch (error) {
				console.log(error);
			}
		},
		select(filter) {
			this.filter = filter;
		},
		async getUsers() {
			try {
				let response = await axios.get("/api/users");
				this.users = response.data;
				return true;
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

input {
	width: 75%;
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

.recipes,
.users {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 25px;
	padding-bottom: 0px;
}

.recipe,
.user {
	width: 100%;
	padding-bottom: 15px;
}

.recipe a,
.user a {
	color: #000000
}

.recipe img,
	{
	height: 125px;
	width: 75px;
	object-fit: cover;
}

.user img {
	height: 125px;
	width: 75px;
	object-fit: contain;
}

.info p {
	font-size: 12px;
	margin: 0px;
}

@media only screen and (min-width: 961px) {
	img {
		width: 20%;
	}

	.recipe,
	.user {
		width: 33%;
	}

	.recipe img,
	.user img {
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
