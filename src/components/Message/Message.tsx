import { useContext } from 'react'
import Styles from './Message.module.scss'
import { AuthContext } from '../../contexts/AuthContext'

export interface MessageProps {
    message: string,
    from: any
}

export const Message = ({ message, from }: MessageProps) => {
    const authContext = useContext(AuthContext)
    
    return (
        <div className={`${Styles.message} ${from.email === authContext.email || from === "" ? Styles.mine : ""}`}>
            {/*<span>00:00</span>*/}

            <p>{message}</p>
        </div>
    )
}
