import axios from 'axios';

const RequestClient = axios.create({
    baseURL: 'https://project-21-01-default-rtdb.asia-southeast1.firebasedatabase.app/',
    headers: {'Content-Type': 'application/json'}
});

export default RequestClient;