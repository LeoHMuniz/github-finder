import { useContext, useState } from 'react'
import { UserProps } from '../types/user';
import Search from '../components/Search'
import User from '../components/User'
import Error from '../components/Error';
import { userContext } from '../App';

export default function Home() {

    const [userDataContext, setUserDataContext] = useContext(userContext)
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);

    const loadUser = async (userName: string) => {


        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if (res.status === 404) {
            setError(true);
            setUser(null);
            return;
        }
        else {
            setError(false);
        }

        const { avatar_url, login, location, followers, following } = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        };
        setUserDataContext(data)
        setUser(userData)
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {user && <User {...user} />}
            {error && <Error />}
        </div>
    )
}
