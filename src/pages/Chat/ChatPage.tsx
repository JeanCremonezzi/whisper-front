import SimpleBar from 'simplebar-react'
import { ChatHeader } from '../../components/ChatHeader/ChatHeader'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import Styles from './ChatPage.module.scss'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Message } from '../../components/Message/Message'
import { useContext, useEffect, useState } from 'react'
import { Socket } from '../../socket';
import { ChatContext } from '../../contexts/ChatContext'
import { getChats } from '../../services/Api/Requests'

export const ChatPage = () => {
    const [newMessage, setNewMessage] = useState("")

    const chatContext = useContext(ChatContext)

    useEffect(() => {        
        Socket.on("message", ({message, from}) => {

            const foundRoom = chatContext.rooms.filter(room => room.user.email === from.email)[0] || null

            foundRoom 
                ? chatContext.addMessageFrom({
                    message,
                    from
                })
                : chatContext.addRoom({
                    user: from,
                    messages: [{
                        from,
                        message: message
                    }]
                })
        })

        Socket.on("connect_error", (err) => {
            console.error(err.message);
            
            alert("Ocorreu um erro!")
        })

        return () => { Socket.off("message") };
    }, [Socket, chatContext])

    useEffect(() => {
        getChats().then(res => {
            chatContext.setRooms(res.data)
        })
    }, [])

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

        const to = {
            email: chatContext.email,
            username: chatContext.username,
            tag: chatContext.tag
        }

        chatContext.addMessageTo(to, newMessage);

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
