import Styles from './RecoverPasswordPage.module.scss'

import { LandingContainer } from '../../components/LandingContainer/LandingContainer'
import { EnvelopeClosedIcon, PersonIcon } from '@radix-ui/react-icons'

export const RecoverPasswordPage = () => {
    return (
        <LandingContainer title='recuperar senha'>
            <form action="" className={Styles.recover}>
                <div className={Styles["input-section"]}>
                    <PersonIcon className={Styles.prefix}/>

                    <input type="text" placeholder='Nome de usuário'/>
                </div>

                <div className={Styles["input-section"]}>
                    <EnvelopeClosedIcon className={Styles.prefix}/>

                    <input type="email" placeholder='Email'/>
                </div>

                <button>Recuperar</button>

                <a href='#' className={Styles.back}>Voltar</a>
            </form>
        </LandingContainer>
    )
}