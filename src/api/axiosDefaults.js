import axios from 'axios';

axios.defaults.baseURL = 'https://rest-in-ease-api-003370b5e18f.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
