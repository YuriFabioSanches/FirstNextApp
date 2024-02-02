'use.client';
import Link from 'next/link';
import React from 'react'

const NewUserBtn = () => {
  return (
    <div>
        <Link className='btn btn-ghost btn-lg text-xl' href='/users/new'>Create a new user</Link>
    </div>
  )
}

export default NewUserBtn