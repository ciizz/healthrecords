import axios from 'axios';

const HEALTHRECORDS_dev_API_REST_URL = "http://localhost:8080";

class APIService {
    
    async getClientInfo(clientId) {
        let res = await axios.get(HEALTHRECORDS_dev_API_REST_URL + '/client?id=' + clientId);
        return res.data;
    }

    async createNewClient(
        firsName, 
        lastName,
        dob,
        doctorFirstName,
        doctorLastName,
        doctorPhoneNumber,
        allergies,
        diabetes,
        highBloodPressure) {
            let res = await axios.post(
                HEALTHRECORDS_dev_API_REST_URL + 
                '/newclient?' + 
                'firstName=' + firsName +
                '&lastName=' + lastName +
                '&dob=' + dob +
                '&doctorFirstName=' + doctorFirstName +
                '&doctorLastName=' + doctorLastName +
                '&doctorPhoneNumber=' + doctorPhoneNumber +
                '&allergies=' + allergies +
                '&diabetes=' + diabetes +
                '&highBloodPressure=' + highBloodPressure);
            return res.data;
    }
    
}

export default new APIService();