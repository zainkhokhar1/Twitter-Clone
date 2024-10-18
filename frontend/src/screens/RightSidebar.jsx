import React, { useEffect, useState } from 'react';
import SearchNavbar from '../components/SearchNavbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useid } from '../components/ContextApi';

function RightSidebar() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [userId] = useid();

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/user/getUsers');
            if (response.data.success) {
                setUsers(response.data.allUsers);
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleFollowing = async (id) => {
        try {
            const follow = await axios.post(`http://localhost:4000/user/follow/${userId}`, { id });
            if (follow.data.success) {
                toast.success(follow.data.success);
                // Update currentUser followers
                setCurrentUser(prevUser => {
                    const isFollowing = prevUser.followers.includes(id);
                    const newFollowers = isFollowing
                        ? prevUser.followers.filter(followerId => followerId !== id)
                        : [...prevUser.followers, id];

                    return { ...prevUser, followers: newFollowers };
                });
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    const userData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/user/${userId}`);
            if (response.data.success) {
                setCurrentUser(response.data.user);
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        getUsers();
        userData();
    }, []);

    return (
        <>
            <div className='sticky top-0'>
                <SearchNavbar />
            </div>
            <div className='w-[28rem]'>
                <div className='px-14 space-y-3'>
                    <div className='border border-slate-300 rounded-2xl'>
                        <div className='p-3 space-y-2'>
                            <h1 className='text-xl font-bold'>Subscribe to Premium</h1>
                            <p className='text-md'>
                                Subscribe to unlock new features and if eligible, receive a share of ads revenue.
                            </p>
                            <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full duration-200 font-semibold'>
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='w-fit border border-slate-300 rounded-2xl'>
                            <div className='p-3 w-80'>
                                <h1 className='text-lg font-bold'>Who to follow</h1>
                                {users.map(singleUser => {
                                    if (singleUser._id !== userId) {
                                        return (
                                            <div className="avatar flex w-full px-2 pt-2" key={singleUser._id}>
                                                <div className='flex h-[6rem] w-full'>
                                                    <img
                                                        className='rounded-sm max-w-12 max-h-12 inline'
                                                        src={singleUser.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                                        alt={singleUser.name}
                                                    />
                                                    <h1 className="title inline pl-2 hover:underline font-bold cursor-pointer">
                                                        <Link to={`/profile/${singleUser._id}`}>{singleUser.name}</Link>
                                                    </h1>
                                                </div>
                                                {currentUser.followers && (
                                                    currentUser.followers.includes(singleUser._id) ? (
                                                        <button onClick={() => handleFollowing(singleUser._id)}
                                                            className='mt-2 bg-slate-100 rounded-full w-fit h-fit px-5 py-1 hover:bg-slate-200 duration-200'>
                                                            Unfollow
                                                        </button>
                                                    ) : (
                                                        <button onClick={() => handleFollowing(singleUser._id)}
                                                            className='mt-2 bg-slate-100 rounded-full w-fit h-fit px-5 py-1 hover:bg-slate-200 duration-200'>
                                                            Follow
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightSidebar;
