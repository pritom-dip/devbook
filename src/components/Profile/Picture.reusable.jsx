import { Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const coverPicbackground = (url) => ({
    background: `url(${url}) no-repeat center`,
});

export default function PictureReusableComponent({
    profile
}) {
    return (
        <Container
            className="cover-pic-section"
            style={coverPicbackground(profile.coverPic)}
        >
            <div className="profile-pic-section">
                <img src={profile.profilePic} alt={profile.name} />
                <Dropdown className="img-dropdown">
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                        <FontAwesomeIcon icon={faCamera} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/view">
                            <FontAwesomeIcon icon={faCamera} />
                                    View Profile Picture</Dropdown.Item>
                        <Dropdown.Item href="#/update">
                            <FontAwesomeIcon icon={faCamera} />
                                    Update Profile Picture</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <Dropdown className="cover-dropdown">
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                    <FontAwesomeIcon icon={faCamera} />
                            Change Cover Photo
                            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/view">
                        <FontAwesomeIcon icon={faCamera} />
                                View Profile Picture</Dropdown.Item>
                    <Dropdown.Item href="#/update">
                        <FontAwesomeIcon icon={faCamera} />
                                Update Profile Picture</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    )
}
