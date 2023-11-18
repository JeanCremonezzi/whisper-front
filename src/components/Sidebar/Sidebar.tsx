import SimpleBar from 'simplebar-react'
import Styles from './Sidebar.module.scss'
import 'simplebar-react/dist/simplebar.min.css';
import { Contact } from '../Contact/Contact';
import { DotsHorizontalIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons';
import { useContext, useState } from 'react';
import { searchUsers } from '../../services/Api/Requests';
import { UserSearchInterface } from '../../services/Api/Interfaces';
import { AuthContext } from '../../contexts/AuthContext';
import { ChatContext } from '../../contexts/ChatContext';

export const Sidebar = () => {
    const [users, setUsers] = useState<UserSearchInterface[]>([])
    const [search, setSearch] = useState<string>("")

    const authContext = useContext(AuthContext)
    const chatContext = useContext(ChatContext)

    const handleSearch = () => {
        if (search.trim() === "") return

        searchUsers(search).then((res) => setUsers(res.data))
    }

    const handleInput = (value: string) => {
        if (value.trim() === "") setUsers([])

        setSearch(value)
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
                    <input type="search" placeholder='Procurar usuário' value={search} onChange={e => handleInput(e.target.value)}/>

                    <button onClick={handleSearch}>
                        <MagnifyingGlassIcon/>
                    </button>
                </div>

                <SimpleBar className={Styles["users-list"]}>
                    <ul>
                        { search.trim() === "" || users.length === 0
                            ? chatContext.rooms.map((room) => <Contact key={`${room.user.username}#${room.user.tag}`} username={room.user.username} tag={room.user.tag} email={room.user.email} messages={room.messages}/>)
                            : users.map((user) => <Contact key={`${user.username}#${user.tag}`} username={user.username} tag={user.tag} email={user.email} messages={[]}/>)
                        }
                    </ul>
                </SimpleBar>
            </div>
        </div>
    )
}
