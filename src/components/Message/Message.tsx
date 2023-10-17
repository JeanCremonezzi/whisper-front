import Styles from './Message.module.scss'

export interface MessageProps {
    message: string,
    isMine: boolean
}

export const Message = ({ message, isMine }: MessageProps) => {
    return (
        <div className={`${Styles.message} ${isMine ? Styles.mine : ""}`}>
            <span>00:00</span>

            <p>{message}</p>
        </div>
    )
}
