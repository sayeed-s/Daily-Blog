import React from 'react';
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

    // console.log("featuredImage:", featuredImage);
    // console.log("Image URL:", appwriteService.getFileView(featuredImage));

    return (
       <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full h-48 justify-center mb-4 overflow-hidden'>
                <img src={appwriteService.getFileView(featuredImage)} alt={title} className='object-cover aspect-square'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
       </Link>
    );
}

export default PostCard;