<template>
	<Swiper>
		<SwiperItem v-for="(item,index) in banner" :key="index">
			<a :href="item.link">
				<img :src="item.image" alt="">
			</a>
		</SwiperItem>
	</Swiper>
</template>

<script>
	// 轮播图ui组件
	import {Swiper,SwiperItem} from 'components/comment/swiper';
	export default{
		name:'HomeSwiper',
		props:{
			banner:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style scoped>
</style>
