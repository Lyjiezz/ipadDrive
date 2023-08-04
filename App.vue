<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			plus.screen.lockOrientation('landscape-primary')
			plus.navigator.setFullscreen(true)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
/* 	uni-page-head {
		display: none;
	} */
</style>
