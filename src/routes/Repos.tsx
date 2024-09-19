import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'
import classes from '../Repos.module.css'

export default function Repos() {

    const [data, setData] = useState([])

    const [userData] = useContext(userContext)

    const loadRepos = async (repos: string) => {
        const res = await fetch(repos);
        setData(await res.json())
        console.log(data)
    }

    async function testing(url: string){
        const response = await fetch(url);
        const testingData = await response.json()
        console.log(testingData)
    }


    useEffect(() => {
        loadRepos(userData.repos_url)
    }, [])


    return (
        <div className={classes.reposContainer}>
            {data.map((repo, index) => {
                return (
                    <div
                        className={classes.reposContainer_item}
                        key={index}>
                        <h2>{repo.name}</h2>
                        <hr />
                        <a href={repo.clone_url} target="_blank">Link</a>
                    </div>
                )
            })}
        </div>
    )
}
