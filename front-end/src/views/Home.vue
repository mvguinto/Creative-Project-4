<template>
<div class="home">
	<img alt="Chef logo" src="/images/Little-Chef.jpg" class="logo">
	<h1>Welcome to:</h1>
	<h1>Recipes for the Reasonably Qualified!</h1>
</div>
</template>

<script>
export default {
	name: 'Home',
}
</script>

<style>
.logo {
	width: 100%;
}

.home h1 {
	font-size: 30px;
}

@media only screen and (min-width: 961px) {
	.logo {
		width: 65%;
	}
}
</style>
