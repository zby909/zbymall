import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'views/home/home.vue'
const category = () => import('views/category/category.vue')
const cart = () => import('views/cart/cart.vue')
const profile = () => import('views/profile/profile.vue')
Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: home
	},
	{
		path: '/category',
		name: 'category',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: category
	},
	{
		path: '/cart',
		name: 'cart',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: cart
	},
	{
		path: '/profile',
		name: 'profile',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: profile
	}
]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error)
}
export default router
