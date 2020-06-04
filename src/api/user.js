import axios from 'axios';
import { SERVER_URL} from "./request-config";
import { getHeaders} from "./request-config";

const instance = axios.create({
    baseURL: SERVER_URL,
    headers: getHeaders()
});

export default {

    getUserInfo: () => instance.get('users/me', {
        transformResponse: [function (data) {
            console.log("user loaded: ", data);
            return JSON.parse(data);
        }]
    })
}
