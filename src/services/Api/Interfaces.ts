export interface RegisterInterface {
    username: string,
    email: string,
    password: string
}

export interface LoginInterface {
    email: string,
    password: string
}

export interface UserSearchInterface {
    username: string,
    tag: string
}