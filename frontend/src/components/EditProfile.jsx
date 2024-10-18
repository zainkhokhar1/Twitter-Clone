
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
function EditProfile() {
    let [userData,setUserData] = useState();
    let oldData;
    let Navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    let { id } = useParams();
    let [user,setUser] = useState([]);
        const getUSer=async()=>{
            oldData = await axios.get(`http://localhost:4000/user/${id}`);
            setUser(oldData.data.user);
        }
    const onSubmit = async (data) => {
        console.log(data);
        let updationData;
        try {
            let resCloudinary1;
            let resCloudinary2;
            let url1;
            let url2;
            const cloudData1 = new FormData();
            const cloudData2 = new FormData();
            if (data.image.length > 0 || data.coverImage.length > 0) {
                if (data.image.length > 0) {
                    console.log('uploading image');
                 cloudData1.append("file", data.image[0]);
                    cloudData1.append("upload_preset", "mycloud");
                    cloudData1.append("cloud_name", "dbyoondqs");
                    resCloudinary1 = await axios.post("https://api.cloudinary.com/v1_1/dbyoondqs/image/upload", cloudData1);
                    url1 = resCloudinary1.data.url;
                    console.log(resCloudinary1);
                    if (!resCloudinary1.data.url) {
                        return toast.error('Failed to upload the image');
                    }
                    console.log(user);
                    updationData = {
                        name: data.name,
                        image: url1,
                        coverImage: user.coverImage,
                    };
                }
                if (data.coverImage.length > 0) {
                    cloudData2.append("file", data.coverImage[0]);
                    cloudData2.append("upload_preset", "mycloud");
                    cloudData2.append("cloud_name", "dbyoondqs");
                    console.log(cloudData2);
                    resCloudinary2 = await axios.post("https://api.cloudinary.com/v1_1/dbyoondqs/image/upload", cloudData2);
                    url2 = resCloudinary2.data.url;
                    if (!resCloudinary2.data.url) {
                        return toast.error('Failed to upload the coverImage');
                    }
                    updationData = {
                        name: data.name,
                        image: oldData.data.user.image,
                        coverImage: url2,
                    };
                }
                let response = await axios.post(`http://localhost:4000/user/edit/${id}`, updationData);
                if (response.data.success) {
                    toast.success('Updated Profile Successfully');
                    return Navigate(`/profile/${id}`);
                }
            }
            else {
                console.log('running 2')
                let imageUrl = data.image ? url1 : oldData.data.user.image;
                let coverImage = data.coverImage ? url2 : oldData.data.user.coverImage;
                let name = data.name.length > 0 ? data.name : oldData.name;
                updationData = {
                    name,
                    image: imageUrl,
                    coverImage,
                };
                let response = await axios.post(`http://localhost:4000/user/edit/${id}`, updationData);
                if (response.data.success) {
                    toast.success('Updated Profile Successfully');
                    return Navigate(`/profile/${id}`);
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(()=>{
        getUSer();
    },[])
    return (
        <>
            <div className='w-full h-screen flex'>
                <div className="left flex items-center justify-center w-1/2 h-full">
                    <svg color='current-color' viewBox="0 0 24 24" aria-hidden="true" className="fill-purple-950 w-96 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
                <div className="right  w-1/2 ">
                    <div className='pl-12 pt-20 text-2xl font-semibold text-nowrap text-purple-600' >
                      <span className='text-slate-800 text-5xl'>
                      {user ? user.name+"'s" : ''} </span> Profile
                    </div>
                    <div className='mx-12 mt-10 text-black flex flex-col'>
                        <form method="dialog" className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <label className="input input-primary input-bordered flex items-center gap-2 w-80">
                                Name
                                <input type="text" className="grow" placeholder="Enter Name" {...register("name")} />
                            </label>
                            {errors.name && <span>Name must be of 3 digits or more</span>}
                            <label className='text-lg font-bold text-purple-900' htmlFor='image'>Update Profile Photo</label>
                            <input type="file" id='file' accept='image/*' className="file-input file-input-bordered w-full max-w-xs file-input-primary" {...register('image')} />
                            <label className="form-control w-full max-w-xs">
                                <label htmlFor="file" className='p-2 text-purple-900 text-xl font-bold'>Update cover Photo</label>
                                <input type="file" id='file' accept='image/*' className="file-input file-input-primary file-input-bordered w-full max-w-xs" {...register('coverImage')} />
                                <div className="label">
                                </div>
                            </label>
                            <button className='bg-purple-700 hover:bg-purple-800 duration-200 text-white  w-44 mt-4 py-4 rounded-full text-xl'>
                                Confirm edit
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile