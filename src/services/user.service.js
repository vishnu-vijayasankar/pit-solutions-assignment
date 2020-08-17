import axios from 'axios';
import { ApiUrl as apiUrl } from '../config';

export const userService = {
    registerUser
};


function registerUser(email, password, firstName, lastName) {

    const requestOptions = {
        method: 'get',
        url: `${apiUrl}`,
        headers:{
            "Content-Type": "application/json"
        },
        // data: {
        //     email : email,
        //     password : password,
        //     firstName: firstName,
        //     lastName: lastName
        // }
    };

    return axios(requestOptions)
        .then((response) => {
            return responseHandler(response);
        })
        .catch((err) => {
            return responseHandler(err.response);
        })
}

function responseHandler(response){
    if(response.status === 401){
        return { data: "Unauthorized Request" };
    }else{
        return response;
    }
}