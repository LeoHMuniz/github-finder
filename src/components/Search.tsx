import { useState, KeyboardEvent, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import classes from './Search.module.css'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

export default function Search({ loadUser }: SearchProps) {

    const userSearching = useRef<HTMLInputElement|null>(null);

    function handleKeyPressed(event: KeyboardEvent) {
        if (event.key == 'Enter') {
            if (userSearching.current?.value !== null && userSearching.current?.value !== "") {
                loadUser(userName)
            }
        }
    }

    const [userName, setUserName] = useState("")
    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input
                    type="text"
                    ref={userSearching}
                    placeholder="Digite o nome do usuário"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyPressed}
                />
                <button
                    onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>

    )
}
