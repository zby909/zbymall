<template>
	<div class="details">
		<navbar class="details-navbar">
			<template v-slot:left>
				<div @click="getback"><img src="~assets/img/common/back.svg" alt="" class="details-navbar-back" /></div>
			</template>
			<template v-slot:center>
				<div class="details-navbar-item">
					<div @click="itemClick(index)" v-for="(item, index) in title" :key="index">
						<span :class="{ active: currentIndex === index }">{{ item }}</span>
					</div>
				</div>
			</template>
		</navbar>
		<div>我是商品的id：{{ iid }}</div>
		<p>还是取数据渲染就行啦，不想做♪(^∇^*)</p>
	</div>
</template>

<script>
//页面上方的提示栏
import navbar from 'components/comment/navbar/Navbar.vue';
export default {
	name: 'Details',
	data() {
		return {
			iid: null,
			title: ['商品', '参数', '评论', '推荐'],
			currentIndex: 0
		};
	},
	props: {},
	created() {
		this.iid = this.$route.params.iid;
	},
	components: {
		navbar
	},
	methods: {
		getback() {
			this.$router.back();
		},
		itemClick(index) {
			this.currentIndex = index;
			this.$emit('tabClick', index);
		}
	}
};
</script>

<style scoped>
.details-navbar {
	background-color: #fff;
	box-shadow: -1px 0 1px rgba(100, 100, 100, 0.5);
}
.details-navbar-item {
	display: flex;
}
.details-navbar-item > div {
	flex: 1;
	font-size: 14px;
}
.details-navbar-back {
	vertical-align: middle;
}
.active {
	color: var(--color-high-text);
}
</style>
