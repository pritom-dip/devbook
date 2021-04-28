import { useState } from 'react';
import postData from '../../../postData/postData.json';

import './PostCard.css';
import PostListComponent from '../../Shared/Post/Posts.component';

export default function PostCardComponent() {

    const userPosts = postData;
    const [likeColor, setLikeColor] = useState('');

    // const [commentColor, setCommentColor] = useState('');
    // console.log(userPosts);

    //Handle React btn Color and Data manage
    const handleLike = (id) => {
        alert(id)
        setLikeColor(likeColor ? '' : 'red')
    }

    return (
        <div className="container mt-5 pt-5" style={{ backgroundColor: '#f0f2f5' }}>
            <PostListComponent
                data={userPosts}
                handleReaction={handleLike} />
        </div>
    )
}