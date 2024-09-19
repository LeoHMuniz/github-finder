import { Outlet } from "react-router-dom"
import classes from './App.module.css'
import { UserProps } from "./types/user";
import React, { useState } from "react";


const userDataContext: UserProps | null = null

export const userContext = React.createContext();

function App() {
  const [userData, setUserData] = useState<UserProps | null>(userDataContext)


  return (

    <userContext.Provider value={[userData, setUserData]}>
      <div className={classes.app}>
        <h1>GitHub Finder</h1>
        <Outlet />
      </div>
    </userContext.Provider>


  )
}

export default App
