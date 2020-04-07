<template>
<div class="userPage">
	<img src="/images/Chef-Logo.jpg">
	<h1>{{user.username}}</h1>
	<h2>{{user.name}}</h2>
	<p>Bio: </p>
	<p>{{user.bio}}</p>
	<p>Experience: {{user.experience}}</p>
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
			user: ''
		}
	},
	async created() {
		this.user = await this.getUser()
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
	}
}
</script>
