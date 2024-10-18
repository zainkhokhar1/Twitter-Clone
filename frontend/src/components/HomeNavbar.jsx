
import React from 'react'
import {useNavigate} from 'react-router-dom'

function HomeNavbar() {
   let Navigate = useNavigate();
   let Navigate2 = useNavigate();
   const handleRedirectFollowing =()=>{
      Navigate('/following/posts');
   }
   const handleHome=()=>{
      Navigate2('/');
   }
  return (
     <div  className='max-w-full sticky top-0 bg-white h-14 flex cursor-pointer text-xl'>
        <div onClick={handleHome} className="left w-1/2 flex items-center justify-center hover:bg-slate-100 duration-100">
         For you
        </div>
        <div className='w-px h-full bg-slate-300'></div>
        <div onClick={handleRedirectFollowing} className="w-1/2 flex justify-center items-center hover:bg-slate-100 duration-100">
                Following
        </div>
     </div>
  )
}

export default HomeNavbar