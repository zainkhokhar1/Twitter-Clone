
import React, { useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import Home from './Home'
import RightSidebar from './RightSidebar'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../components/ContextApi';
import HomeNavbar from '../components/HomeNavbar'
import CreatePost from '../components/CreatePost'
import FollowingPosts from '../components/FollowingPosts.jsx'

const FollowingApp = () => {
    const Navigate = useNavigate();

    const { isAuthenticated } = useAuth0();
    const fetch = async () => {
        if (isAuthenticated) {
        }
    }
    useEffect(() => {
        fetch();
    }, [])
    let [Auth] = useAuth();
    return (
        <>
            {
                isAuthenticated || Auth ? <div className='flex'>
                    <div className="pr-8">
                        <LeftSidebar />
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div className="mainmax-w-[40rem]">
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
                                <FollowingPosts />
                            </div>
                        </>
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div>
                        <RightSidebar />
                    </div>
                </div> : Navigate('/signup')
            }
        </>
    );
};

export default FollowingApp;
