<template>
	<div class="wrapper" ref="wrapper">
		<div><slot></slot></div>
	</div>
</template>

<script>
import Scroll from 'better-scroll';
export default {
	name: 'Scrolltool',
	props: {
		probeType: {
			type: Number,
			default: 1
		},
		pullUpLoad: {
			type: Boolean,
			default: false
		}
	},
	mounted() {
		this.Scrolltool = new Scroll(this.$refs.wrapper, {
			click: true, //允许点击事件
			probeType: this.probeType, //滚动监听状态3为实时监听
			pullUpLoad: this.pullUpLoad
		});
		//监听滚动位置
		this.Scrolltool.on('scroll', Scrolldistance => {
			this.$emit('GetScrolldistance', Scrolldistance);
		});
		//监听上拉操作
		this.Scrolltool.on('pullingUp', () => {
			this.$emit('GetScrollpullingUp');
		});
	},
	data() {
		return {
			Scrolltool: null
		};
	},
	methods: {
		//回到指定位置方法
		scrolltop(x, y, time = 300) {
			this.Scrolltool.scrollTo(x, y, time);
		},
		//每次下拉操作之后回调这个函数才能进行下一次下拉操作
		finishPullUp(){
			this.Scrolltool.finishPullUp()
		}
	}
};
</script>

<style scoped></style>
