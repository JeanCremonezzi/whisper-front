import SimpleBar from 'simplebar-react'
import Styles from './Sidebar.module.scss'
import 'simplebar-react/dist/simplebar.min.css';
import { Contact } from '../Contact/Contact';
import { DotsHorizontalIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons';

export const Sidebar = () => {
    return (
        <div className={Styles["sidebar"]}>
            
            <div className={Styles["user-header"]}>
                <div className={Styles.avatar}>
                     <PersonIcon/>
                </div>

                <span>User <small>#1234</small></span>

                <DotsHorizontalIcon className={Styles.options}/>
            </div>

            <div className={Styles["users"]}>
                <div className={Styles["search"]}>
                    <input type="search" placeholder='Procurar usuário'/>

                    <button>
                        <MagnifyingGlassIcon/>
                    </button>
                </div>

                <SimpleBar className={Styles["users-list"]}>
                    <ul>
                        <Contact/>
                        <Contact/>
                        <Contact/>
                        <Contact/>
                        <Contact/>
                        <Contact/>
                        <Contact/>
                        <Contact/>
                        <Contact/>
                        <Contact/>
                    </ul>
                </SimpleBar>
            </div>
        </div>
    )
}
