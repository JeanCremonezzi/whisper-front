import { Api as API } from "./Api.js"
import { LoginInterface, RegisterInterface } from "./Interfaces.js";

export const register = async (data: RegisterInterface) => {
    return await API.post("/user", data);
}

export const login = async (data: LoginInterface) => {
    return await API.post("/user/signin", data);
}