import axios from 'axios';

import {getHeaders, SERVER_URL} from "./request-config";

const instance = axios.create({
    baseURL: SERVER_URL,
    headers: getHeaders()
});

export default {

    // Create
    create: (area) => instance.post('area/add', area),

    // Get
    getById: (id) => instance.get('area/' + id, {
        transformResponse: [function (data){
            console.log("Areas gotten:", data);
            return JSON.parse(data);
        }]
    }),

    // Update
    update: (area) => instance.put('area/update', area),

    // Delete
    deleteById: (id) => instance.delete('area/delete/' + id)
}
