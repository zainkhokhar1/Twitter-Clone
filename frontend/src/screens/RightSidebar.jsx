
import React from 'react'
import SearchNavbar from '../components/SearchNavbar'

function RightSidebar() {
    return (<>
        <div className='sticky top-0'>
            <SearchNavbar />
        </div>
        <div className='w-[28rem]'>
            <div className='px-14 space-y-3'>
                <div className='border border-slate-300  rounded-2xl'>
                    <div className='p-3 space-y-2'>
                        <h1 className='text-xl font-bold'>
                            Subscribe to Premium
                        </h1>
                        <p className='text-md'>
                            Subscribe to unlock new features and  if <br /> eligible, recieve a share of ads revenue.
                        </p>
                        <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full duration-200 font-semibold'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div>
                </div>

                <div className='w-full'>
                    <div className='w-fit border border-slate-300 rounded-2xl'>
                        <div className='p-3 w-80'>
                            <h1 className='text-lg font-bold'>Who to follow</h1>
                            <div className="avatar flex w-full pt-5 px-2 ">
                                <div className='flex h-[6rem] w-full'>
                                    <img className='rounded-sm max-w-12 max-h-12 inline' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    <h1 className="title inline pl-2 hover:underline font-bold cursor-pointer">
                                        NBC Sports
                                    </h1>
                                </div>
                                <button className='mt-2 bg-slate-100 rounded-full w-fit h-fit px-5 py-1 hover:bg-slate-200 duration-200'>
                                    Follow
                                </button>
                            </div>
                            <div className="avatar flex w-full px-2 ">
                                <div className='flex h-[6rem] w-full'>
                                    <img className='rounded-sm max-w-12 max-h-12 inline' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    <h1 className="title inline pl-2 hover:underline font-bold cursor-pointer">
                                        NBC Sports
                                    </h1>
                                </div>
                                <button className='mt-2 bg-slate-100 rounded-full w-fit h-fit px-5 py-1 hover:bg-slate-200 duration-200'>
                                    Follow
                                </button>
                            </div>
                            <div className="avatar flex w-full  px-2 ">
                                <div className='flex h-[6rem] w-full'>
                                    <img className='rounded-sm max-w-12 max-h-12 inline' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    <h1 className="title inline pl-2 hover:underline font-bold cursor-pointer">
                                        NBC Sports
                                    </h1>
                                </div>
                                <button className='mt-2 bg-slate-100 rounded-full w-fit h-fit px-5 py-1 hover:bg-slate-200 duration-200'>
                                    Follow
                                </button>
                            </div>
                            <div className="avatar flex w-full  px-2 ">
                                <div className='flex h-[6rem] w-full'>
                                    <img className='rounded-sm max-w-12 max-h-12 inline' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    <h1 className="title inline pl-2 hover:underline font-bold cursor-pointer">
                                        NBC Sports
                                    </h1>
                                </div>
                                <button className='mt-2 bg-slate-100 rounded-full w-fit h-fit px-5 py-1 hover:bg-slate-200 duration-200'>
                                    Follow
                                </button>
                            </div>
                            <div className="avatar flex w-full  px-2 ">
                                <div className='flex h-[6rem] w-full'>
                                    <img className='rounded-sm max-w-12 max-h-12 inline' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    <h1 className="title inline pl-2 hover:underline font-bold cursor-pointer">
                                        NBC Sports
                                    </h1>
                                </div>
                                <button className='mt-2 bg-slate-100 rounded-full w-fit h-fit px-5 py-1 hover:bg-slate-200 duration-200'>
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default RightSidebar