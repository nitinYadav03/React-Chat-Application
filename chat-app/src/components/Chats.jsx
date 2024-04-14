import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import {ChatContext} from '../context/ChatContext';


const Chats = () => {
  const [chats, setChats] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);

  useEffect(() =>{
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });  
  
      return () => {
        unsub();
      };
    }

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = async (u) => {
    dispatch({type: 'CHANGE_USER', payload: u});
  }

  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map(chat => (
        <div className="userChat p-[10px] flex items-center gap-[10px] text-white cursor-pointer hover:bg-[#2f2d52]" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img src={chat[1].userInfo.photoURL} alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
          <div className="userChatInfo">
            <span className='text-[18px] font-medium'>{chat[1].userInfo.displayName}</span>
            <p className='text-[14px] text-gray-300'>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
    
  )
}

export default Chats