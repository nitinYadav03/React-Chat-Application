import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className="chat basis-2/3">
      <div className="chatInfo h-[50px] bg-[#5d5b8d] flex items-center justify-between p-[10px] text-gray-50">
        <span>Nitin</span>
        <div className="chatIcons flex gap-[14px]">
          <img src="./images/video-camera.png" alt="" className='h-[24px] cursor-pointer'/>
          <img src="./images/add-user.png" alt="" className='h-[24px] cursor-pointer'/>
          <img src="./images/more.png" alt="" className='h-[24px] cursor-pointer'/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat