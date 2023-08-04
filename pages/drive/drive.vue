<template>
	<view>
		<web-view v-show="!APPcameraShow" @message="handlePostMessage" style="width: 750rpx; background-color: black;" ref="webview" :src="`../../static/ezuikit/video.html?token=${this.accessToken}&userId=${this.userId}&user=${this.user}`"></web-view>
		<!-- <web-view style="width: 750rpx;" ref="webview" src="../../static/ezuikit/test.html"></web-view> -->
		<video v-show="APPcameraShow" id="myVideo" src="rtsp://47.110.158.224:8142/live" enable-play-gesture="false" autoplay ></video>
	</view>
</template>

<script>
	var wv
	export default {
		data() { 
			return {
				accessToken: uni.getStorageSync('yinshiToken'),
				userId: uni.getStorageSync('userData').id,
				user: uni.getStorageSync('userData').mobile,
				shipList: [],
				videoContext: {},
				APPcameraShow: false
			}
		},
		methods: {
			handlePostMessage(data) {
				console.log('app相机11');
				this.APPcameraShow = !this.APPcameraShow
				this.videoContext = uni.createVideoContext('myVideo')
				// data.detail.data[0].action == '全屏'
				if (this.APPcameraShow) {
					console.log('app相机');
					this.videoContext.requestFullScreen();
					this.videoContext.play();
				} else {
					this.videoContext.exitFullScreen();
					this.videoContext.stop();
					console.log('关闭app相机');
				}
			},
		},
		onLoad() {
			let allWaterAreaList = uni.getStorageSync('userData').projects_info
			allWaterAreaList.map(i => {
				this.shipList = [].concat(...[...this.shipList, i.ship_info])
			})
			let obj = {};
			this.shipList = this.shipList.reduce((prev, item) => {
				obj[item.id] ? '' : obj[item.id] = true && prev.push(item);
				return prev;
			}, [])
			this.shipList = this.shipList.filter(i => i.name.indexOf('冲锋舟') == -1)
			this.shipList = this.shipList.filter(i => i.name.indexOf('CFZ') == -1)
			this.shipList.sort((a, b) => {
				return Number(a.number) - Number(b.number)
			});
			uni.setStorageSync('shipList', JSON.stringify(this.shipList))
			// #ifdef APP-PLUS
			var currentWebview = this.$scope.$getAppWebview()
			try {
				setTimeout(() => {
					var wv = currentWebview.children()[0]
					console.log(wv, 'this.$refs.webview')
					wv.evalJS(`postShipList('${JSON.stringify(this.shipList)}')`)
				}, 800)
			} catch (e) {
				console.log(e)
			}
			// #endif
		}
	}
</script>

<style>

</style>
