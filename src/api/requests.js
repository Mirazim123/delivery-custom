import Axios from "axios";

export let url = '192.168.20.66:8080';

let axios = Axios.create({ baseURL : url, timeout: 3000});

expect let reqrests ={

auth :{
    sigIn: () =>  axios.push('/signin', credentiale),
    signUp : ()=> {} ,
},};