import SimpleBar from 'simplebar-react'
import Styles from './Sidebar.module.scss'
import 'simplebar-react/dist/simplebar.min.css';
import { Contact } from '../Contact/Contact';
import { DotsHorizontalIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { searchUsers } from '../../services/Api/Requests';
import { UserSearchInterface } from '../../services/Api/Interfaces';

export const Sidebar = () => {
    const [username, setUsername] = useState("")
    const [tag, setTag] = useState("")
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState<UserSearchInterface[]>([])

    useEffect(() => {
       const { username, tag } = JSON.parse(sessionStorage.user)

       setUsername(username)
       setTag(tag)
    }, [])

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

                <span>{username} <small>#{tag}</small></span>

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
                        {users.map((user) => <Contact key={`${user.username}#${user.tag}`} username={user.username} tag={user.tag} />)}
                    </ul>
                </SimpleBar>
            </div>
        </div>
    )
}
