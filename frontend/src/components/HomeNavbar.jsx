
import React from 'react'

function HomeNavbar() {
  return (
     <div className='w-full z-999 bg-slate-50  h-14 flex cursor-pointer text-xl'>
        <div className="left w-1/2 flex items-center justify-center hover:bg-slate-100 duration-100">
         For you
        </div>
        <div className='w-px h-full bg-slate-200'></div>
        <div className="right w-1/2 flex justify-center items-center hover:bg-slate-100 duration-100">
                Following
        </div>
     </div>
  )
}

export default HomeNavbar