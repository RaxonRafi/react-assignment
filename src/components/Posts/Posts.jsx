import './Posts.css'
import {Container,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import postImg1 from '../../assets/Rectangle 5.png'
import author1 from '../../assets/Rectangle 3 (3).png'
import author2 from '../../assets/Rectangle 3 (2).png'
import postImg2 from '../../assets/Rectangle 5 (1).png'
import viewBtn from '../../assets/visibility_24px.png'
import sharebtn from '../../assets/baseline-share-24px.png'
import threedot from '../../assets/baseline-more_vert-24px.png'
const Posts = () => {
    return (
        <div className="posts">
            <Container>
                <Row>
                    <Col md={8}>

                    <Card>
                        <Card.Img variant="top" src={postImg1} />
                        <Card.Body>
                            <Card.Title className="artical-head">✍️ Article</Card.Title>
                            <Card.Text>
                             <div className="d-flex justify-content-between">
                                <h4 className="artical-title">What if famous brands had regular fonts? Meet <br/> RegulaBrands!</h4>
                                <img height={30} src={threedot} alt="threedot" />
                            </div>   
                            
                            <span className='article-text'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</span>
                            </Card.Text>
                            <div className="article-details">
                                <div className='author'>
                                    <img src={author1} alt="authorImg" />
                                    <span>Sarthak Kamra</span>
                                </div>
                                <div className='view-share'>
                                    <img className="viewIcon" src={viewBtn} alt="authorImg" />
                                    <span className="view-num">1.4k views</span>
                                    <div className='shareIcon'>
                                        <img src={sharebtn}  />
                                    </div>
                                </div>

                            </div>
                          
                        </Card.Body>
                        </Card>
                    <Card className="mt-5">
                        <Card.Img variant="top" src={postImg2} />
                        <Card.Body>
                            <Card.Title className="artical-head">🔬️ Education</Card.Title>
                            <Card.Text>
                             <div className="d-flex justify-content-between">
                                <h4 className="artical-title">Tax Benefits for Investment under National Pension <br/> Scheme launched by Government</h4>
                                <img height={30} src={threedot} alt="threedot" />
                            </div>   
                            
                            <span className='article-text'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</span>
                            </Card.Text>
                            <div className="article-details">
                                <div className='author'>
                                    <img src={author2} alt="authorImg" />
                                    <span>Sarah West</span>
                                </div>
                                <div className='view-share'>
                                    <img className="viewIcon" src={viewBtn} alt="authorImg" />
                                    <span className="view-num">1.4k views</span>
                                    <div className='shareIcon'>
                                        <img src={sharebtn}  />
                                    </div>
                                </div>

                            </div>
                          
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    2
                    </Col>
                </Row>

            </Container>
            
        </div>
    );
};

export default Posts;