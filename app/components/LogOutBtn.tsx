import Link from 'next/link'
import React from 'react'

const LogOutBtn = () => {
  return (
    <div>
        <Link className='btn btn-ghost btn-lg text-xl' href='/'>Sign out</Link>
    </div>
  )
}

export default LogOutBtn