<template>
	<div id="home">
		<navbar class="home-navbar">
			<template v-slot:center>
				购物街
			</template>
		</navbar>
		<TabControl v-show="isTabControlShow" class="tab-control" ref="TabControl2" :titles="['流行', '新款', '精选']" @tabClick="tabClick"></TabControl>
		<Scrolltool class="content" ref="Scrolltool" :probeType="3" :pullUpLoad="true" @GetScrolldistance="GetScrolldistance" @GetScrollpullingUp="GetScrollpullingUp">
			<homeswiper :banner="banner" @Swiperimglode="Swiperimglode"></homeswiper>
			<HomeRecommend :recommends="recommends"></HomeRecommend>
			<FeatureView></FeatureView>
			<TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="TabControl1"></TabControl>
			<Goodslist :goods="goods[defaulttype].list"></Goodslist>
		</Scrolltool>
		<Backtopbtn @click.native="Backtopbtn" v-show="isBacktopShow"></Backtopbtn>
	</div>
</template>

<script>
//页面上方的提示栏
import navbar from 'components/comment/navbar/Navbar.vue';
//滚动工具
import Scrolltool from 'components/comment/scroll/Scrolltool.vue';
//回到顶部按钮
import Backtopbtn from 'components/comment/backtop/Backtopbtn.vue';
//商品导航栏控制
import TabControl from 'components/content/tabControl/TabControl.vue';
//商品内容页
import Goodslist from 'components/content/goods/Goodslist.vue';

// 实例化的home轮播图
import homeswiper from './childcomps/HomeSwiper.vue';
//推荐模块
import HomeRecommend from './childcomps/HomeRecommend.vue';
import FeatureView from './childcomps/FeatureView.vue';

import { gethomedata, gethomegoods } from 'network/home.js';
export default {
	data() {
		return {
			banner: [],
			recommends: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] }
			},
			defaulttype: 'pop',
			isBacktopShow: false,
			TabControlOffsetTop: 0,
			isTabControlShow: false,
			saveY: 0
		};
	},
	components: {
		navbar,
		homeswiper,
		HomeRecommend,
		FeatureView,
		TabControl,
		Goodslist,
		Scrolltool,
		Backtopbtn
	},
	//生命周期发送网络请求
	created() {
		this.gethomedatafun();
		this.gethomegoodsfun('pop');
		this.gethomegoodsfun('new');
		this.gethomegoodsfun('sell');
	},
	destroyed() {
		console.log('home destroyed');
	},
	activated() {
		// 设定离开该组件时的滚动高度
		this.$refs.Scrolltool.refresh();
		this.$refs.Scrolltool.scrolltop(0, this.saveY, 0);
	},
	deactivated() {
		// 记录离开该组件时的滚动高度
		this.saveY = this.$refs.Scrolltool.Scrolltool.y;
	},
	mounted() {
		//刷新滚动高度 防止图片未加载造成的滚动卡顿
		//防抖 防止重复调用refresh
		const refresh = this.debounce(this.$refs.Scrolltool.refresh, 50);
		// 通过事件总线获取到图片已经加载完这个状态imgisloded
		this.$bus.$on('imgisloded', () => {
			refresh();
		});
	},
	methods: {
		//子传父获取当前点击的类别-流行-新款。。。。。
		tabClick(index) {
			switch (index) {
				case 0:
					this.defaulttype = 'pop';
					break;
				case 1:
					this.defaulttype = 'new';
					break;
				case 2:
					this.defaulttype = 'sell';
					break;
			}
			this.$refs.TabControl2.currentIndex = index;
			this.$refs.TabControl1.currentIndex = index;
		},
		//回到顶部 调用该组件的回到指定位置方法
		Backtopbtn() {
			this.$refs.Scrolltool.scrolltop(0, 0, 500);
		}, //监听滚动距离
		GetScrolldistance(Scrolldistance) {
			this.isBacktopShow = -Scrolldistance.y > 900;
			this.isTabControlShow = -Scrolldistance.y >= this.TabControlOffsetTop;
		}, //上拉加载更多（下一页）
		GetScrollpullingUp() {
			console.log('上拉加载');
			this.gethomegoodsfun(this.defaulttype);
		},
		//防抖 防止重复调用refresh
		debounce(fun, delay) {
			let timer = null;
			return function() {
				if (timer) {
					clearTimeout(timer);
				}
				timer = setTimeout(() => {
					fun.apply(this);
				}, delay);
			};
		},
		//当轮播图加载完再获取TabControl距离上方的高度
		Swiperimglode() {
			this.TabControlOffsetTop = this.$refs.TabControl1.$el.offsetTop;
			console.log(this.TabControlOffsetTop);
		},
		/* 网络请求 */
		gethomedatafun() {
			gethomedata().then(res => {
				this.banner = res.data.banner.list;
				this.recommends = res.data.recommend.list;
			});
		},
		gethomegoodsfun(type) {
			const page = this.goods[type].page + 1;
			gethomegoods(type, page).then(res => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
				//每次下拉操作之后等待1秒后 回调这个函数才能进行下一次下拉操作
				setTimeout(() => {
					this.$refs.Scrolltool.finishPullUp();
				}, 500);
			});
		}
	}
};
</script>

<style scoped>
#home {
	padding-top: 44px;
	position: relative;
	height: 100vh;
}
.content {
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	overflow: hidden;
}
.home-navbar {
	background-color: #ff8198;
	color: white;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 999;
}
.tab-control {
	position: relative;
	z-index: 999;
}
</style>
