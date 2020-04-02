//这是tab栏的item
<template>
	<div @click="itemclick" class="tabbar-item">
		<slot v-if="!isActive" name="itemimg"></slot>
		<slot v-else name="itemactive"></slot>
		<div :style="activecstyle"><slot name="itemtext"></slot></div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		path: String,
		activecolor:{
			type:String,
			default:'black'
		}
	},
	methods: {
		itemclick() {
			this.$router.push(this.path);
		}
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path) !== -1;
		},
		activecstyle(){
			return this.isActive?{color:this.activecolor}:{}
		}
	}
};
</script>

<style scoped>
.tabbar-item {
	flex: 1;
	text-align: center;
	height: 49px;
	font-size: 14px;
}
.tabbar-item img {
	width: 24px;
	height: 24px;
	margin: 2px 0 2px 0;
	vertical-align: middle;
}
</style>
