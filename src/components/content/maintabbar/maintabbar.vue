//这是实例化tabbar文件夹里面的内容 组成一个完整的tab栏
<template>
	<tabbar>
		<tabbaritem path="/home" activecolor="">
			<template v-slot:itemimg>
				<img src="~assets/img/tabbar/home.svg" alt="" />
			</template>
			<template v-slot:itemactive>
				<img src="~assets/img/tabbar/home_active.svg" alt="" />
			</template>
			<template v-slot:itemtext>
				<div>首页</div>
			</template>
		</tabbaritem>
		<tabbaritem path="/category" activecolor="">
			<template v-slot:itemimg>
				<img src="~assets/img/tabbar/category.svg" alt="" />
			</template>
			<template v-slot:itemactive>
				<img src="~assets/img/tabbar/category_active.svg" alt="" />
			</template>
			<template v-slot:itemtext>
				<div>分类</div>
			</template>
		</tabbaritem>
		<tabbaritem path="/cart" activecolor="">
			<template v-slot:itemimg>
				<img src="~assets/img/tabbar/shopcart.svg" alt="" />
			</template>
			<template v-slot:itemactive>
				<img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
			</template>
			<template v-slot:itemtext>
				<div>购物车</div>
			</template>
		</tabbaritem>
		<tabbaritem path="/profile" activecolor="">
			<template v-slot:itemimg>
				<img src="~assets/img/tabbar/profile.svg" alt="" />
			</template>
			<template v-slot:itemactive>
				<img src="~assets/img/tabbar/profile_active.svg" alt="" />
			</template>
			<template v-slot:itemtext>
				<div>个人中心</div>
			</template>
		</tabbaritem>
	</tabbar>
</template>

<script>
import tabbar from 'components/comment/tabbar/tabbar.vue';
import tabbaritem from 'components/comment/tabbar/tabbaritem.vue';
export default {
	components: {
		tabbar,
		tabbaritem
	}
};
</script>

<style></style>
