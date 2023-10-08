import { Sidebar } from '../../components/Sidebar/Sidebar'
import Styles from './ChatPage.module.scss'

export const ChatPage = () => {
    return (
        <div className={Styles["chat-container"]}>
            <Sidebar/>

            <div className={Styles["chat"]}>
                Chat
            </div>
        </div>
    )
}
