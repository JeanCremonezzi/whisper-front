import { PropsWithChildren, createContext, useState } from "react";

export const ChatContext = createContext({
    username: "",
    tag: "",
    setChat: (_username: string, _tag: string): void => {}
})

export const ChatProvider = ({ children }: PropsWithChildren) => {
    const [username, setUsername] = useState("")
    const [tag, setTag] = useState("")

    const setChat = (username: string, tag: string) => {
        setUsername(username)
        setTag(tag)
    }

    return (
        <ChatContext.Provider value={{
            username,
            tag,
            setChat
        }}>
            {children}
        </ChatContext.Provider>
    )
}