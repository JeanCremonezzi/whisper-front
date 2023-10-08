import Styles from './LoginPage.module.scss'

import { LandingContainer } from '../../components/LandingContainer/LandingContainer'
import { LockClosedIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => navigate("/chat")

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

                <Link to={'/recover'} className={Styles.reset}>Recuperar senha</Link>

                <button onClick={handleLogin}>Entrar</button>

                <Link to={'/signup'} className={Styles.signup}>Cadastrar-se</Link>
            </form>
        </LandingContainer>
    )
}