import axios from 'axios';

const HEALTHRECORDS_dev_API_REST_URL = "http://localhost:8080";

class APIService {
    
    async getClientInfo(clientId) {
        let res = await axios.get(HEALTHRECORDS_dev_API_REST_URL + '/client?id=' + clientId);
        return res.data;
    }
    
}

export default new APIService();