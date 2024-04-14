import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = (message) => {
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const ref = useRef()
  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [message])
  

  return (
    <div ref={ref} className={`${message.message.senderId === currentUser.uid ? 'message owner' : 'message'} flex gap-[20px] mb-[20px]`}>
      <div className="messageInfo flex-reversed text-gray font-light">
        <img src={
          message.message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL
        } alt="profile" className='w-[40px] h-[40px] rounded-full object-cover'/>
        <span>just now</span>
      </div>
      <div className="messageContent max-w-[80%] flex-reversed">
          {message.message.text && <p className='bg-white px-[20px] py-[10px] rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-max'>{message.message.text}</p>}
          {message.message.img && <img src={message.message.img} alt="message" className='w-[50%] mt-[5px]'/>}
        </div>
    </div>
  )
}

export default Message