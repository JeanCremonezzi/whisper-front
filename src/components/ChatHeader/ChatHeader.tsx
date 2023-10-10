import { DotsVerticalIcon, PersonIcon } from '@radix-ui/react-icons'
import Styles from './ChatHeader.module.scss'

export const ChatHeader = () => {
    return (
        <div className={Styles.header}>
            <div className={Styles.avatar}>
                <PersonIcon/>
            </div>

            <span>User <small>#1234</small></span>

            <DotsVerticalIcon className={Styles.options}/>
        </div>
    )
}
