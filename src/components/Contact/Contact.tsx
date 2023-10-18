import { PersonIcon } from '@radix-ui/react-icons'
import Styles from './Contact.module.scss'
import { ChatContext } from '../../contexts/ChatContext'
import { useContext } from 'react'

interface ContactProps {
    username: string,
    tag: string,
    email: string
}

export const Contact = ({username, tag, email}: ContactProps) => {
    const chatContext = useContext(ChatContext)

    const handleClick = () => chatContext.setChat(username, tag, email)

    const isActive = () => chatContext.username == username && chatContext.tag == tag

    return (
        <li className={`${Styles.contact} ${isActive() ? Styles.active : ""}`} onClick={handleClick}>
            <div className={Styles.avatar}>
                <PersonIcon/>
            </div>

            <div className={Styles["contact-info"]}>
                <span>{username} <small>#{tag}</small></span>
                <small>{email}</small>
            </div>

            <div className={Styles.notification}>
                <span>9+</span>
            </div>
        </li>
    )
}
