import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Chats from '../components/Chats'

const Sidebar = () => {
  return (
    <div className="basis-1/3 border-r-2	border-solid bg-[#3e3c61] relative">
      <Navbar />
      <Search />
      <Chats />
      </div>
  )
}

export default Sidebar