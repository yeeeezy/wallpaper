<template>
	<view class="classLayout">
		<view class="classify">
			<theme-item v-for="item in 15"></theme-item>
		</view>
	</view>
</template>

<script setup>

</script>

<style>
.classify{
	padding: 30rpx;
	display: grid;
	grid-template-columns: repeat(3,1fr);
	
}
</style>
