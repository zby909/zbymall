<template>
	<div class="back-topbtn">
		<img src="~assets/img/common/top.png" alt="">
	</div>
</template>

<script>
	export default{
		name:'Backtopbtn'
	}
</script>

<style scoped>
	.back-topbtn{
		position: fixed;
		z-index: 1000;
		bottom: 58px;
		right: 13px;
	}
	.back-topbtn img{
		width: 43px;
	}
</style>
