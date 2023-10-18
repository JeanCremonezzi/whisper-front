import SimpleBar from 'simplebar-react'
import { ChatHeader } from '../../components/ChatHeader/ChatHeader'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import Styles from './ChatPage.module.scss'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Message } from '../../components/Message/Message'
import { useContext, useEffect, useState } from 'react'
import { Socket } from '../../socket';
import { ChatContext } from '../../contexts/ChatContext'

export const ChatPage = () => {
    const [newMessage, setNewMessage] = useState("")

    const chatContext = useContext(ChatContext)

    useEffect(() => {        
        Socket.auth = { user: sessionStorage.getItem("user") }
        Socket.connect()

        Socket.on("message", ({message, from}) => {
            chatContext.addMessage({
                message, 
                from
            })
        })

        Socket.on("connect_error", (err) => {
            alert(err.message)
        })

        return () => { Socket.off("message") };
    }, [Socket])

    const handleMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (newMessage.trim() === "") {
            setNewMessage("")
            return
        }

        Socket.emit("message", {
            message: newMessage,
            to: chatContext.email
        })

        chatContext.addMessage({
            message: newMessage, 
            from: ""
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
                        {chatContext.messages.map((message, index) => <Message key={index} message={message.message} from={message.from}/>)}
                    </SimpleBar>

                    <div className={Styles["message-input"]}>
                        <textarea disabled={ chatContext.email ? false : true } rows={5} placeholder='Escreva uma nova mensagem...' value={newMessage} onChange={e => setNewMessage(e.target.value)}></textarea>

                        <button onClick={handleMessage} disabled={ chatContext.email ? false : true }>
                            <PaperPlaneIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
