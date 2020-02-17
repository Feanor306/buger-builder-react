import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-97e8a.firebaseio.com/'
});

export default instance;