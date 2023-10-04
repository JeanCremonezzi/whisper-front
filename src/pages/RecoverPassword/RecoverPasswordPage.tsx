import Styles from './RecoverPasswordPage.module.scss'

import { LandingContainer } from '../../components/LandingContainer/LandingContainer'
import { EnvelopeClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

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

                <Link to={'/'} className={Styles.back}>Voltar</Link>
            </form>
        </LandingContainer>
    )
}