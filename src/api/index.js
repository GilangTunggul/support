import axios from 'axios';
import { getCookie} from '@/helpers/cookie.js';

let token = getCookie("token") || "";

console.log(token)

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";

const REGISTER_URL = `register`;
const LOGIN_URL = `login`;
const TABLE_URL = `table`;

export async function register(request) {
	return await axios.post(REGISTER_URL, request); 
}
export async function login(request) {
	return await axios.post(LOGIN_URL, request); 
}
export async function table(request) {
	return await axios({
		url: TABLE_URL,
		data: request,
		method: `POST`,
		headers: {
			Authorization: `Bearer ${token}`
		}
	}); 
}