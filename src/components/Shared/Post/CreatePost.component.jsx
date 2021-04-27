
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesAlt, faVideo, faImage } from '@fortawesome/free-solid-svg-icons';
export default function CreatePostComponent() {
    return (
        <div>
            <input class="form-control status-form" type='text' placeholder="What's on your mind"></input>
            <div className="status-btn m-3 text-center">
                <button><FontAwesomeIcon icon={faHeadphonesAlt} size="lg" /> <span className="p-2">Live</span></button>
                <button><FontAwesomeIcon icon={faVideo} size="lg" /> <span className="p-2">Video</span></button>
                <button><FontAwesomeIcon icon={faImage} size="lg" /> <span className="p-2">Image</span></button>
            </div>
        </div>

    )
}
