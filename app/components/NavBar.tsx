import React from 'react'
import BtnUsers from './BtnUsers'
import NewUserBtn from './NewUserBtn'
import LogOutBtn from './LogOutBtn'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
        <div>
            <BtnUsers></BtnUsers>
            <NewUserBtn></NewUserBtn>
        </div>
        <div className='flex-1 justify-end'>
            <LogOutBtn></LogOutBtn>
        </div>

    </div>
  )
}

export default NavBar