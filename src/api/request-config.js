
export const SERVER_URL = 'http://localhost:9000';
export let TOKEN = null;





export function getHeaders() {
    console.log("local storage: ", localStorage.getItem('user-token'));
    return {
        "Content-Type" : "application/json",
        "Authorization" : localStorage.getItem('user-token')
    }
}

export const AXIOS_CONFIG = {
    baseURL: 'http://localhost:9000',
    headers: {
        "Content-Type" : "application/json"
    }

}


