import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID QY0OrCziZwrfd7vcDAZVq9FHmfgVs8ltj_pPRFc_c7g'
    }

});
