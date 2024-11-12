import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({$id, title, featuredImage}) => {
    console.log('this from Post card: ', $id);

    // Fallback image in case featuredImage is not available
    const imageSrc = featuredImage ? service.getFilePreview(featuredImage) : '/path/to/fallback-image.jpg';

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 p-4 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-full flex justify-center mb-4">
                    <img 
                        src={imageSrc} 
                        alt={title || 'Post image'} 
                        className="rounded-xl max-w-full h-auto"
                    />
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
