//service modules export business/app logic such as managing tokens
// services modules often depende upon API modules
//for making AJAX requests to the server

import * as usersAPI from './users-api'



export function logOut() {
    localStorage.removeItem('token');
}

export function getToken() {
    //getItem returns null if there is no string
    const token = localStorage.getItem('token');
    if(!token) return null;
    //obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // a JWT exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
        //token has expired - remove it from localStorage
    localStorage.removeItem('token');
    return null;
    }
    return token;
}

export function getUser() {
    const token = getToken();
    //if there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export async function signUp(userData) {
    //delegate the network request code to the use
    //which will ultimately return a JSON web token
    const token = await usersAPI.signUp(userData);
    //baby step by returning whetever is sent back
    localStorage.setItem('token',token);
    return getUser(); 
} 

export async function login(credentials) {
    // Delegate the AJAX request to the users-api.js
    // module.
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
  }

export function checkToken(){
    //just so that I don't forget how to use .then with promises
    return usersAPI.checkToken()
    //checktoken returns a string, but let's
    //make it a date object for more flexibility
    .then(dateStr => new Date(dateStr));
}