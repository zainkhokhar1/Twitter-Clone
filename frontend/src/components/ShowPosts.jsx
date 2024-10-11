
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeletePost from './DeletePost';
import { Link } from 'react-router-dom';
import { useid } from './ContextApi';
import toast from 'react-hot-toast';
function ShowPosts() {
    let [posts, setPosts] = useState([]);
    let [id] = useid();
    let userId = id;
    const getAllPosts = async () => {
        let allPosts = await axios.get('http://localhost:4000/post/all');
        if (allPosts.data.success) {
            setPosts(allPosts.data.allPosts);
        }
    }
    const handleLikes = async (event) => {
        try {
            let id = event.target.value;
            let updationLikes = await axios.post(`http://localhost:4000/post/like/${id}`, { userId });
            if (updationLikes.data.success) {
                let postIndex = posts.findIndex((post) => post._id === id);
                let updatePost;
                let newPosts;
                if (postIndex !== -1) {
                    let condition = posts[postIndex].likes.indexOf(userId);
                    if (condition === -1) {
                        updatePost = {
                            ...posts[postIndex],
                            likes: [...posts[postIndex].likes, userId]
                        }
                        newPosts = [
                            ...posts.slice(0, postIndex),
                            updatePost,
                            ...posts.slice(postIndex + 1),
                        ];
                    }
                    else {
                        let updatedPost = {
                            ...posts[postIndex],
                            likes: posts[postIndex].likes.filter((likeId) => { return likeId !== userId })
                        }
                        newPosts = [
                            ...posts.slice(0, postIndex),
                            updatedPost,
                            ...posts.slice(postIndex + 1),
                        ]
                    }
                    setPosts(newPosts);
                }
            }
            else if (updationLikes.data.success === false) {
                toast.error('Likes Decreased');
            }
        }
        catch (e) {
            console.log(e.message);
            toast.error('Something wrong in the frontend')
        }
    }
    useEffect(() => {
        getAllPosts();
    }, [])
    return (
        <>
            {
                posts.map((singlePost) => {
                    const formattedDate = new Date(singlePost.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    });
                    return <div key={singlePost._id} className='hover:bg-slate-100 cursor-pointer duration-200 relative'>
                        <div className="creator">
                            <div className="avatar h-full cursor-pointer">
                                <div className="ml-5 mt-5 min-w-10 h-10 rounded-full opacity-85 hover:opacity-100 duration-200">
                                    <img src={singlePost.owner.image ? singlePost.owner.image : 'https://img.freepik.com/premium-photo/little-cute-boy-with-diamod-her-hands_1057389-81291.jpg?w=740'} />
                                </div>
                                <span className='mt-5 ml-2  cursor-pointer'>
                                    <p className='flex gap-40'>
                                        <Link to={`/profile/${singlePost.owner._id}`} className='hover:underline text-nowrap'>{singlePost.owner.name.length > 15 ? singlePost.owner.name.slice(0, 14) + '...' : singlePost.owner.name}</Link>
                                        <span className='text-sm -ml-16'>{formattedDate}</span>
                                    </p>
                                    <p className='ml-2 pr-4 mt-4 text-lg text-black'>
                                        {singlePost.text}
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className='w-fit h-fit my-2 mx-8 flex items-center justify-center border-[1px] border-slate-400 rounded-xl overflow-hidden'>
                            <img className='max-w-[25rem] min-w-[30rem] max-h-[30rem] min-h-[28rem] object-cover rounded-xl' src={singlePost.image} alt="PostImage" />
                        </div>
                        <div className="socials ml-16 flex items-center space-x-20">
                            <p className='p-2 hover:bg-blue-100 w-fit rounded-full duration-100 '>
                                <svg fill='CurrentColor' viewBox="0 0 24 24" aria-hidden="true" className="w-6 text-slate-500 hover:text-blue-700 cursor-pointer duration-200 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi r-12c3ph5"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                            </p>
                            <span>
                                <p className='hover:text-green-700 flex repost w-fit rounded-full p-2 hover:bg-green-100 duration-100'>
                                    <svg fill='CurrentColor' viewBox="0 0 24 24" aria-hidden="true" className="w-5 text-slate-500
                        hover:text-green-500 duration-200 cursor-pointer r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg><span className='pl-1 cursor-pointer'>300</span>
                                </p>
                            </span>

                            <div className="rating gap-1 cursor-pointerb hover:text-red-600 cursor-pointer duration-200">
                                <input type="radio" name="likes" id='likes' className="duration-200 hover:bg-red-500 mask mask-heart bg-slate-400" value={singlePost._id} onClick={handleLikes} />
                                <label htmlFor='likes' className='cursor-pointer'>{singlePost.likes.length}</label>
                            </div>
                            <span className='views p-2 hover:bg-blue-200 duration-200 rounded-full cursor-pointer'>
                                <svg fill='CurrentColor' viewBox="0 0 24 24" aria-hidden="true" className={`${singlePost.likes} ? 'bg-red-900' : '' w-5 text-slate-500 cursor-pointer  hover:text-blue-600 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi`}><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                            </span>
                        </div>
                        <div className='mt-5 width-full bg-slate-200 h-px'></div>
                        <button className="dropdown absolute right-0 top-0 list-none">
                            <summary className="m-1 pr-1 opacity-85 hover:opacity-100 text-3xl ">...</summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a><DeletePost id={singlePost._id} /></a></li>
                                <li><Link state={singlePost} to={`/post/${singlePost._id}`}>Update Post</Link></li>
                            </ul>
                        </button>
                    </div >
                })
            }
        </>
    )
}

export default ShowPosts