import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className="home bg-[#a7bcff] h-screen flex items-center justify-center">
        <div className="md:w-[90%] w-2/3 h-4/5 border-2 border-solid rounded-xl border-white flex overflow-hidden">
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}

export default Home