<template>
	<view class="userLayout  pageBg">
		<view class="userInfo">
			<view class="avatar">
				<image src="/static/images/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">100.100.1000.100</view>
			<view class="address">来自于：浙江</view>
			
		</view>
		
		
		<view class="section">
			<view class="list">
				<UserRow>
					<template #icon>
						<uni-icons type="download" size="20"></uni-icons>
					</template>
					<template #text>
						我的下载
					</template>
					
				</UserRow>
				
				<UserRow>
					<template #icon>
						<uni-icons type="star" size="20"></uni-icons>
					</template>
					<template #text>
						我的评分
					</template>
					
				</UserRow>
				<UserRow>
					<template #icon>
						<uni-icons type="chat" size="20"></uni-icons>
					</template>
					<template #text>
						联系客服
						<!-- #ifdef MP -->
						<button open-type="contact" class="contact">联系客服</button>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<button class="contact" @click="clickContact">拨打电话</button>
						<!-- #endif -->
					</template>
					
				</UserRow>
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				<UserRow>
					<template #icon>
						<uni-icons type="notification" size="20"></uni-icons>
					</template>
					<template #text>
						订阅更新
					</template>
					
				</UserRow>
				<UserRow>
					<template #icon>
						<uni-icons type="search" size="20"></uni-icons>
					</template>
					<template #text>
						常见问题
					</template>
					
				</UserRow>
			</view>
		</view>
	</view>
</template>

<script setup>
const clickContact = ()=>{
	uni.makePhoneCall({
		phoneNumber:"114"
	})
}
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 50rpx 0;
		.avatar{
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.ip{
			font-size: 44rpx;
			color: #333;
			padding: 20rpx 0 5rpx;
		}
		.address{
			font-size: 28rpx;
			color: #aaa;
			
		}
		
	}
	.section{
		width: 690rpx;
		margin: 50rpx auto;
		border: 1rpx solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0,0,0,0.05);
		.list{
			.contact{
				position: absolute;
				top: 0;
				left: 0;
				height: 100rpx;
				width: 100%;
				opacity: 0;
			}
			:deep(){
				.uni-icons{
					color: $brand-theme-color !important;
					
				}
				
			}
		}
		
	}
}
</style>
