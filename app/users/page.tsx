import React from 'react'
import Footer from '../components/Footer'
import NavBarUser from '../components/NavBarUser';


interface User {
  id: number,
  name: string,
  email: string
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
  const users: User[] = await res.json()

  return (
    <>
      <div className='grid grid-cols-1 text-xl text-center font-bold'>
        <NavBarUser></NavBarUser>
      </div>
      <table className='table table-zebra p-4 my-4'>
        <thead className='text-center'>
          <tr className='text-xl'>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {users.map(user => 
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)}
        </tbody>
      </table>
      <Footer></Footer>
    </>
  )
}

export default UsersPage