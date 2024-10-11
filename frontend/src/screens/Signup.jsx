
import React from 'react'
import Modal from '../components/Modal'
import LoginModal from '../components/LoginModal.'
import { useAuth0 } from "@auth0/auth0-react";
import { useid } from '../components/ContextApi';
function Signup() {
    let [id, setId] = useid();
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const handleLogin = async () => {
        await loginWithRedirect();
        try {    
            if (isAuthenticated) {
                console.log('running')
                let Token = user.email;
                console.log(`Token ${Token}`)
                toast.success('Welcome to TwitterClone')
                localStorage.setItem('userId', Token);
                setId(Token);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <div className='w-full h-screen flex'>
                <div className="left flex items-center justify-center w-1/2 h-full">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-96 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
                <div className="right  w-1/2 ">
                    <div className='pl-12 pt-20 text-6xl font-extrabold text-nowrap text-black' >
                        Happening now
                    </div>
                    <div className='mx-12 mt-10 text-black flex flex-col'>
                        <h1 className='text-3xl font-extrabold'>
                            Join today.
                        </h1>
                        <button onClick={handleLogin}
                            className='bg-black hover:bg-slate-950 duration-200 font-medium text-white  w-80 mt-10 py-4 rounded-full'>
                            Signup With Gmail
                        </button>
                        <button onClick={handleLogin} className='bg-black hover:bg-slate-950 duration-200 font-medium text-white  w-80 mt-4 py-4 rounded-full'>
                            Signup With Apple
                        </button>
                        <div className='w-80  flex items-center'>
                            <div className='w-1/2 h-px bg-slate-300 mr-3'></div>
                            or
                            <div className='w-1/2 h-px bg-slate-300 ml-3'></div>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className='font-semibold  bg-blue-500 hover:bg-blue-600 duration-200 text-white  w-80 mt-4 py-4 rounded-full'>
                            Create Account
                        </button>
                        <Modal />
                        <h1 className='pl-4 pt-4 text-lg font-bold'>
                            Already Have an Account?
                        </h1>
                        <button onClick={() => document.getElementById('my_modal_2').showModal()} className='text-lg font-semibold bg-transparent text-black hover:bg-slate-100 duration-200 border-[1px] border-slate-500 w-80 mt-4 py-3 rounded-full'>
                            Sign in
                        </button>
                        <LoginModal />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup