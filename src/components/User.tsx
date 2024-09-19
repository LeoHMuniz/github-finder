import { Link } from 'react-router-dom'
import { UserProps } from '../types/user'
import { MdLocationPin } from 'react-icons/md'
import classes from './User.module.css'

export default function User({ login, avatar_url, location, followers, following }: UserProps) {
    return (
        <div className={classes.user}>
            <img
                src={avatar_url}
                alt={login} />
            {location &&
                (<p className={classes.user_location}>
                    <MdLocationPin font-size="1.4rem" fill="#17b986d3"/>
                    <span>{location}</span>
                </p>)}
            <div className={classes.user_follows}>
                <div>
                    <p>Seguidores:</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p>{following}</p>
                </div>
            </div>
            <Link to={{pathname:"/repos"}} className={classes.user_bestProjects}>Ver melhores projetos</Link>
        </div>
    )
}
