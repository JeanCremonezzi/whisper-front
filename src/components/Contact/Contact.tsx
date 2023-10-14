import { PersonIcon } from '@radix-ui/react-icons'
import Styles from './Contact.module.scss'

interface ContactProps {
    username: string,
    tag: string
}

export const Contact = (props: ContactProps) => {
    return (
        <li className={`${Styles.contact}`}>
            <div className={Styles.avatar}>
                <PersonIcon/>
            </div>

            <span>{props.username} <small>#{props.tag}</small></span>

            <div className={Styles.notification}>
                <span>9+</span>
            </div>
        </li>
    )
}
