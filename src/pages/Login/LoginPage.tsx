import Styles from './LoginPage.module.scss'

import { LandingContainer } from '../../components/LandingContainer/LandingContainer'
import { LockClosedIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

export const LoginPage = () => {
    return (
        <LandingContainer title='login'>
            <form action="" className={Styles.login}>
                <div className={Styles["input-section"]}>
                    <EnvelopeClosedIcon className={Styles.prefix}/>

                    <input type="email" placeholder='Email'/>
                </div>

                <div className={Styles["input-section"]}>
                    <LockClosedIcon className={Styles.prefix}/>

                    <input type="password" placeholder='Password'/>
                </div>

                <a href='#' className={Styles.reset}>Recuperar senha</a>

                <button>Entrar</button>

                <a href='#' className={Styles.signup}>Cadastrar-se</a>
            </form>
        </LandingContainer>
    )
}