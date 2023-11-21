//inside api we have request.
// AIzaSyDVLgSbRGF5B5BEAA-rnr2FKKsblKHt7XI
import axios from "axios";
//  Axios is used to communicate with the backend and it also supports the Promise API that is native to JS ES6. It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application.

const API = axios.create({
  baseURL: "http://localhost:5000",
});



export const logIn = (authData) => API.post("user/login", authData);
export const signUp = (authData) => API.post("user/signup", authData);


