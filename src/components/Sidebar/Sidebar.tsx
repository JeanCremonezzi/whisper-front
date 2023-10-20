import SimpleBar from 'simplebar-react'
import Styles from './Sidebar.module.scss'
import 'simplebar-react/dist/simplebar.min.css';
import { Contact } from '../Contact/Contact';
import { DotsHorizontalIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons';
import { useContext, useState } from 'react';
import { searchUsers } from '../../services/Api/Requests';
import { UserSearchInterface } from '../../services/Api/Interfaces';
import { AuthContext } from '../../contexts/AuthContext';

export const Sidebar = () => {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState<UserSearchInterface[]>([])

    const authContext = useContext(AuthContext)

    const handleSearch = () => {
        if (search === "") return

        searchUsers(search).then((res) => setUsers(res.data))
    }

    return (
        <div className={Styles["sidebar"]}>
            
            <div className={Styles["user-header"]}>
                <div className={Styles.avatar}>
                     <PersonIcon/>
                </div>

                <div className={Styles["user-info"]}>
                    <span>{authContext.username} <small>#{authContext.tag}</small></span>
                    <small>{authContext.email}</small>
                </div>

                <DotsHorizontalIcon className={Styles.options}/>
            </div>

            <div className={Styles["users"]}>
                <div className={Styles["search"]}>
                    <input type="search" placeholder='Procurar usuário' value={search} onChange={e => setSearch(e.target.value)}/>

                    <button onClick={handleSearch}>
                        <MagnifyingGlassIcon/>
                    </button>
                </div>

                <SimpleBar className={Styles["users-list"]}>
                    <ul>
                        {users.map((user) => <Contact key={`${user.username}#${user.tag}`} username={user.username} tag={user.tag} email={user.email} />)}
                    </ul>
                </SimpleBar>
            </div>
        </div>
    )
}
