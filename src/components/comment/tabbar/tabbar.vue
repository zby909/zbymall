//这是tab栏的容器
<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'tabbar'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tabbar {
	display: flex;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.05);
}
</style>
