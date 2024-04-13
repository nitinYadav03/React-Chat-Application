import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className='flex items-center bg-[#2f2d52] h-12 p-10 justify-between text-[#ddddf7]'>
      <span className='font-bold md:hidden'>Nimbus Chat</span>
      <div className="user flex gap-2">
        <img src="./images/luffy.jpeg" alt="" className='bg-[#ddddf7] h-6 w-6 rounded-full object-cover'/>
        <span>Nitin</span>
        <button className='bg-[#5d5b8d] text-[#ddddf7] text-[12px] cursor-pointer md:absolute bottom-[10px] left-5 p-[8px]' onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar