import axios from 'axios';


const SERVER_URL = 'http://localhost:9000';

const instance = axios.create({
    baseURL: SERVER_URL
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
    })
}
