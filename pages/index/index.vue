<template>
	<view class="container">
		<view>
			<image style="width: 140rpx; height: 60rpx;" src="/static/logoWhite.png" mode=""></image>
		</view>
		<!-- <view class="logo">
			
		</view> -->
		<view class="main">
			<view class="main-box" style="width: 300rpx;">
				<h1 style="color: #fff; text-align: center;">翌明水域机器人驾驶系统</h1>
				<div style="color: #ccc; text-align: center; padding: 10rpx 0;">ipad v1.0.0</div>
				<uni-easyinput style="padding: 10rpx 0;" trim="all" v-model="formData.mobile" placeholder="请输入用户名" ></uni-easyinput>
				<uni-easyinput style="padding: 10rpx 0;" type="password" trim="all" v-model="formData.pd" placeholder="请输入密码" ></uni-easyinput>
				<button style="margin-top: 10rpx;" class="mini-btn" @click="login" type="primary" size="default">登 录</button>
				<view class="main-btn—box">
					<checkbox style="transform:scale(0.8)" :checked="checked" />
					<text style="text-align: left;">记住用户名</text>
				</view>
			</view>
		</view>
		<view class="footer">
			版权所有 © 浙江翌明控股集团有限公司
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					mobile: '',
					pd: '',
				},
				checked: false
			}
		},
		methods: {
			login() {
				// 简单进行校验
				if (this.formData.mobile == '' || this.formData.mobile == undefined || this.formData.mobile == null) {
					uni.showToast({
						title: `请输入用户名`,
						duration: 1500,
						icon: "none"
					});
					return
				}
				if (!this.isMobile(this.formData.mobile)) {
					uni.showToast({
						title: `请输入正确的手机号`,
						duration: 1500,
						icon: "none"
					});
					return
				}
				if (this.formData.pd == '' || this.formData.pd == undefined || this.formData.pd == null) {
					uni.showToast({
						title: `请输入密码`,
						duration: 1500,
						icon: "none"
					});
					return
				}
				// 请求接口
				uni.showLoading()
				this.$request('/v1/wisdom/app/login/',this.formData).then(res => {
					if (res.retCode == '0') {
						console.log(res)
						uni.setStorageSync('userData', res.data)
						uni.setStorageSync('isLogin', true)
						// uni.switchTab({
						// 	url:'/pages/tabBar/index/index'
						// })
						uni.redirectTo({
							url:"/pages/drive/drive"
						})
					} else {
						uni.showToast({
							title: `${res.retMsg}`,
							duration: 2000,
							icon: 'error'
						});
					}
				}).catch(err => {
					console.log(err)
					uni.showToast({
						title: `登录失败`,
						duration: 2000,
						icon: 'error'
					});
				})
			},
			isMobile(tel) {
				// 手机号正则校验
				let reg = /^1((3[0-9])|(4[1579])|(5[0-9])|(6[6])|(7[0-9])|(8[0-9])|(9[0-9]))\d{8}$/
				return reg.test(tel)
			},
			// 用户注册
			toRegister() {
				uni.navigateTo({
					url: '../register/register'
				})
			},
			// 忘记密码
			toPassword() {
				uni.navigateTo({
					url: '../my/password/password'
				})
			},
			loadToken() {
				uni.request({
					method: 'POST',
					url: 'https://open.ys7.com/api/lapp/token/get',
					data: {
						'appKey': 'a2744a2410b146d0be08aa87e246d73b',
						"appSecret": '6367b2402f3ca972509c3c097cb89ee8'
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					dataType: 'json',
				}).then(res => {
					if (res.data.code == '200') {
						uni.setStorageSync('yinshiToken', res.data.data.accessToken)
						uni.setStorageSync('expireTime', res.data.data.expireTime)
					}
				}).catch(err => {
					console.log(err)
				})
			}
		},
		onLoad() {
			let token = uni.getStorageSync('yinshiToken')
			let time = uni.getStorageSync('expireTime')
			let nowTime = new Date().getTime()
			if (nowTime > time) { // 已过期
				this.loadToken()
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100vh;
		box-sizing: border-box;
	}
	.container {
		padding: 30rpx;
		padding-bottom: unset;
		height: 100vh;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		background-image: url("../../static/background.png");
		background-repeat: round;
	}
	.logo {
		height: 30vh;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		// image {
		// 	width: 500rpx;
		// 	height: 205rpx;
		// }
	}
	.main {
		height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.main-box {
		padding: 25rpx 15rpx;
		border: 1px solid #0A66C2;
		border-radius: 6px;
	}
	.main-btn—box {
		display: flex;
		color: #666666;
		margin-top: 20rpx;
		text {
			flex: 1;
		}
	}
	.main /deep/ .uni-easyinput__content {
		min-height: 30rpx !important;
	}
	.footer {
		height: 10vh;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		color: #999999;
		// justify-content: center;
	}
</style>
