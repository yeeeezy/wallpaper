<template>
	<view class="homeLayout  pageBg">
		<custom-nav-bar></custom-nav-bar>
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" circular indicator-active-color="white" autoplay="true">
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			
			<view class="center">
				<swiper vertical="true" autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in noticeList" :key="item._id" >
						<navigator url="/pages/notice/detail">
							{{item.title}}
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			
			<view class="right">
				<uni-icons type="right" size="16"></uni-icons>
				
				
			</view>
		</view>
		<view class="select">
			<common-title>
				<template #name>
					每日推荐
				</template>
				
				<template #custom>
					<view class="date">
						
						 <uni-icons type="calendar" size="18"></uni-icons>
						 <uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x="true" >
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview">
						
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme">
			<common-title>
				<template #name>
					专题精选
				</template>
				<template #custom>
					<navigator class="more">More+</navigator>
				</template>
			</common-title>
			
			<view class="content">
				<theme-item v-for="item in classifyList" :key="item._id" :item="item">
					
				</theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
		
		
	</view>
	
</template>

<script setup>
import { ref } from 'vue'
import {apiGetBanner} from "@/api/apis.js";
import {apiGetDayRandom} from "@/api/apis.js";
import {apiGetNotice, apiGetClassify} from "@/api/apis.js";
	const bannerList = ref([]);
	const randomList = ref([]);
	const noticeList = ref([]);
	const classifyList = ref([]);
	const goPreview = () => {
		uni.navigateTo({
			url:"/pages/preview/preview"
		})
	}
	
	const getBanner = async () => {
		let res = await apiGetBanner();
		
		if(res.errCode===0)
		{
			bannerList.value = res.data;
			
		}
	}
	
	const getDayRandom = async () => {
		let res = await apiGetDayRandom();
		
		if(res.errCode===0)
		{
			randomList.value = res.data;
		}
	}
	const getNotice = async () => {
		let res = await apiGetNotice();
		if(res.errCode===0)
		{
			
			noticeList.value = res.data;
		}
	}
	
	const getClassify = async () => {
		let res = await apiGetClassify(
		{
			select:true,
		});
		
		if(res.errCode===0)
		{
			
			classifyList.value = res.data;
			
		}
	}
	
	getBanner();
	getDayRandom();
	getNotice();
	getClassify();
</script>

<style lang="scss" scoped>
.homeLayout{
	.banner{
		width: 750rpx;
		padding: 30rpx 0;
		swiper{
			width: 750rpx;
			height: 340rpx;
			&-item{
				width: 100%;
				height: 100%;
				padding: 0 30rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
	.notice{
		width: 690rpx;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #f9f9f9;
		margin: 0 auto;
		border-radius: 80rpx;
		display: flex;
		:deep(){
			.uni-icons{
				color: $brand-theme-color !important;
				
			}
			
		}
		.left{
			width: 140rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.text{
				color:$brand-theme-color;
				font-weight: 600;
				font-size: 28rpx;
				}
		}
		.center{
			
			flex: 1;
			
			swiper{
				height: 100%;
				&-item{
					height: 100%;
					font-size: 30rpx;
					color: #666;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
			
		}
		.right{
			width: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			
		}
	}
	.select{
		padding-top: 50rpx;
		.date{
			color: $brand-theme-color;
			display: flex;
			align-items: center;
			:deep(){
				.uni-icons{
					color: $brand-theme-color !important;
					
				}
				
			}
			.text{
				margin-left: 5rpx;
			}
		}
		.content{
			width: 720rpx;
			margin-top: 30rpx;
			margin-left: 30rpx;
			padding-bottom: 50rpx;
			scroll-view{
				white-space: nowrap;
				.box{
					width: 200rpx;
					height: 430rpx;
					display: inline-block;
					margin-right: 15rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
				.box:last-child{
					margin-right: 30rpx;
				}
			}
		}
	}
	
	.theme{
		
		.more{
			font-size: 32rpx;
			color: #888;
		}
		
		.content{
			margin: 30rpx;
			padding-bottom: 30rpx; 
			display: grid;
			gap: 15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
	
}
</style>
