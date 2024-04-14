import { signOut } from 'firebase/auth';
import React, {useContext} from 'react'
import { auth } from '../firebase';
import {AuthContext} from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='flex items-center bg-[#2f2d52] h-12 p-10 justify-between text-[#ddddf7]'>
      <span className='font-bold md:hidden'>Nimbus Chat</span>
      <div className="user flex gap-2">
        <img src={currentUser.photoURL} alt="" className='bg-[#ddddf7] h-6 w-6 rounded-full object-cover'/>
        <span>{currentUser.displayName}</span>
        <button className='bg-[#5d5b8d] text-[#ddddf7] text-[12px] cursor-pointer md:absolute bottom-[10px] left-5 p-[8px]' onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar