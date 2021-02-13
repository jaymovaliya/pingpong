import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
});

export default class HTTPService {
    static post(url, body) {
        return new Promise((resolve, reject) => {
            axiosInstance
                .post(url, body)
                .then(response => {
                    resolve(response.message);
                })
                .catch(error => {
                  console.log(error);
                  reject(error);
                });
        });
    }
}
