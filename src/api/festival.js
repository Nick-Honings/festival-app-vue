import axios from 'axios';

const SERVER_URL = 'http://localhost:9000';

const instance = axios.create({
    baseURL: SERVER_URL
});

export default {

    // Create
    createNew: (item) => instance.post('festival/add', { name: item.name, price: item.price, date: item.date}),

    // Read
    getAll: () => instance.get('festival/all', {
        transformResponse: [function (data) {
            console.log("the data:", data);
            return JSON.parse(data);
        }]
    }),


    // Update
    updateForId: (id, name, price) => instance.put('festivals/' + id, {name: name, price: price}),

    // Delete
    removeForId: (id) => instance.delete('festivals/' + id)
}
