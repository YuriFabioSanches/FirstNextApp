import React from 'react'
import BackToHomeButton from './BackToHome'

const NavBarUser = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1 justify-start">
            <BackToHomeButton></BackToHomeButton>
        </div>
    </div>

  )
}

export default NavBarUser