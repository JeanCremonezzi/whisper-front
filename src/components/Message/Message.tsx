import Styles from './Message.module.scss'

export interface MessageProps {
    message: string,
    from: string
}

export const Message = ({ message, from }: MessageProps) => {
    return (
        <div className={`${Styles.message} ${from ? "" : Styles.mine}`}>
            <span>00:00</span>

            <p>{message}</p>
        </div>
    )
}
