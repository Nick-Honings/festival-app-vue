import axios from 'axios';
import { SERVER_URL} from "./request-config";
import { getHeaders } from './request-config';


const instance = axios.create({
    baseURL: SERVER_URL,
    headers: getHeaders()
});

export default {

    // Create
    createNew: (item) => instance.post('festival/add', item),

    // Read
    getAll: () => instance.get('festival/all', {
        transformResponse: [function (data) {
            console.log("the data:", data);
            return JSON.parse(data);
        }]
    }),

    getAllByUserId: (id) => instance.get('festival/all/' + id, {
        transformResponse: [function (data) {
            console.log("the data: ", data);
            return JSON.parse(data);
        }]
    }),


    // Update
    update: (festival) => instance.put('festival/update', festival),

    // Delete
    removeForId: (id) => instance.delete('festival/' + id),

    // Get by Id
    getById: (id) => instance.get('festival/' + id, {
        transformResponse : [function (data) {
            console.log(data);
            return JSON.parse(data)
        }]
    }),

    setAttendance: (id, attendance) => instance.post('festival/'+id + "/attendance", {attendance: attendance}),
}
