<template>
	<div class="navbar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'Navbar'
	}
</script>

<style scoped>
	.navbar{
		display: flex;
		text-align: center;
		height: 45px;
		line-height: 44px;
		position: relative;
		z-index: 999;
	}
	.left,.right{
		width: 60px;
	}
	.center{
		flex: 1;
	}
</style>
