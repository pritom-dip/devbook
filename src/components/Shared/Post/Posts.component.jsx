import { Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './PostCard.css';
import CreatePostComponent from './CreatePost.component';

export default function PostListComponent(props) {

    return (
        <div className=" pt-5" style={{ backgroundColor: '#f0f2f5' }}>
            {/* Facebook Status Form */}

            <CreatePostComponent />
            {/* Facebook Post Showing */}

            {
                props.data && props.data.length > 0 ? props.data.map(post =>

                    <Card>
                        <Card.Body>
                            <Card.Title> <Image className="userImg" src={post.userImg} rounded /> {post.name} </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                    </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={post.postImg} />
                        <div className=" btn-style">
                            <button onClick={() => props.handleReaction(post.id)}><FontAwesomeIcon icon={faHeart} size="lg" color={"red"} /></button>
                            {/* <button onClick={() => setCommentColor(commentColor ? '' : 'red') }><FontAwesomeIcon icon={faCommentAlt} size="lg" color={commentColor} /></button> */}
                            {/* <button><FontAwesomeIcon icon={faShare} size="lg" /></button> */}
                        </div>
                    </Card>

                ) : (
                    <Card className="p-5">
                        No Posts Found
                    </Card>
                )
            }
        </div>
    )
}
