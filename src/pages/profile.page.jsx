import { Col, Container, Row, Dropdown, Modal, NavDropdown, Nav, Navbar } from "react-bootstrap";
import "../components/Profile/Profile.css";
import ProfileLeftsidebarComponent from '../components/Profile/Leftbar/Leftsidebar.component';
import { useState } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";


const coverPicbackground = (url) => ({
    background: `url(${url}) no-repeat center`,
});

export default function ProfilePage(props) {
    const profileData = {
        _id: 454,
        profilePic:
            "https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-0/s526x395/80457198_1340940349409701_498615221682700288_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_eui2=AeH75QlC-Eqk3XXJbREnOnakcpILnst50Jxykguey3nQnJN2FmEVq7N8O_AB_8-DtuEflY6IbmUBsAACiiFfuo5H&_nc_ohc=PuWiaL68K1MAX9Sa65b&_nc_ht=scontent.fdac14-1.fna&tp=7&oh=9c30b2f432ac81f37fa26a9d3ebb0638&oe=60AB6912",
        coverPic:
            "https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/156968302_3062427804043765_5066970169712893228_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeF_vQZcbw1vbaDldDl2XHeemlgu_Z7R-42aWC79ntH7jbdzqDixPQkzzm13nK5nBuSYCFBRQ8LNkgFqsL89MpVW&_nc_ohc=13x3yP9WAIYAX8P1j-2&_nc_ht=scontent.fdac14-1.fna&oh=f8c4912221d213c9e068735746d28c18&oe=60AABB09",
        name: "Samayun MC",
        nickname: "সামু",
        bio: "I is a Third Person Singular Number. My crush IoT,PWA,Realtime Applications"
    }
    const [profile] = useState(profileData);
    let { url } = useRouteMatch();
    return (
        <>
            <Container fluid>
                <Container
                    className="cover-pic-section"
                    style={coverPicbackground(profile.coverPic)}
                >
                    <div className="profile-pic-section">
                        <img src={profile.profilePic} alt={profile.name} />
                        <Dropdown className="img-dropdown">
                            <Dropdown.Toggle variant="default" id="dropdown-basic">
                                IMG
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/view">View Profile Picture</Dropdown.Item>
                                <Dropdown.Item href="#/update">Update Profile Picture</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <Dropdown className="cover-dropdown">
                        <Dropdown.Toggle variant="default" id="dropdown-basic">
                            IMG Change Cover Photo
                            </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/view">View Profile Picture</Dropdown.Item>
                            <Dropdown.Item href="#/update">Update Profile Picture</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>

                <Container className="text-center py-4">
                    <h3>
                        <strong>Samayun Mc</strong> {profile.nickname && `(${profile.nickname})`}
                    </h3>
                    <p className="text-muted">
                        {profile.bio}
                    </p>
                    <button className="btn btn-info">Edit</button>
                    <hr />
                </Container>
                <Container >
                    <Navbar bg="transparent" expand="md">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link className="nav-item-custom active" to={`${url}/about`}>About</Link>
                                <Link className="nav-item-custom" to={`${url}/photos`}>Photos</Link>
                                <Link className="nav-item-custom" to={`${url}/friends`}> friends</Link>
                                <Link className="nav-item-custom" to={`${url}/about`}>About</Link>
                            </Nav>
                            <Nav className="mr-auto">
                                <NavDropdown title=":::" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"> view As</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Search Profile
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
            <Container className="py-4">
                <Row>
                    <Col xs={12} md={5}>
                        <ProfileLeftsidebarComponent />
                    </Col>
                    <Col xs={12} md={7}>
                        POStS came from reusable components
                    </Col>
                </Row>
            </Container>

            <Modal
                show={false}
                onHide={() => false}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Changge Image Here </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
