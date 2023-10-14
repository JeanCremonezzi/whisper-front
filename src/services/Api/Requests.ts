import { Api as API } from "./Api.js"
import { LoginInterface, RegisterInterface } from "./Interfaces.js";

export const register = async (data: RegisterInterface) => {
    return await API.post("/user", data);
}

export const login = async (data: LoginInterface) => {
    return await API.post("/user/signin", data);
}

export const searchUsers = async (searchString: string) => {
    let params = searchString.includes("#") 
        ? {username: searchString.split("#")[0], tag: searchString.split("#")[1]} 
        : {username: searchString}

    return await API.get("/users/search", { 
        params
    });
}