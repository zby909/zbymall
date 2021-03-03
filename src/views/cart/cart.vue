<template>
	<div id="cart">
		<navbar class="cart-navbar">
			<template v-slot:center>
				购物车
			</template>
		</navbar>
	</div>
</template>

<script>
//页面上方的提示栏
import navbar from 'components/comment/navbar/Navbar.vue';
export default {
	name: 'cart',
	components: {
		navbar
	}
};
</script>

<style scoped>
.cart-navbar {
	background-color: skyblue;
	color: white;
}
</style>
