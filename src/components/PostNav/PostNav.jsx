import './PostNav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import arrow from '../../assets/baseline-arrow_drop_down-24px.png';
import groupIcon from '../../assets/baseline-group_add-24px.png';
const PostNav = () => {
    return (
        <div>
           <Container>
           <Navbar collapseOnSelect expand="lg" className="bg-body-white">
                <Container>
                    <Navbar.Brand href="#home">All Posts(32)</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Article</Nav.Link>
                        <Nav.Link href="#pricing">Event</Nav.Link>
                        <Nav.Link href="#pricing">Education</Nav.Link>
                        <Nav.Link href="#pricing">Job</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="write-post-btn" href="#deets">
                            <span>Write a Post</span>
                            <img src={arrow} alt="arrow"/>
                        </Nav.Link>
                        <Nav.Link className="join-group-btn" href="#memes">
                            <img src={groupIcon} alt="groupIcon" />
                            <span>Join Group</span>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            <hr />
            </Container> 
            
        </div>
    );
};

export default PostNav;