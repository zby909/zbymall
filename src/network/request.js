import axios from 'axios'
export function request(config){
	const instance=axios.create({
		baseURL:'http://123.207.32.32:8000/api/h3',
		timeout:5000
	})
	
	//请求拦截器
	instance.interceptors.request.use(config=>{
		return config
	},err=>{
		console.log(err);
	})
	
	//相应拦截器
	instance.interceptors.response.use(res=>{
		return res.data
	},err=>{
		console.log(err);
	})
	
	//发送网络请求
	return instance(config)
}