<template>
	<div class="DetailNavBar">
		<div class="bar-item bar-left">
			<div>客服</div>
			<div>店铺</div>
			<div>收藏</div>
		</div>
		<div class="bar-item bar-right">
			<div class="cart">加入购物车</div>
			<div class="buy">购买</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailNavBar'
};
</script>

<style scoped>
.DetailNavBar {
	height: 49px;
	background-color: white;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	text-align: center;
	line-height: 49px;
	font-size: 14px;
}
.bar-item {
	flex: 1;
	display: flex;
}
.bar-item > div {
	flex: 1;
}
.bar-right {
	font-size: 15px;
	color: #ffffff;
}
.cart {
	background-color: #ffe817;
	color: #333;
}
.buy {
	background-color: #f69;
}
</style>
