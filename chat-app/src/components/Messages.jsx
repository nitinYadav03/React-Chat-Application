import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='messages bg-[#ddddf7] p-[10px] h-[calc(100%-100px)] overflow-scroll'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages