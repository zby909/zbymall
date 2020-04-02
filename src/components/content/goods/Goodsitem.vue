<template>
	<div class="goods-item">
		<img :src="goodsitem.show.img" alt="" />
		<div class="goods-info">
			<p>{{ goodsitem.title }}</p>
			<span class="price">{{ goodsitem.price }}</span>
			<span class="collect">{{ goodsitem.cfav }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'goodsitem',
	props: {
		goodsitem: {
			type: Object,
			default() {
				return {};
			}
		}
	}
};
</script>

<style scoped>
.goods-item {
	width: 48%;
	padding-bottom: 13px;
}
.goods-item > img {
	width: 100%;
	height: 85%;
	border-radius: 5px;
}
.goods-info {
	font-size: 13px;
	height: 15%;
	text-align: center;
	margin-top: 3px;
}
.goods-info p {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	margin-bottom: 5px;
}
.goods-info .price {
	color: var(--color-high-text);
	margin-right: 20px;
}
.goods-info .collect {
	position: relative;
}
.goods-info .collect::before {
	position: absolute;
	content: '';
	left: -15px;
	top: 0px;
	width: 14px;
	height: 14px;
	background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>
