import { API } from '../config.js';

export const signUp = (user) => {
    // console.log(user);
    // console.log(API);
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.log(err)
        })
}
export const signIn = (user) => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const getUser = (id, token) =>{
    return fetch(`${API}/user/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            return res.json()
        })
        .catch(err => {
            console.log(err)
        })
}
export const authenticate = (data, next)=>{
    // console.log(data)
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

export const signOut = (next) =>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        next();
        return fetch(`${API}/signout`, {
            method:"GET"
        })
        .then(res =>{
            // console.log("Signout", res)
        })
        .catch(err => console.log(err))
    }
}

export const isAuthenticated = ()=>{
    if(typeof window == 'undefined'){
        return false
    } 
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    } else{
        return false;
    }
}