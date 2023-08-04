// 请求接口
var baseUrl = ''
if(process.env.NODE_ENV === 'development'){
    //开发环境
 // #ifdef H5
   baseUrl = ""
 // #endif
 // #ifdef APP-PLUS ||MP
	// baseUrl = "http://192.168.1.38:8080/"
	baseUrl = "http://47.114.52.47/"
// #endif
}else{
	// 生产环境
	// #ifdef H5
	   baseUrl = ""
	// #endif
	// #ifdef APP-PLUS ||MP
		baseUrl = "http://47.114.52.47/"
	// #endif
}
const request = (url = '', date = {}, type = 'POST', header = {'content-type':'application/x-www-form-urlencoded','charset':'utf-8'


}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: baseUrl + url,
			data: date,
			header: header,
			dataType: 'json', 
		}).then(response => {
			setTimeout(function() {
				uni.hideLoading();
			}, 200);
			let res = response;		
			resolve(res.data);
		}).catch(error => {
			let res = error;
			reject(err)
		})
	});
	}
export default request
