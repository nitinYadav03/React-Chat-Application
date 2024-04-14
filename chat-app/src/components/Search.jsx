import React, { useState, useContext } from 'react';
import { collection, query, where, serverTimestamp, getDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext'

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if(!res.exists()){
        await setDoc(doc(db, "chats", combinedId), {messages: []});
        await updateDoc(doc(db, "userChats", currentUser.uid),{
          [combinedId+".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId+".date"]: serverTimestamp()
        })
        await updateDoc(doc(db, "userChats", user.uid),{
          [combinedId+".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId+".date"]: serverTimestamp()
        })
      }
    } catch (error) {}
    setUser(null);
    setUsername("");
  }

  return (
    <div className="search border-b-2	border-solid border-gray">
      <div className="searchForm p-[10px]">
        <input
          type="text"
          className="bg-transparent border-none text-white outline-none"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span className='text-white'>User not found!</span>}
     {user &&  <div className="userChat p-[10px] flex items-center gap-[10px] text-white cursor-pointer hover:bg-[#2f2d52]" onClick={handleSelect}>
        <img
          src={user.photoURL}
          alt=""
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  );
};

export default Search;
