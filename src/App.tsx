import Styles from './App.module.scss'

import { LandingContainer } from './components/LandingContainer/LandingContainer';
import { PersonIcon, LockClosedIcon } from '@radix-ui/react-icons'

function App() {
  return (
    <LandingContainer title='login'>
      
      <form action="" className={Styles.login}>
        <div className={Styles["input-section"]}>
          <PersonIcon className={Styles.prefix}/>

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

export default App
