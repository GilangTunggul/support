import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.credentials = false;

window.axios = axios;

export default async ({ Vue}) => {
	Vue.prototype.$axios = axios;
};