
import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import CreatePost from '../components/CreatePost'
import ShowPosts from '../components/ShowPosts'

function Home() {
  return (
    <>
      <div className='sticky top-0 bg-white'>
        <HomeNavbar />
      </div>
      <div className=' bg-slate-200 h-px'></div>
      <div>
        <CreatePost />
      </div>
      <div className=' bg-slate-200 h-px'></div>
      <div>
        <ShowPosts />
      </div>
    </>
  )
}

export default Home