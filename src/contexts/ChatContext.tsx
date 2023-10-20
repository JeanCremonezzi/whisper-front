import { PropsWithChildren, createContext, useState } from "react";
import { MessageProps } from "../components/Message/Message";

type ChatContextType = {
    username: string,
    tag: string,
    email: string,
    messages: MessageProps[],
    setChat: (_username: string, _tag: string, _email: string) => void,
    addMessage: (message: MessageProps) => void
}

export const ChatContext = createContext<ChatContextType>({
    username: "",
    tag: "",
    email: "",
    messages: [],
    setChat: (_username: string, _tag: string, _email: string): void => {},
    addMessage: (_message: MessageProps): void => {}
})

export const ChatProvider = ({ children }: PropsWithChildren) => {
    const [username, setUsername] = useState("")
    const [tag, setTag] = useState("")
    const [email, setEmail] = useState("")
    const [messages, setMessages] = useState<MessageProps[]>([])

    const setChat = (username: string, tag: string, email: string) => {
        setUsername(username)
        setTag(tag)
        setEmail(email)
        setMessages([])
    }

    const addMessage = (message: MessageProps) => {
        setMessages(prevState => {
            return [...prevState, message]
        })
    }

    return (
        <ChatContext.Provider value={{
            username,
            tag,
            email,
            messages,
            setChat,
            addMessage
        }}>
            {children}
        </ChatContext.Provider>
    )
}