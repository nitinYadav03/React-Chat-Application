import React from 'react'

const Input = () => {
  return (
    <div className='bg-white h-[50px] p-[10px] flex  items-center justify-between'>
      <input type="text" placeholder="Type Something..." className='w-full border-none outline-none text-[#2f2d52] text-[18px] placeholder:text-gray'/>
      <div className="send flex items-center justify-end gap-[10px] w-1/3">
        <img src="./images/attachment.png" alt="Attachment" className='w-[24px] h-[24px] cursor-pointer'/>
        <input type="file" style={{display:'none'}} id='file'/>
        <label htmlFor='file'>
          <img src="./images/image.png" alt="file" className='w-[24px] h-[24px] cursor-pointer'/> 
        </label>
        <button className='border-none px-[10px] py-[15px] text-white bg-[#8da4f1] cursor-pointer w-[60px] h-[40px] flex items-center rounded-lg justify-center'>Send</button>
      </div>
    </div>
  )
}

export default Input