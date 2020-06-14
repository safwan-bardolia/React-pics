import axios from 'axios';

// axios.create(): It create instance of axios client by configuring some basic property of request
export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: '    Client-ID 818u4uHdxjCSNP00ygkABbWl0l-td6aaM5i85I2teKQ'
    }
});