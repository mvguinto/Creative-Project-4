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
export default {
  name: 'UserPage',
  props: {
    userID: String
  },
  data() {
    return {
      user: null
    }
  },
}
</script>
