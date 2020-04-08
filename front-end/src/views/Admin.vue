<template>
<div class="admin">
	<h1>Admin Page</h1>
	<!--Add Recipe -->
	<div class="heading">
		<button @click="setAddRecipe">Add a Recipe</button>
		<button @click="setEditDeleteRecipe">Edit or Delete a Recipe</button>
		<button @click="setAddUser">Add User</button>
		<button @click="setEditDeleteUser">Edit or Delete a User</button>
	</div>
	<div class="adminContent">
		<div class="addRecipeView" v-show='addRecipe'>
			<div class="form">
				<input v-model="recipeName" placeholder="Name">
				<div class="largeLineBreak"></div>
				<input type="file" name="photo" @change="fileChanged">
				<div class="addIngredients">
					<ul>
						<li class="ingredient" v-for="ingredient in addedIngredients" :key="ingredient.name">{{ingredient.measurement}} {{ingredient.name}}</li>
					</ul>
					<input v-model="ingredientName" placeholder="Name">
					<input v-model="ingredientMeasurment" placeholder="Measurement">
					<button @click="addIngredient">Add New Ingredient</button>
				</div>
				<div class="addInstructions">
					<p>Please add recipe one step at a time</p>
					<ol>
						<li class="instructions" v-for="(instruction, index) in addedInstructions" :key="`instruction-${index}`">{{instruction.instruction}}</li>
					</ol>
					<textarea class="largeText" v-model="recipeInstruction" placeholder="Recipe Step"></textarea>
					<div></div>
					<button @click="addInstruction">Add New Step</button>
				</div>
				<input v-model="difficulty" placeholder="Recipe Difficulty">
				<div class="lineBreak"></div>
				<p>If you are using an original recipe and/or image, leave the appropriate spaces below blank.</p>
				<input v-model="imageSource" placeholder="Image Source">
				<div></div>
				<input v-model="recipeSource" placeholder="Recipe Source">
				<div class="lineBreak"></div>
				<button @click="uploadRecipe">Upload</button>
			</div>
			<div class="upload" v-if="addedRecipe">
				<p>Your recipe has been added! View your recipe at the link below.</p>
				<router-link :to="{ name: 'Recipe', params: {recipeID: addedRecipe._id }}">{{addedRecipe.name}}</router-link>
			</div>
		</div>
		<!--Edit and Delete Recipe -->
		<div class="editDeleteRecipeView" v-show="editDeleteRecipe">
			<div class="form">
				<input v-model="findName" placeholder="Search Recipe Names">
				<div class="suggestions" v-if="suggestions.length > 0">
					<div class="suggestion" v-for="s in suggestions" :key="s._id" @click="selectRecipe(s)">{{s.name}}
					</div>
				</div>
			</div>
			<div class="upload" v-if="findRecipe">
				<input v-model="findRecipe.name" placeholder="Name">
				<div class="largeLineBreak"></div>
				<img :src="findRecipe.image" />
				<div class="lineBreak"></div>
				<div class="editIngredients" v-for="(ingredient, index) in findRecipe.ingredients" :key="`ingredient-${index}`">
					<input v-model="ingredient.name" placeholder="Name">
					<input v-model="ingredient.measurement" placeholder="Measurement">
				</div>
				<input v-model="ingredientName" placeholder="Name">
				<input v-model="ingredientMeasurment" placeholder="Measurement">
				<button @click="editAddIngredient">Add New Ingredient</button>
				<div class="lineBreak"></div>
				<div class="editRecipe" v-for="(instruction, index) in findRecipe.recipe" :key="`instruction-${index}`">
					<textarea class="largeText" v-model="instruction.instruction" placeholder="Recipe Step"></textarea>
				</div>
				<textarea class="largeText" v-model="recipeInstruction" placeholder="Recipe Step"></textarea>
				<div class="lineBreak"></div>
				<button @click="editAddInstruction">Add New Step</button>
				<div class="lineBreak"></div>
				<input v-model="findRecipe.imageSource" placeholder="Add an Image Source">
				<div></div>
				<input v-model="findRecipe.recipeSource" placeholder="Add Recipe Source">
				<div class="lineBreak"></div>
				<div class="actions" v-if="findRecipe">
					<button @click="deleteRecipe(findRecipe)">Delete</button>
					<button @click="editRecipe(findRecipe)">Edit</button>
				</div>
			</div>
		</div>
		<!--Add a User -->
		<div class="addUserView" v-show="addUser">
			<div class="form">
				<input v-model="userName" placeholder="Name">
				<input v-model="userUsername" placeholder="Username">
				<div class="largeLineBreak"></div>
				<textarea class="largeText" v-model="userBio" placeholder="Bio"></textarea>
				<p></p>
				<input class="smallText" v-model="userExperience" placeholder="Cooking Experience Level">
				<div class="largeLineBreak"></div>
				<button @click="uploadUser">Upload</button>
			</div>
		</div>
		<!--Edit and Delete User -->
		<div class="editDeleteUserView" v-show="editDeleteUser">
			<div class="form">
				<input v-model="findName" placeholder="Search Usernames">
				<div class="suggestions" v-if="suggestions.length > 0">
					<div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectUser(s)">{{s.username}}
					</div>
				</div>
			</div>
			<div class="upload" v-if="findUser">
				<input v-model="findUser.name" placeholder="Name">
				<input v-model="findUser.username" placeholder="Username">
				<p></p>
				<textarea class="largeText" v-model="findUser.bio" placeholder="Bio"></textarea>
				<p></p>
				<input class="smallText" v-model="findUser.experience" placeholder="Cooking Experience Level" />
				<p>Favorite Recipes</p>
				<ul>
					<div class="recipe" v-for="recipe in findUserRecipes" :key="recipe._id">
						<li>
							<router-link :to="{ name: 'Recipe', params: {recipeID: recipe._id }}">{{recipe.name}}</router-link>
						</li>
					</div>
				</ul>
				<p>Navigate to desired recipe page to add and delete from favorites</p>
			</div>
			<div class="actions" v-if="findUser">
				<button @click="deleteUser(findUser)">Delete</button>
				<button @click="editUser(findUser)">Edit</button>
			</div>
		</div>
	</div>
	<div v-if="hasError">
		{{error.message}}
	</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'Admin',
	data() {
		return {
			addRecipe: false,
			editDeleteRecipe: false,
			addUser: false,
			editDeleteUser: false,
			recipes: [],
			recipeName: '',
			file: null,
			addedIngredients: [],
			ingredientName: '',
			ingredientMeasurment: '',
			addedInstructions: [],
			recipeInstruction: '',
			difficulty: '',
			imageSource: '',
			recipeSource: '',
			addedRecipe: null,
			findName: '',
			findRecipe: null,
			userName: '',
			userUsername: '',
			userBio: '',
			userExperience: '',
			addedUser: null,
			users: [],
			findUser: null,
			findUserRecipes: [],
			error: ''
		}
	},
	created() {
		this.getRecipes();
		this.getUsers();
	},
	methods: {
		setAddRecipe() {
			this.addRecipe = true;
			this.editDeleteRecipe = false;
			this.addUser = false;
			this.editDeleteUser = false;
		},
		setEditDeleteRecipe() {
			this.addRecipe = false;
			this.editDeleteRecipe = true;
			this.addUser = false;
			this.editDeleteUser = false;
		},
		setAddUser() {
			this.addRecipe = false;
			this.editDeleteRecipe = false;
			this.addUser = true;
			this.editDeleteUser = false;
		},
		setEditDeleteUser() {
			this.addRecipe = false;
			this.editDeleteRecipe = false;
			this.addUser = false;
			this.editDeleteUser = true;
		},
		selectRecipe(recipe) {
			this.findName = '';
			this.findRecipe = recipe;
		},
		fileChanged(event) {
			this.file = event.target.files[0]
		},
		addIngredient() {
			this.addedIngredients.push({
				name: this.ingredientName,
				measurement: this.ingredientMeasurment,
			});
			this.ingredientName = '';
			this.ingredientMeasurment = '';
		},
		addInstruction() {
			this.addedInstructions.push({
				instruction: this.recipeInstruction
			})
			this.recipeInstruction = '';
		},
		async uploadRecipe() {
			try {
				const formData = new FormData();
				formData.append('photo', this.file, this.file.name)
				let r1 = await axios.post('/api/photos', formData);
				let r2 = await axios.post('/api/recipes', {
					name: this.recipeName,
					image: r1.data.path,
					ingredients: this.addedIngredients,
					recipe: this.addedInstructions,
					difficulty: this.difficulty,
					imageSource: this.imageSource,
					recipeSource: this.recipeSource,
				});
				this.addedRecipe = r2.data;
				this.clearAddedRecipe();
				this.getRecipes();
			} catch (error) {
				this.error = error;
			}
		},
		async getRecipes() {
			try {
				let response = await axios.get("/api/recipes");
				this.recipes = response.data;
				return true;
			} catch (error) {
				this.error = error;
			}
		},
		clearAddedRecipe() {
			this.recipeName = "";
			this.file = null;
			this.addedIngredients = [];
			this.addedInstructions = [];
			this.difficulty = "";
			this.imageSource = "";
			this.recipeSource = "";
		},
		editAddIngredient() {
			this.findRecipe.ingredients.push({
				name: this.ingredientName,
				measurement: this.ingredientMeasurment,
			});
			this.ingredientName = '';
			this.ingredientMeasurment = '';
		},
		editAddInstruction() {
			this.findRecipe.recipe.push({
				instruction: this.recipeInstruction,
			});
			this.recipeInstruction = '';
		},
		async deleteRecipe(recipe) {
			try {
				await axios.delete("/api/recipes/" + recipe._id);
				this.findRecipe = null;
				this.getRecipes();
				return true;
			} catch (error) {
				this.error = error;
			}
		},
		async editRecipe(recipe) {
			try {
				await axios.put("/api/recipes/" + recipe._id, {
					name: recipe.name,
					ingredients: recipe.ingredients,
					recipe: recipe.recipe,
					difficulty: recipe.difficulty,
					recipeSource: recipe.recipeSource,
					imageSource: recipe.imageSource
				});
				this.findRecipe = null;
				this.getRecipes();
				return true;
			} catch (error) {
				this.error = error;
			}
		},
		async uploadUser() {
			try {
				let r1 = await axios.post("/api/users/", {
					name: this.userName,
					username: this.userUsername,
					bio: this.userBio,
					experience: this.userExperience
				});
				this.addedUser = r1.data;
				this.clearAddedUser();
				this.getUsers();
			} catch (error) {
				this.error = error;
			}
		},
		async getUsers() {
			try {
				let response = await axios.get("/api/users");
				this.users = response.data;
				return true;
			} catch (error) {
				this.error = error;
			}
		},
		clearAddedUser() {
			this.userName = '';
			this.userUsername = '';
			this.userBio = '';
			this.userExperience = '';
		},
		async selectUser(user) {
			this.findUserRecipes = [];
			this.findName = '';
			this.findUser = user;
			for (let i = 0; i < this.findUser.favorite_recipes.length; i++) {
				let recipe = await this.getRecipe(this.findUser.favorite_recipes[i]);
				this.findUserRecipes.push(recipe);
			}
		},
		async getRecipe(recipeID) {
			try {
				let response = await axios.get("/api/recipes/" + recipeID)
				return response.data;
			} catch (error) {
				this.error = error;
			}
		},
		async deleteUser(user) {
			try {
				await axios.delete("/api/users/" + user._id);
				this.findUser = null;
				this.getUsers();
				return true;
			} catch (error) {
				this.error = error;
			}
		},
		async editUser(user) {
			try {
				await axios.put("/api/users/" + user._id, {
					name: user.name,
					username: user.username,
					bio: user.bio,
					experience: user.experience,
				});
				this.findUser = null;
				this.getUsers();
				return true;
			} catch (error) {
				this.error = error;
			}
		},
	},
	computed: {
		suggestions() {
			if (this.editDeleteRecipe) {
				let recipes = this.recipes.filter(recipe => recipe.name.toLowerCase()
					.startsWith(this.findName.toLowerCase()));
				return recipes.sort((a, b) => a.name > b.name);
			} else if (this.editDeleteUser) {
				let users = this.users.filter(user => user.username.toLowerCase()
					.startsWith(this.findName.toLowerCase()));
				return users.sort((a, b) => a.name > b.name);
			} else {
				return [];
			}
		},
		hasError() {
			return this.error !== null;
		}
	}
}
</script>

<style scoped>
a {
	color: #d9bd8b;
}

p {
	margin-block-start: 5px;
	margin-block-end: 5px;
}

.adminContent {
	padding-top: 30px;
}

.largeLineBreak {
	height: 30px;
}

.lineBreak {
	height: 10px;
}

.addInstructions {
	padding-top: 25px;
}

/* Form */
input,
textarea,
select,
button {
	margin: 5px;
	font-family: 'Indie Flower', cursive;
	font-size: 1em;
}

/* Uploaded images */
.upload h2 {
	margin: 0px;
}

.upload img {
	max-width: 300px;
}

/* Suggestions */
.suggestions {
	width: 200px;
	border: 1px solid #ccc;
	margin: auto;
	margin-top: 10px;
	margin-bottom: 10px;
}

.suggestion {
	min-height: 20px;
}

.suggestion:hover {
	background-color: #f2ebc9;
	color: #633417;
}

.smallText {
	width: 70%;
}

.largeText {
	width: 90%;
	height: 100px;
}

@media only screen and (min-width: 961px) {
	.largeText {
		height: 250px;
	}

	.smallText {
		width: 50%;
	}
}
</style>
