<template>
	<div class="goods">
		<Goodsitem v-for="(item,index) in goods" :goodsitem="item"></Goodsitem>
	</div>
</template>

<script>
	//商品内容页的每个商品
	import Goodsitem from 'components/content/goods/Goodsitem.vue';
	export default{
		name:'goodslist',
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Goodsitem
		}
	}
</script>

<style scoped>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
