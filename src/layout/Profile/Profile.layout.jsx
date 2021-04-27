import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrawPolygon } from "@fortawesome/free-solid-svg-icons";
import "../../components/Profile/Profile.css";
import { useState } from "react";

import { Link, useRouteMatch } from "react-router-dom";


import PictureReusableComponent from "../../components/Profile/Picture.reusable";
import BioReusableComponent from "../../components/Profile/Bio.reusable";

export default function ProfileLayout(props) {
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
    const tabIcon = <FontAwesomeIcon icon={faDrawPolygon} />
    return (
        <>
            <Container fluid className="bg-white">
                <PictureReusableComponent profile={profile} />

                <BioReusableComponent profile={profile} />
                <Container >
                    <Navbar expand="md">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="">
                                <Link className="nav-item-custom active" to={`${url}/about`}>About</Link>
                                <Link className="nav-item-custom" to={`${url}/photos`}>Photos</Link>
                                <Link className="nav-item-custom" to={`${url}/friends`}> Friends</Link>
                                <Link className="nav-item-custom" to={`${url}/posts`}>Posts</Link>
                            </Nav>
                            <Nav className="ms-auto text-dark" >

                                <NavDropdown
                                    title={tabIcon}
                                    className="text-dark"
                                    syule={{ color: '#000' }}
                                    id="basic-nav-dropdown">
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

            <Container fluid className="bg-light">
                {props.children}
            </Container>

        </>
    );
}
