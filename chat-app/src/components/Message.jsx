import React from 'react'

const Message = () => {
  return (
    <div className='message owner flex gap-[20px] mb-[20px]'>
      <div className="messageInfo flex-reversed text-gray font-light">
        <img src="./images/luffy.jpeg" alt="profile" className='w-[40px] h-[40px] rounded-full object-cover'/>
        <span>just now</span>
      </div>
      <div className="messageContent max-w-[80%] flex-reversed">
          <p className='bg-white px-[20px] py-[10px] rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-max'>hello</p>
          <img src="./images/luffy.jpeg" alt="message" className='w-[50%] mt-[5px]'/>
        </div>
    </div>
  )
}

export default Message