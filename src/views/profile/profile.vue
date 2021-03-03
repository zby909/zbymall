<template>
	<div id="profile">
		<navbar class="profile-navbar">
			<template v-slot:center>
				用户中心
			</template>
		</navbar>
	</div>
</template>

<script>
//页面上方的提示栏
import navbar from 'components/comment/navbar/Navbar.vue';
export default {
	name: 'profile',
	components: {
		navbar
	}
};
</script>

<style scoped>
.profile-navbar {
	background-color: skyblue;
	color: white;
}
</style>
