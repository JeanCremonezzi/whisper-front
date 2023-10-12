import { Api as API } from "./Api.js"
import { RegisterInterface } from "./Interfaces.js";

export const register = async (data: RegisterInterface) => {
    return await API.post("/user", data);
}