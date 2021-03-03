<template>
	<div class="details">
		<DetailNavBar class="details-navbar"></DetailNavBar>
		<Scrolltool class="content">
			<DetailSwiper :topImages="topImages"></DetailSwiper>
			<div>我是商品的id：{{ iid }}</div>
			<p>还是取数据渲染就行啦，不想做♪(^∇^*)</p>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li>---故事总有结局---</li>
			</ul>
		</Scrolltool>
		<DetailsBottomBar></DetailsBottomBar>
	</div>
</template>

<script>
//页面上方的提示栏
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
//滚动工具
import Scrolltool from 'components/comment/scroll/Scrolltool.vue';
//底部工具栏
import DetailsBottomBar from './childComps/DetailsBottomBar.vue';

//网络请求
import { getDetail } from 'network/detail';
export default {
	name: 'Details',
	data() {
		return {
			iid: null,
			topImages: []
		};
	},
	props: {},
	created() {
		this.iid = this.$route.params.iid;
		// 2.根据iid请求详情数据
		getDetail(this.iid).then(res => {
			// 1.获取顶部的图片轮播数据
			console.log(1,res);
			const data = res.result;
			this.topImages = data.itemInfo.topImages;
		});
	},
	components: {
		DetailNavBar,
		DetailSwiper,
		Scrolltool,
		DetailsBottomBar
	}
};
</script>

<style scoped>
.details {
	position: relative;
	height: 100vh;
	background-color: #ffffff;
	z-index: 1000;
}
.content {
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	overflow: hidden;
}
</style>
