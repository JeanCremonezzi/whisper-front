import Styles from './LoginPage.module.scss'

import { LandingContainer } from '../../components/LandingContainer/LandingContainer'
import { LockClosedIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { login } from '../../services/Api/Requests'
import { AuthContext } from '../../contexts/AuthContext'
import { Socket } from '../../socket'

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const authContext = useContext(AuthContext)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {        
        e.preventDefault();

        if (email === "" && password === "") return

        login({ email, password }).then(res => {
            const {username, tag, email} = res.data
            authContext.setUser(username, tag, email)

            Socket.auth = { user: res.data }
            Socket.connect()
                
            navigate("/chat")
        })
    }

    return (
        <LandingContainer title='login'>
            <form className={Styles.login} onSubmit={handleLogin}>
                <div className={Styles["input-section"]}>
                    <EnvelopeClosedIcon className={Styles.prefix}/>

                    <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className={Styles["input-section"]}>
                    <LockClosedIcon className={Styles.prefix}/>

                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>

                <Link to={'/recover'} className={Styles.reset}>Recuperar senha</Link>

                <button type="submit">Entrar</button>

                <Link to={'/signup'} className={Styles.signup}>Cadastrar-se</Link>
            </form>
        </LandingContainer>
    )
}