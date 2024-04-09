import React from 'react'

const Search = () => {
  return (
    <div className='search border-b-2	border-solid border-gray'>
      <div className="searchForm p-[10px]">
        <input type="text" className='bg-transparent border-none text-white outline-none' placeholder='Find a user'/>
      </div>
      <div className="userChat p-[10px] flex items-center gap-[10px] text-white cursor-pointer hover:bg-[#2f2d52]">
        <img src="./images/luffy.jpeg" alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
        <div className="userChatInfo">
          <span>Nitin</span>
        </div>
      </div>
    </div>
  )
}

export default Search