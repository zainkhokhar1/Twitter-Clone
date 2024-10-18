
import React, { useEffect, useState } from 'react'
import './CreatePost.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { useid } from './ContextApi';
function CreatePost() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let Navigate = useNavigate();
    let [id, setId] = useid();
    let [image, setImage] = useState([]);
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const formData = new FormData();
            formData.append("file", data.image[0]);
            formData.append("upload_preset", "mycloud");
            formData.append("cloud_name", "dbyoondqs");
            const cloudData = await axios.post('https://api.cloudinary.com/v1_1/dbyoondqs/image/upload', formData);
            let url = cloudData.data.url;
            if (!cloudData.data.url) {
                return toast.error('Failed to upload image');
            }
            let id = localStorage.getItem('userId');
            let postData = {
                owner: id,
                image: url,
                text: data.text,
                date: Date.now(),
            };
            let CreatingPost = await axios.post('http://localhost:4000/post/create', postData);
            if (CreatingPost.data.success) {
                toast.success('Post Created Successfully');
                Navigate('/');
                reset();
            }
            else if (CreatingPost.data.error) {
                toast.error(CreatingPost.data.error);
            }
        }
        catch (e) {
            console.log(e.message);
            toast.error("Failed to Create post");
        }
    };
    const fetchUser = async () => {
        try {
            let user = await axios.get(`http://localhost:4000/user/${id}`);
            if (user.data.success) {
                setImage(user.data.user.image);
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='h-24 bg-slate-50 flex'>
                    <div className="avatar h-full cursor-pointer">
                        <div className="ml-5 mt-5 w-12 h-12 rounded-full opacity-85 hover:opacity-100 duration-200">
                            <img src={image ? image : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                        </div>
                    </div>
                    <div className="post mx-4 w-full">
                        <textarea type='text' placeholder='What is happening?!' className='overflow-y-auto min-h-8 max-h-44 w-full p-2 text-xl mt-7 focus:outline-none bg-transparent break-words resize-none scrollbar-hide' {...register("text", { required: true, minLength: 2 })} />
                        {errors.text && <span className='text-red-500'>Some text is required</span>}
                    </div>
                </div>
                <div className='h-px w-9/12 bg-slate-300 mx-auto'></div>
                <div className='flex h-16 w-full px-16 items-center space-x-6'>
                <div className='w-fit flex'>
                                        <label htmlFor="image">
                                            <svg viewBox="0 0 24 24" fill='CurrentColor' aria-hidden="true" className=" w-6 cursor-pointer r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03 text-[rgb(29,155,240)]" ><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path></g></svg>
                                        </label>
                                        <input type="file" id='image' className='hidden' {...register("image", { required: true })} accept='image/*' />
                                    </div>
                        {errors.image && <span className='text-red-500'>An image is required</span>}
                    <div>
                        <svg fill='CurrentColor' viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 cursor-pointer r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03 text-[rgb(29,155,240)]"><g><path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path></g></svg>
                    </div>
                    <div>
                        <svg fill='CurrentColor' viewBox="0 0 24 24" aria-hidden="true" className="cursor-pointer r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim w-6 h-6 r-lrvibr r-m6rgpd r-z80fyv r-19wmn03 text-[rgb(29,155,240)]"><g><path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path></g></svg>
                    </div>
                    <div>
                        <svg fill='CurrentColor' viewBox="0 0 24 24" aria-hidden="true" className="cursor-pointer w-6 h-6 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03 text-[rgb(29,155,240)]"><g><path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path></g></svg>
                    </div>
                    <div>
                        <svg fill='CurrentColor' viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 cursor-pointer r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03 text-[rgb(29,155,240)]"><g><path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path></g></svg>
                    </div>
                    <div className='pl-36'>
                        <button type='submit' className='bg-blue-500 hover:bg-blue-600 font-bold duration-200 text-white px-4 py-2 rounded-full'>
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreatePost