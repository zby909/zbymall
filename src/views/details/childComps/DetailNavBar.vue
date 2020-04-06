<template>
	<div>
		<nav-bar>
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
		</nav-bar>
	</div>
</template>

<script>
import NavBar from 'components/comment/navbar/Navbar';

export default {
	name: 'DetailNavBar',
	components: {
		NavBar
	},
	data() {
		return {
			title: ['商品', '参数', '评论', '推荐'],
			currentIndex: 0
		};
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
