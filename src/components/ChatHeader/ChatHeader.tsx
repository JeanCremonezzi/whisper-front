import { DotsVerticalIcon, PersonIcon } from '@radix-ui/react-icons'
import Styles from './ChatHeader.module.scss'
import { ChatContext } from '../../contexts/ChatContext'
import { useContext } from 'react'

export const ChatHeader = () => {
    const chatContext = useContext(ChatContext)

    return (
        <div className={Styles.header}>
            {chatContext.tag && chatContext.username ? (
                <>
                    <div className={Styles.avatar}>
                        <PersonIcon/>
                    </div>

                    <div className={Styles["chat-info"]}>
                        <span>{chatContext.username} <small>#{chatContext.tag}</small></span>
                        <small>{chatContext.email}</small>
                    </div>

                    <DotsVerticalIcon className={Styles.options}/>
                </>
            ): ""}
        </div>
    )
}
