import { useState } from 'react';
import postData from '../../../postData/postData.json';
import { Button, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHeart, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import './PostCard.css';

export default function PostCardComponent() {
    const userPosts = postData;
    const [likeColor, setLikeColor] = useState('');
    const [commentColor, setCommentColor] = useState('');
    console.log(userPosts);

    const handleLike = (id) => {
        console.log(id)
        setLikeColor(likeColor ? '' : 'red') 
    }

    return (
        <div className="container">
            <div>
                {
                    userPosts.map(post => 
                        <div className='m-5'>
                            <Card>
                                <Card.Body>
                                    <Card.Title> <Image className="userImg" src={post.userImg} rounded /> {post.name} </Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={post.postImg}  />
                                <div className=" btn-style">
                                    <button onClick={() => handleLike(post.id)}><FontAwesomeIcon icon={faHeart} size="lg" color={likeColor} /></button>
                                    {/* <button onClick={() => setCommentColor(commentColor ? '' : 'red') }><FontAwesomeIcon icon={faCommentAlt} size="lg" color={commentColor} /></button> */}
                                    {/* <button><FontAwesomeIcon icon={faShare} size="lg" /></button> */}
                                </div>
                            </Card>
                        </div>
                        )
                }
            </div>
        </div>
    )
}
