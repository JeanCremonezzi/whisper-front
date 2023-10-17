import SimpleBar from 'simplebar-react'
import { ChatHeader } from '../../components/ChatHeader/ChatHeader'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import Styles from './ChatPage.module.scss'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Message, MessageProps } from '../../components/Message/Message'
import { useEffect, useState } from 'react'
import { Socket } from '../../socket';

export const ChatPage = () => {
    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState<MessageProps[]>([])

    useEffect(() => {
        Socket.connect()

        Socket.on("message", (message) => {                                                            
            setMessages((prevState) => {
                return [...prevState, {
                    message,
                    isMine: false
                }]
            })
        })

        return () => { Socket.off("message") };
    }, [Socket, messages])

    const handleMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (newMessage.trim() === "") {
            setNewMessage("")
            return
        }

        Socket.emit("message", newMessage)

        setMessages((prevState) => {
            return [...prevState, {
                message: newMessage, 
                isMine: true
            }]
        })

        setNewMessage("")
    }

    return (
        <div className={Styles["main-container"]}>
            <Sidebar/>

            <div className={Styles["chat-container"]}>
                <ChatHeader/>

                <div className={Styles["chat"]}>
                    <SimpleBar className={Styles["messages"]}>
                        {messages.map((message, index) => <Message key={index} message={message.message} isMine={message.isMine}/>)}
                    </SimpleBar>

                    <div className={Styles["message-input"]}>
                        <textarea rows={5} placeholder='Escreva uma nova mensagem...' value={newMessage} onChange={e => setNewMessage(e.target.value)}></textarea>

                        <button onClick={handleMessage}>
                            <PaperPlaneIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
