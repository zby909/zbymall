<template>
	<div id="app">
		<maintabbar class="maintabbar"></maintabbar>
		<keep-alive exclude="Details"><router-view /></keep-alive>
	</div>
</template>

<script>
import maintabbar from 'components/content/maintabbar/maintabbar.vue';
export default {
	name: 'App',
	components: {
		maintabbar
	}
};
</script>

<style>
@import url('assets/css/base.css');
.maintabbar {
	z-index: 999;
	background-color: white;
}
</style>
