import { PropsWithChildren, createContext, useState } from "react";
import { MessageProps } from "../components/Message/Message";

type ChatContextType = {
    username: string,
    tag: string,
    email: string,
    messages: MessageProps[],
    rooms: any[],
    setChat: (_username: string, _tag: string, _email: string, messages: any[]) => void,
    addMessageFrom: (message: MessageProps) => void,
    addMessageTo: (to: any, message: any) => void,
    setRooms: (rooms: any[]) => void,
    addRoom: (room: any) => void
}

export const ChatContext = createContext<ChatContextType>({
    username: "",
    tag: "",
    email: "",
    messages: [],
    rooms: [],
    setChat: (_username: string, _tag: string, _email: string, _messages: any[]): void => {},
    addMessageFrom: (_message: MessageProps): void => {},
    addMessageTo: (to: any, message: any) => {},
    setRooms: (rooms: any[]): void => {},
    addRoom: (room: any) => {}
})

export const ChatProvider = ({ children }: PropsWithChildren) => {
    const [username, setUsername] = useState("")
    const [tag, setTag] = useState("")
    const [email, setEmail] = useState("")
    const [messages, setMessages] = useState<MessageProps[]>([])
    const [rooms, setRooms] = useState<any[]>([])

    const setChat = (username: string, tag: string, email: string, messages: any[]) => {
        setUsername(username)
        setTag(tag)
        setEmail(email)
        setMessages(messages)
    }

    const addMessageFrom = (message: MessageProps) => {
        const foundRoom = rooms.filter(room => room.user.email === message.from.email)[0]

        foundRoom.messages.push(message)

        setRooms(prevState => {
            return [foundRoom, ...prevState.filter(room => room != foundRoom)]
        })
    }

    const addMessageTo = (to: any, message: any) => {
        let foundRoom = rooms.filter(room => room.user.email === to.email)[0]

        foundRoom 
            ? foundRoom.messages.push({from: "", message})
            : foundRoom = {
                user: to,
                messages: [{
                    from: "",
                    message
                }]
            }

        setRooms(prevState => {
            return [foundRoom, ...prevState.filter(room => room != foundRoom)]
        })
        
        setMessages(foundRoom.messages)
    }

    const addRoom = (room: any) => {
        setRooms(prevState => {
            return [room, ...prevState]
        })
    }

    return (
        <ChatContext.Provider value={{
            username,
            tag,
            email,
            messages,
            rooms,
            setChat,
            addMessageFrom,
            addMessageTo,
            setRooms,
            addRoom
        }}>
            {children}
        </ChatContext.Provider>
    )
}