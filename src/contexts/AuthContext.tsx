import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from '../socket';
import Cookies from "js-cookie"

type AuthContextType = {
    username: string,
    tag: string,
    email: string,

    setUser: (username: string, tag: string, email: string) => void,
    removeUser: () => void,
}

export const AuthContext = createContext<AuthContextType>({
    username: "",
    tag: "",
    email: "",

    setUser: (_username: string, _tag: string, _email: string) => null,
    removeUser: () => null
})

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [username, setUsername] = useState("")
    const [tag, setTag] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate();

    useEffect(() =>{                      
        if (!localStorage.getItem("user")) {
            navigate("/")
        } else {
            const user = JSON.parse(localStorage.getItem("user")!)

            Socket.auth = { user }
            Socket.connect()

            setUsername(user.username)
            setTag(user.tag)
            setEmail(user.email)

            navigate("/chat")
        }
    }, [])

    const setUser = (username: string, tag: string, email: string) => {
        setUsername(username)
        setTag(tag)
        setEmail(email)

        localStorage.setItem("user", JSON.stringify({
            username,
            email,
            tag
        }))
    }

    const removeUser = () => {        
        setUsername("")
        setTag("")
        setEmail("")

        localStorage.removeItem("user")
        Cookies.remove('user_token', { path: '' })

        navigate("/")
    }

    return (
        <AuthContext.Provider value={{
            username,
            tag,
            email,
            setUser,
            removeUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}