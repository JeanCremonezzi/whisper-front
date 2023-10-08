import { PersonIcon } from '@radix-ui/react-icons'
import Styles from './Contact.module.scss'

export const Contact = () => {
    return (
        <li className={`${Styles.contact}`}>
            <div className={Styles.avatar}>
                <PersonIcon/>
            </div>

            <span>User <small>#1234</small></span>

            <div className={Styles.notification}>
                <span>9+</span>
            </div>
        </li>
    )
}
