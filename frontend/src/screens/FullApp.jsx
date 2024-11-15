
import React, { useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import Home from './Home'
import RightSidebar from './RightSidebar'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../components/ContextApi';

function FullApp() {
    const Navigate = useNavigate();
    
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
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
                        <Home />
                    </div>
                    <div className="w-px bg-gray-300"></div>
                    <div>
                        <RightSidebar />
                    </div>
                </div> : Navigate('/signup')
            }
        </>
    )
}

export default FullApp