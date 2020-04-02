<template>
	<div id="app">
		<maintabbar class="maintabbar"></maintabbar>
		<router-view />
	</div>
</template>

<script>
import maintabbar from 'components/content/maintabbar/maintabbar.vue';
export default {
	name: 'App',
	components: {
		maintabbar,
	}
};
</script>

<style>
@import url('assets/css/base.css');
.maintabbar{
	z-index: 999;
	background-color: white;
}
</style>
