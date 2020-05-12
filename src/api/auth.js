import axios from 'axios';
import { SERVER_URL} from "./request-config";

const instance = axios.create({
    baseURL: SERVER_URL,
});



export default {
    // eslint-disable-next-line no-unused-vars
    signUp: (user) => instance.post('users/sign-up'),

    // eslint-disable-next-line no-unused-vars
    login: (user) =>
        instance.post('login', { username: user.username, password: user.password }).then(result => {
            console.log("the result: ", result);
            console.log("the headers:", result.headers.authorization);
            return result.headers.authorization;
        }),




}
