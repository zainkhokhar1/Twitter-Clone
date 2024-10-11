
import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useid } from './ContextApi'
function DeletePost(props) {
    let [id] = useid();
    let Navigate = useNavigate();
    const handleDeletion = async () => {
        try {
            let ActDeletion = await axios.post(`http://localhost:4000/post/delete/${props.id}`, { userId: id });
            console.log(ActDeletion)
            if (ActDeletion.data.success) {
                toast.success('Post Deleted Successfully');
                Navigate('/');
            }
            else {
                toast.error('Failed to delete the post');
            }
        }
        catch (e) {
            toast.error('Not Authorized user');
            console.log(e.message);
        }
    }
    return (
        <div onClick={handleDeletion} className="text-nowrap  hover:bg-slate-200 w-full duration-200 rounded-lg pl-2 pt-1 -ml-3">Delete post</div>
    )
}

export default DeletePost