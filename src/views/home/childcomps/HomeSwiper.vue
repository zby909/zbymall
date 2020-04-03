<template>
	<Swiper>
		<SwiperItem v-for="(item, index) in banner" :key="index">
			<a :href="item.link"><img :src="item.image" alt="" @load="isimgload" /></a>
		</SwiperItem>
	</Swiper>
</template>

<script>
// 轮播图ui组件
import { Swiper, SwiperItem } from 'components/comment/swiper';
export default {
	name: 'HomeSwiper',
	data() {
		return {
			isLoad: false
		};
	},
	props: {
		banner: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	components: {
		Swiper,
		SwiperItem
	},
	methods: {
		isimgload() {
			if (!this.isLoad) {
				this.$emit('Swiperimglode');
				this.isLoad = true;
			}
		}
	}
};
</script>

<style scoped></style>
