import Styles from './Message.module.scss'

export const Message = () => {
    return (
        <div className={Styles.message}>
            <span>00:00</span>

            <p>Hello World!</p>
        </div>
    )
}
