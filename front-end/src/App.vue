<template>
<div id="app">
	<div class='body-container'>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/Browse">Browse</router-link> |
			<router-link :to="{ name: 'Recipe', params: {recipeName: 'random' }}">Random</router-link>
		</div>
		<div class="content-wrapper">
			<router-view />
		</div>
	</div>
	<Footer />
</div>
</template>

<script>
import Footer from "./components/Footer.vue"
export default {
	name: 'App',
	components: {
		Footer
	},
}
</script>

<style>
body {
	background: #321e17;
	padding: 20px;
	margin: 0px;
	position: relative;
	min-height: 100vh;
	padding-bottom: 60px;
}

#app {
	font-family: 'Indie Flower', cursive;
	font-size: 15px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	background: #FFFFFF;
}

.body-container {
	margin-bottom: 20px;
}

.content-wrapper {
	margin: 5%;
	padding: 0% 15% 10% 15%;
}

#nav {
	padding: 10% 7.5%;
	background: #FFFFFF url("/images/Rolling-Pin.jpg") no-repeat center;
	background-size: 100%;
}

#nav a {
	font-weight: bold;
	color: #f2ebc9;
}

#nav a.router-link-exact-active {
	color: #321e17;
}

@media only screen and (min-width: 961px) {
	body {
		padding: 40px;
	}

	#app {
		font-size: 35px;
		margin-bottom: 60px;
	}

	#nav {
		background-size: 75%
	}

	.content-wrapper {
		margin: 0%;
		padding: 0% 15% 3% 15%;
	}
}
</style>
