import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CreateComment from './CreateComment';
import axios from 'axios';
function CommentsModal({postId}) {
  let [comments,setComments]= useState([]);
  const showComments = async()=>{
    let id = postId;
    try{

        let postComments = await axios.get(`http://localhost:4000/post/comments/${id}`);
        if(postComments.data.success){
          handleClose();
            setComments(postComments.data.comments);
        }
        else{
            console.log('No Post Founded');
        }
    }
    catch(e){
        console.log(e.message);
    }
  }
  useEffect(()=>{
    showComments();
  },[postId])
  const handleClose=()=>{
    document.getElementById('my_modal_5').close();
  }
  return (
    <>
<dialog id="my_modal_5" className="modal pr-72 cursor-auto">
  <div className="modal-box h-full w-[50rem] relative">
    <div className='absolute top-2 text-xl font-bold cursor-pointer left-3' onClick={handleClose}>X</div>
      <div className='h-3/4 w-full overflow-auto'>
      {
      comments.length>0 ?  comments.map((singleComment)=>{
        const formattedDate = new Date(singleComment.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
      });
            return (
                <>
                <div key={singleComment.owner._id} className="creator overflow-x-auto">
                            <div className="avatar h-fit cursor-pointer w-full bg-cyan-50">
                                <div className="ml-5 mt-5 min-w-10 h-10 rounded-full opacity-85 hover:opacity-100 duration-200">
                                    <img src={singleComment.owner ? singleComment.owner.image :'https://img.freepik.com/premium-photo/little-cute-boy-with-diamod-her-hands_1057389-81291.jpg?w=740'}/>
                                </div>
                                <span className='mt-5 ml-2 cursor-pointer'>
                                    <p className='flex gap-40'>
                                        <Link  className='hover:underline text-nowrap'>{singleComment.owner ? 
                                        singleComment.owner.name : 'Anoynmous'}</Link>
                                        <span className='text-xs -ml-32 text-nowrap'>{
                                          formattedDate
                                          }</span>
                                    </p>
                                    <p className='ml-2 pr-4 font-semibold mt-4 pb-3 text-black'>
                                        {
                                            singleComment.text ? singleComment.text :" This is my Comment on this PostThis is my Comment on this Post This is my Comment on this PostThis is my Comment on this PostThis is my Comment on this Post."
                                        }
                                        
                                    </p>
                                </span>
                            </div>
                            <div className="mt-2 w-full h-px bg-gray-300"></div>
                        </div>

                </>
            )
        }) : <>
        <div className='flex justify-between flex-col items-center text-2xl font-bold h-3/4 w-full overflow-auto'>
           <div>
            <img className='max-w-80' src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?t=st=1728815530~exp=1728819130~hmac=38af6817adb62d9b3c8ddc68ae711ecc25d6249c1cfa1bb2b7360408c788df39&w=740" alt="404_Image" />
            </div>
            <div className="right">
            No Comments For now
              </div>
        </div>
        </>
      }
      </div>
      <CreateComment postId={postId}/>
  </div>
</dialog>
    </>
  )
}

export default CommentsModal