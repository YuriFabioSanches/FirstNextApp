'use.client';
import Link from 'next/link'
import React from 'react'

const BackToHomeButton = () => {
  return (
    <div>
      <Link className='btn btn-ghost btn-lg text-xl ' href='/home'>Home</Link>
    </div>
  )
}

export default BackToHomeButton