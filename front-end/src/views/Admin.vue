<template>
<div class="admin">
	<h1>Admin Page</h1>
	<div class="heading">
		<div class="circle">1</div>
		<h2>Add a Recipe</h2>
	</div>
	<div class="add">
		<div class="form">
			<input v-model="recipeName" placeholder="Name">
			<p></p>
			<input type="file" name="photo" @change="fileChanged">
			<div class="addIngredients">
				<ul>
					<li class="ingredient" v-for="ingredient in addedIngredients" :key="ingredient.name">{{ingredient.measurement}} {{ingredient.name}}</li>
				</ul>
				<input v-model="ingredientName" placeholder="Ingredient Name">
				<input v-model="ingredientMeasurment" placeholder="Ingredient Measurement">
				<button @click="addIngredient">Add Ingredient</button>
			</div>
			<div class="addRecipe">
				<p>Please add recipe one step at a time</p>
				<ol>
					<li class="instructions" v-for="(instruction, index) in addedInstructions" :key="`instruction-${index}`">{{instruction}}</li>
				</ol>
				<textarea v-model="recipeInstruction" rows="4" cols="50" placeholder="Recipe Step"></textarea>
				<button @click="addInstruction">Add Step</button>
			</div>
			<input v-model="difficulty" placeholder="Recipe Difficulty">
			<input v-model="imageSource" placeholder="Image Source.  Leave blank if using original image">
			<input v-model="recipeSource" placeholder="Recipe Source.  Leave blank if using original recipe">
			<button @click="upload">Upload</button>
		</div>
		<div class="upload" v-if="addedRecipe">
			<p>Your recipe has been added! View your recipe at the link below.</p>
			<router-link :to="{ name: 'Recipe', params: {recipeName: addedRecipe.name }}">{{addedRecipe.name}}</router-link>
		</div>
	</div>
	<!--
	<div class="heading">
		<div class="circle">2</div>
		<h2>Edit/Delete a Recipe</h2>
	</div>
	<div class="edit">
		<div class="form">
			<input v-model="findRecipe" placeholder="Search">
			<div class="suggestions" v-if="suggestions.length > 0">
				<div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectRecipe(s)">{{s.title}}
				</div>
			</div>
		</div>
		<div class="upload" v-if="findRecipe">
			<input v-model="findRecipe.title">
			<p></p>
			<textarea v-model="findRecipe.description" rows="4" cols="34"></textArea>
			<p></p>
			<img :src="findItem.path" />
		</div>
		<div class="actions" v-if="findRecipe">
			<button @click="deleteItem(findRecipe)">Delete</button>
			<button @click="editItem(findRecipe)">Edit</button>
		</div>
	</div>
	<div class="heading">
		<div class="circle">3</div>
		<h2>Add a User</h2>
	</div>
	<div class="add">
		<div class="form">
			<input v-model="userName" placeholder="Username">
			<p></p>
			<textarea v-model="description" rows="4" cols="50" placeholder="Item Description"></textarea>
			<p></p>
			<input type="file" name="photo" @change="fileChanged">
			<button @click="upload">Upload</button>
		</div>
		<div class="upload" v-if="addRecipe">
			<h2>{{addRecipe.title}}</h2>
			<img :src="addRecipe.path" />
			<p>{{addRecipe.description}}</p>
		</div>
	</div>
	<div class="heading">
		<div class="circle">4</div>
		<h2>Edit/Delete a User</h2>
	</div>
	<div class="edit">
		<div class="form">
			<input v-model="findRecipe" placeholder="Search">
			<div class="suggestions" v-if="suggestions.length > 0">
				<div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectRecipe(s)">{{s.title}}
				</div>
			</div>
		</div>
		<div class="upload" v-if="findRecipe">
			<input v-model="findRecipe.title">
			<p></p>
			<textarea v-model="findRecipe.description" rows="4" cols="34"></textArea>
			<p></p>
			<img :src="findItem.path" />
		</div>
		<div class="actions" v-if="findRecipe">
			<button @click="deleteItem(findRecipe)">Delete</button>
			<button @click="editItem(findRecipe)">Edit</button>
		</div>
	</div>
-->
</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'Admin',
	data() {
		return {
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
			addedRecipe: null
		}
	},
	created() {
		this.getRecipes();
	},
	methods: {
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
			this.addedInstructions.push(this.recipeInstruction)
			this.recipeInstruction = '';
		},
		async upload() {
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
			} catch (error) {
				console.log(error);
			}
		},
		async getRecipes() {
			try {
				let response = await axios.get("/api/recipes");
				this.recipes = response.data;
				return true;
			} catch (error) {
				console.log(error);
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
		}
	}
}
</script>

<style scoped>
.image h2 {
	font-style: italic;
	font-size: 1em;
}

.heading {
	display: flex;
	margin-bottom: 20px;
	margin-top: 20px;
}

.heading h2 {
	margin-top: 8px;
	margin-left: 10px;
}

.add,
.edit {
	display: flex;
}

.circle {
	border-radius: 50%;
	width: 18px;
	height: 18px;
	padding: 8px;
	background: #333;
	color: #fff;
	text-align: center
}

/* Form */
input,
textarea,
select,
button {
	font-family: 'Montserrat', sans-serif;
	font-size: 1em;
}

.form {
	margin-right: 50px;
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
}

.suggestion {
	min-height: 20px;
}

.suggestion:hover {
	background-color: #5BDEFF;
	color: #fff;
}
</style>
