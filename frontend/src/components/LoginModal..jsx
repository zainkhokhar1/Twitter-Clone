
import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth, useid } from './ContextApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function LoginModal() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [Auth, setAuth] = useAuth();
    let [id,setId] = useid();
    let Navigate = useNavigate();
    const onSubmit = async (data) => {
        // console.log(data);
        try {
            let response = await axios.post('http://localhost:4000/user/login', data);
            console.log(response.data)
            if (response.data.success) {
                localStorage.setItem('AuthToken', response.data.AuthToken);
                localStorage.setItem('userId',response.data.userFinded._id);
                setAuth(response.data.AuthToken);
                setId(response.data.userFinded._id);
                toast.success(response.data.success);
                Navigate('/');
            }
            else if (response.data.error) {
                toast.error(response.data.error);
            }
        }
        catch (e) {
            console.log(e.message);
            toast.error('User Not Founded');
        }
    };
    return (
        <>
            <div >
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box relative">
                        <span className='cursor-pointer absolute z-10 left-4 top-4 text-2xl' onClick={() => { document.getElementById('my_modal_2').close(); }}>
                            X
                        </span>
                        <p className="font-bold text-lg flex justify-center">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-10 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                        </p>
                        <div className="modal-action flex flex-col items-center">
                            <p className='pb-2 text-2xl font-bold'>
                                Login to your Account
                            </p>
                            <form method="dialog" className='flex flex-col space-y-8 mt-4' onSubmit={handleSubmit(onSubmit)}>
                                {/* if there is a button in form, it will close the modal */}
                                <label className="input-primary input input-bordered  flex items-center gap-2">
                                    Email
                                    <input type="text" className="grow" placeholder="Enter Email" {...register("email", { required: true, minLength: 5 })} />
                                </label>
                                {errors.email && <span>Email is required</span>}
                                <label className="input-primary input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input type="password" className="grow" placeholder='Enter Password' {...register("password", { required: true, minLength: 5 })} />
                                </label>
                                {errors.password && <span>Password must be of 5 digits</span>}
                                <button className='bg-black hover:bg-slate-950 duration-200 font-medium text-white  w-72 mt-4 py-4 rounded-full'>
                                    Login to Account
                                </button>

                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default LoginModal