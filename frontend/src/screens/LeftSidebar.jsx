
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth, useid } from '../components/ContextApi';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import CreatePostModal from '../components/CreatePostModal';
function LeftSidebar() {
    let [Auth, setAuth] = useAuth();
    let [id, setId] = useid();
    let Navigate = useNavigate();
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();
    const handleLogout = () => {
        localStorage.removeItem('AuthToken');
        localStorage.removeItem('userId');
        setId(null);
        Navigate('/signup');
        toast.success('Successfully Logged Out');
    }
    return (
        <>
            <div className=' w-3/12 h-screen  pl-14 py-2 sticky top-0'>
                <div className='w-full h-14 pl-1'>
                    <div className='logo cursor-pointer hover:bg-slate-200 duration-200 w-fit h-fit text-center p-2 rounded-full'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </div>
                </div>

                <div className='w-full h-14'>
                    <div className='flex  cursor-pointer duration-200  hover:bg-slate-200 w-fit rounded-full px-3 py-2'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path></g></svg>
                        <Link to='/'><span className='pl-5 pt-1 text-xl font-semibold align-middle'>
                            Home
                        </span>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-14 -ml-1'>
                    <div className='flex  cursor-pointer duration-200  hover:bg-slate-200 w-fit rounded-full px-4 py-2'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"></path></g></svg>
                        <span className='pl-3 text-xl font-semibold'>
                            Explore
                        </span>
                    </div>
                </div>

                <div className='w-full h-14 -ml-2'>
                    <div className='flex  cursor-pointer duration-200  hover:bg-slate-200 w-fit rounded-full px-4 py-2'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></g></svg>
                        <span className='pl-3 text-xl font-semibold'>
                            Notifications
                        </span>
                    </div>
                </div>

                <div className='w-full h-14 -ml-1'>
                    <div className='flex  cursor-pointer duration-200  hover:bg-slate-200 w-fit rounded-full px-3 py-2'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>
                        <span className='pl-3 text-xl font-semibold'>
                            Messages
                        </span>
                    </div>
                </div>
                <div className='w-full h-14 -ml-1'>
                    <div className='flex  cursor-pointer duration-200  hover:bg-slate-200 w-fit rounded-full px-3 py-2'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><g clipPath="url(#0-clip0_2592_269)" clipRule="evenodd"><path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path><path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path></g><defs><clipPath id="0-clip0_2592_269"><rect height="20" rx="1" width="20" x="2" y="2"></rect></clipPath></defs></g></svg>
                        <span className='pl-3 text-xl font-semibold'>
                            Grok
                        </span>
                    </div>
                </div>
                <div className='w-full h-14 -ml-1'>
                    <div className='flex  cursor-pointer duration-200  hover:bg-slate-200 w-fit rounded-full px-3 py-2'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path></g></svg>
                        <span className='pl-3 text-xl font-semibold'>
                            Communities
                        </span>
                    </div>
                </div>
                <div className='w-full h-14 -ml-1'>
                    <div className='flex justify-start cursor-pointer duration-200  hover:bg-slate-200 w-fit rounded-full px-3 py-2'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="min-w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg>
                        <Link to={`/profile/${id}`} className='pl-3 text-xl font-semibold'>
                            Profile
                        </Link>
                    </div>
                </div>
                <div className='w-full h-14 -ml-1'>
                    <div className='flex  cursor-pointer duration-200  hover:bg-slate-200 w-fit rounded-full px-3 py-2'>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg>
                        <span className='pl-3 text-xl font-semibold'>
                            More
                        </span>
                    </div>
                </div>
                <div className='w-full h-14'>
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className=' bg-blue-500 hover:bg-blue-600 duration-200 text-white px-24 py-3 rounded-3xl text-md font-semibold'>
                        Post
                    </button>
                    <CreatePostModal />
                    {
                        isAuthenticated ? <div className=' flex -ml-8 space-x-12 relative'>
                            <div className="mt-3 min-w-10 min-h-10 rounded-full opacity-85 hover:opacity-100 duration-200 flex items-center cursor-pointer">
                                <img className='rounded-full' src={user.picture} />
                                <h2 className='pl-2 text-nowrap font-semibold'>{user.name.slice(0, 8)}...</h2>
                            </div>
                            <button onClick={() => {
                                toast.success('Successfully Logged Out'); localStorage.removeItem('userId');
                                setAuth(null); logout({ logoutParams: { returnTo: window.location.origin } })
                            }} className=' bg-slate-800 hover:bg-slate-700 duration-200 text-white px-3 mt-4 py-2 rounded-3xl text-md font-semibold absolute left-32'>
                                Logout
                            </button> </div> : ''
                    }
                    {
                        Auth ? <button onClick={handleLogout} className=' bg-slate-800 hover:bg-slate-700 duration-200 text-white px-3 mt-4 py-2 rounded-3xl text-md font-semibold absolute left-32'>
                            Logout
                        </button> : ''
                    }
                </div>
            </div>
        </>
    )
}

export default LeftSidebar