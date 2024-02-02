'use client';
import React from 'react'
import Link from 'next/link';

const LogInBtn = () => {
  return (
    <Link className='btn btn-md text-md w-full px-4 py-2 text-white' href={'/home'}>Login</Link>
  )
}

export default LogInBtn