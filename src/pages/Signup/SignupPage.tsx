import Styles from './SignupPage.module.scss'

import { LandingContainer } from '../../components/LandingContainer/LandingContainer'
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'

export const SignupPage = () => {
    return (
        <LandingContainer title='cadastro'>
            <form action="" className={Styles.signup}>
                <div className={Styles["input-section"]}>
                    <PersonIcon className={Styles.prefix}/>

                    <input type="text" placeholder='Nome de usuário'/>
                </div>

                <div className={Styles["input-section"]}>
                    <EnvelopeClosedIcon className={Styles.prefix}/>

                    <input type="email" placeholder='Email'/>
                </div>

                <div className={Styles["input-section"]}>
                    <LockClosedIcon className={Styles.prefix}/>

                    <input type="password" placeholder='Senha'/>
                </div>

                <button>Cadastrar</button>

                <a href='#' className={Styles.signin}>Já sou cadastrado</a>
            </form>
        </LandingContainer>
    )
}
