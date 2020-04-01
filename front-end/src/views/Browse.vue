<template>
<div>
	<div class="menu">
		<img src="/images/Recipe-Cards.jpg">
		<p>Search By:</p>
		<a @click="select('Name')" href="#" v-bind:class="{active: nameIsActive}">Name</a> |
		<a @click="select('Ingredient')" href="#" v-bind:class="{active: !nameIsActive}">Ingredient</a>
		<form class="pure-form">
			<i class="fas fa-search"></i><input v-model="searchText" />
		</form>
	</div>
	<div class="recipes">
		<div class="recipe" v-for="recipe in recipes" :key="recipe.id">
			<img :src="'/images/recipes/' + recipe.image">
			<div class="info">
				<router-link :to="{ name: 'Recipe', params: {recipeName: recipe.name }}">{{recipe.name}}</router-link>
				<p>Difficulty: {{recipe.difficulty}}</p>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'Browse',
	data() {
		return {
			filter: 'Name',
			searchText: ''
		}
	},
	computed: {
		recipes() {
			if (this.filter === 'Name') {
				return this.$root.$data.recipes.filter(recipe => recipe.name.toLowerCase()
					.search(this.searchText.toLowerCase()) >= 0);
			} else if (this.filter == 'Ingredient') {
				return this.$root.$data.recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.toLowerCase()
					.search(this.searchText.toLowerCase()) >= 0));
			} else {
				return null
			}
		},
		nameIsActive() {
			return this.filter === "Name"
		},
	},
	methods: {
		select(filter) {
			this.filter = filter;
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

.recipes {
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

.recipe img {
	height: 125px;
	width: 75px;
	object-fit: cover;
}

.info p {
	font-size: 12px;
	margin: 0px;
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
