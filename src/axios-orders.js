import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-project-cffe4.firebaseio.com/'
})

export default instance;