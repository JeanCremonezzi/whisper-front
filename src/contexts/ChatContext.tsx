import { PropsWithChildren, createContext, useState } from "react";

export const ChatContext = createContext({
    username: "",
    tag: "",
    email: "",
    setChat: (_username: string, _tag: string, _email: string): void => {}
})

export const ChatProvider = ({ children }: PropsWithChildren) => {
    const [username, setUsername] = useState("")
    const [tag, setTag] = useState("")
    const [email, setEmail] = useState("")

    const setChat = (username: string, tag: string, email: string) => {
        setUsername(username)
        setTag(tag)
        setEmail(email)
    }

    return (
        <ChatContext.Provider value={{
            username,
            tag,
            email,
            setChat
        }}>
            {children}
        </ChatContext.Provider>
    )
}