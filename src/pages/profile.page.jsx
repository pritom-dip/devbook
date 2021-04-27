import { Col, Container, Row } from "react-bootstrap";
import ProfileLeftsidebarComponent from "../components/Profile/Leftbar/Leftsidebar.component";
import PostListComponent from "../components/Shared/Post/Posts.component";
import ProfileLayout from '../layout/Profile/Profile.layout';

export default function ProfilePage() {

    return (
        <ProfileLayout>
            <Container className="py-4">
                <Row>
                    <Col xs={12} md={5}>
                        <ProfileLeftsidebarComponent />
                    </Col>
                    <Col xs={12} md={7} className="m-0 p-0">
                        <PostListComponent
                        />
                    </Col>
                </Row>
            </Container>
        </ProfileLayout>
    )
}
