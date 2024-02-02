import React from 'react'
import Link from 'next/link'

const BtnUsers = () => {
  return (
    <div>
      <Link className="btn btn-ghost btn-lg text-xl" href= '/users'>Users</Link>
    </div>
  )
}

export default BtnUsers