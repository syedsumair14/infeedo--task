import axios from 'axios'
const BASE_URL = "https://jsonplaceholder.typicode.com/"
const client = axios.create({baseURL: BASE_URL, json:true})

export default{
    execute(method,resource,data){
        return client({
            method,
            url: resource,
            data
        })
    },
    get(url){
        return this.execute('get', BASE_URL + url)
    },
    post(url, body){
        return this.exectu('post', BASE_URL + url, body)
    },
    put(url, body){
        return this.execute('put', BASE_URL + url, body)
    },
    delete(url){
        return this.execute('delete', BASE_URL + url)
    }
}
