import { Col, Container, Row } from "react-bootstrap";
import LeftSidebarComponent from "../components/Home/LeftSidebar/LeftSidebar.component";
import PostCardComponent from "../components/Home/PostCard/PostCard.component";
import RightSidebarComponent from "../components/Home/RightSidebar/RightSidebar.component";

export default function HomePage() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} md={3}>
                        <LeftSidebarComponent />
                    </Col>
                    <Col xs={12} md={6}>
                        <PostCardComponent />
                    </Col>
                    <Col xs={12} md={3}>
                        <RightSidebarComponent />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
