import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import {v4 as uuid} from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
  const [err, setErr] = useState(false);
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const handleSend = async () => {

    try {
      
      if(img){
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, img);
        uploadTask.on(
          (error) => {
            setErr(true)
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  senderDisplayName: currentUser.displayName,
                  senderPhotoURL: currentUser.photoURL,
                  date: Timestamp.now(),
                  img: downloadURL
                })
              })
            });
          }
        );
      }else{
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            senderDisplayName: currentUser.displayName,
            senderPhotoURL: currentUser.photoURL,
            date: Timestamp.now()
          })
        })
      }
      
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId+".lastMessage"]:{
          text
        },
        [data.chatId+".date"]: serverTimestamp()
      })
      
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId+".lastMessage"]:{
          text
        },
        [data.chatId+".date"]: serverTimestamp()
      })
      
      setText("")
      setImg(null)
    } catch (error) {
      setErr(true)
    }
    
  }
    
    return (
    <div className='bg-white h-[50px] p-[10px] flex  items-center justify-between'>
      <input type="text" placeholder="Type Something..." className='w-full border-none outline-none text-[#2f2d52] text-[18px] placeholder:text-gray' onChange={(e)=>setText(e.target.value)} value={text}/>
      <div className="send flex items-center justify-end gap-[10px] w-1/3">
        <img src="./images/attachment.png" alt="Attachment" className='w-[24px] h-[24px] cursor-pointer'/>
        <input type="file" style={{display:'none'}} id='file' onChange={(e)=>setImg(e.target.files[0])}/>
        <label htmlFor='file'>
          <img src="./images/image.png" alt="file" className='w-[24px] h-[24px] cursor-pointer'/> 
        </label>
        <button className='border-none px-[10px] py-[15px] text-white bg-[#8da4f1] cursor-pointer w-[60px] h-[40px] flex items-center rounded-lg justify-center' onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input