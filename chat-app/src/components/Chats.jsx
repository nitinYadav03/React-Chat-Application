import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat p-[10px] flex items-center gap-[10px] text-white cursor-pointer hover:bg-[#2f2d52]">
        <img src="./images/luffy.jpeg" alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
        <div className="userChatInfo">
          <span className='text-[18px] font-medium'>Nitin</span>
          <p className='text-[14px] text-gray-300'>Hello</p>
        </div>
      </div>
      <div className="userChat p-[10px] flex items-center gap-[10px] text-white cursor-pointer hover:bg-[#2f2d52]">
        <img src="./images/luffy.jpeg" alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
        <div className="userChatInfo">
          <span className='text-[18px] font-medium'>Nitin</span>
          <p className='text-[14px] text-gray-300'>Hello</p>
        </div>
      </div>
      <div className="userChat p-[10px] flex items-center gap-[10px] text-white cursor-pointer hover:bg-[#2f2d52]">
        <img src="./images/luffy.jpeg" alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
        <div className="userChatInfo">
          <span className='text-[18px] font-medium'>Nitin</span>
          <p className='text-[14px] text-gray-300'>Hello</p>
        </div>
      </div>
    </div>
    
  )
}

export default Chats