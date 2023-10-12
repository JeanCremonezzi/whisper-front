import Styles from './SignupPage.module.scss'

import { LandingContainer } from '../../components/LandingContainer/LandingContainer'
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { register } from '../../services/Api/Requests'
import { useState } from 'react'
import { RegisterInterface } from '../../services/Api/Interfaces'

export const SignupPage = () => {
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username === "" && email === "" && password=== "") return

        const data: RegisterInterface = {
            username,
            email,
            password
        }

        register(data)
            .then(e => {
                alert(e.data)
            })
            .catch(e => {
                alert(e.response.data)
            })
    }

    return (
        <LandingContainer title='cadastro'>
            <form className={Styles.signup} onSubmit={handleRegister}>
                <div className={Styles["input-section"]}>
                    <PersonIcon className={Styles.prefix}/>

                    <input type="text" placeholder='Nome de usuário' value={username} onChange={e => setUsername(e.target.value)}/>
                </div>

                <div className={Styles["input-section"]}>
                    <EnvelopeClosedIcon className={Styles.prefix}/>

                    <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className={Styles["input-section"]}>
                    <LockClosedIcon className={Styles.prefix}/>

                    <input type="password" placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>

                <button type="submit">Cadastrar</button>
                
                <Link to={'/'} className={Styles.signin}>Já sou cadastrado</Link>
            </form>
        </LandingContainer>
    )
}
