
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useid } from './ContextApi';
function PostUpdateForm() {
    let [id] = useid();
    let Navigate = useNavigate();
    let [Post, setPost] = useState({});
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const { Id } = useParams();
    const location = useLocation();
    const onSubmit = async (data) => {
        let resCloudinary;
        let url;
        let updationData;
        try {
            console.log(data)
            console.log(Id);
            if(data.image.length>0){
                const cloudData = new FormData();
                cloudData.append("file", data.image[0]);
                cloudData.append("upload_preset", "mycloud");
                cloudData.append("cloud_name", "dbyoondqs");
                resCloudinary = await axios.post("https://api.cloudinary.com/v1_1/dbyoondqs/image/upload", cloudData);
                url = resCloudinary.data.url;
                if (!resCloudinary.data.url) {
                    return toast.error('Failed to upload the image');
                }
                updationData = {
                    text: data.text,
                    image: url,
                    updatedAt: Date.now(),
                    userId: id,
                };
            }
            else{
                updationData = {
                    text: data.text,
                    updatedAt: Date.now(),
                    userId: id,
                };
            }
            let responseUpdation = await axios.post(`http://localhost:4000/post/update/${Id}`, updationData);
            if (responseUpdation.data.success) {
                toast.success(responseUpdation.data.success);
                Navigate('/');
                reset();
            }
            else if (responseUpdation.data.error) {
               return toast.error(responseUpdation.data.error);
            }
        }
        catch (e) {
            console.log(e.message);
            toast.error('Unathorized User')
        }
    }
    useEffect(() => {
        const singlePost = location.state;
        setPost(singlePost);
    }, [])
    return (
        <>
            <div className='w-full h-screen flex'>
                <div className="left flex items-center justify-center w-1/2 h-full">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-96 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
                <div className="right  w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className='pr-28 pl-24 space-y-8 h-full w-full flex flex-col justify-center'>
                        <h1 className='text-5xl font-bold'>
                            Update Post
                        </h1>
                        <textarea className="textarea textarea-primary" placeholder={Post.text} {...register("text", { required: true })} />
                        {errors.caption && <span>Post must have 3 Characters</span>}
                        <label className="form-control w-full max-w-xs">
                            <label htmlFor="file" className='p-2 text-lg  font-semibold'>Update Image</label>
                            <input type="file" id='file' accept='image/*' className="file-input file-input-bordered w-full max-w-xs" {...register('image')} />
                            <div className="label">
                            </div>
                        </label>
                        <button className='bg-black hover:bg-slate-950 duration-200 font-medium text-white  w-72 mt-4 py-4 rounded-full'>
                            Update
                        </button>
                    </form>
                </div>
            </div >
        </>
    )
}
export default PostUpdateForm