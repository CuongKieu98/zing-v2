import axios from "axios";

export function makeApiCall(options){
    return axios(options).then(response =>{
        var data = response.data;
        return data;
    })
    .catch(error =>{
        return error
    })
}

