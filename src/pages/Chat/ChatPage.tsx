import SimpleBar from 'simplebar-react'
import { ChatHeader } from '../../components/ChatHeader/ChatHeader'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import Styles from './ChatPage.module.scss'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Message } from '../../components/Message/Message'
import { ChatProvider } from '../../contexts/ChatContext'

export const ChatPage = () => {
    return (
        <ChatProvider>
            <div className={Styles["main-container"]}>
                <Sidebar/>

                <div className={Styles["chat-container"]}>
                    <ChatHeader/>

                    <div className={Styles["chat"]}>
                        <SimpleBar className={Styles["messages"]}>
                            <Message/>
                        </SimpleBar>

                        <div className={Styles["message-input"]}>
                            <textarea rows={5} placeholder='Escreva uma nova mensagem...'></textarea>

                            <button>
                                <PaperPlaneIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ChatProvider>
    )
}
