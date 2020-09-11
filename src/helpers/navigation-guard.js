import { getCookie,} from '@/helpers/cookie.js';

const NavigationGuard = function (Router) {

	Router.beforeEach((to, from, next)=> {
		let hasToken = getCookie("token");
		if (hasToken) {
			if (to.meta.public){
				next("/home")
			}else {
				next()
			}
		}
		else {
			if (to.meta.public){
				next()
			}else {
				next("/login")
			}
		}
	});
}
export default NavigationGuard;