<template>
	<div id="category">
		<navbar class="category-navbar">
			<template v-slot:center>
				宝贝分类
			</template>
		</navbar>
	</div>
</template>

<script>
	import navbar from 'components/comment/navbar/Navbar.vue';
	export default{
		name:'category',
		components:{
			navbar
		}
	}
</script>

<style scoped>
	.category-navbar{
		background-color: skyblue;
		color: white;
	}
</style>
