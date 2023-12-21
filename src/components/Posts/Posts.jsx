import './Posts.css'
import {Container,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import postImg1 from '../../assets/Rectangle 5.png'
import author1 from '../../assets/Rectangle 3 (3).png'
import author2 from '../../assets/Rectangle 3 (2).png'
import author3 from '../../assets/Rectangle 3.png'
import author4 from '../../assets/Rectangle 3 (1).png'
import postImg2 from '../../assets/Rectangle 5 (1).png'
import postImg3 from '../../assets/Rectangle 5 (2).png'
import viewBtn from '../../assets/visibility_24px.png'
import sharebtn from '../../assets/baseline-share-24px.png'
import threedot from '../../assets/baseline-more_vert-24px.png'
import date1 from '../../assets/baseline-today-24px.png'
import location from '../../assets/outline-location_on-24px.png'
import work from '../../assets/outline-work_outline-24px.png'
import edit from '../../assets/baseline-edit-24px.png'
import error from '../../assets/baseline-error_outline-24px.png'
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
                    <Card className="mt-5">
                        <Card.Img variant="top" src={postImg3} />
                        <Card.Body>
                            <Card.Title className="artical-head">🗓️ Meetup</Card.Title>
                            <Card.Text>
                             <div className="d-flex justify-content-between">
                                <h4 className="artical-title">Finance & Investment Elite Social Mixer @Lujiazui</h4>
                                <img height={30} src={threedot} alt="threedot" />
                            </div>
                            <div className="date-location">
                                <div className='date'>
                                    <img src={date1} alt="" />
                                    <span>Fri, 12 Oct, 2018</span>
                                </div>
                                <div className='location'>
                                    <img src={location} alt="" />
                                    <span>Ahmedabad, India</span>
                                </div>
                            </div>   
                            <div className="visit-btn">
                                <span>Visit Website</span>
                            </div>   
                            
                            <span className='article-text'></span>
                            </Card.Text>
                            <div className="article-details">
                                <div className='author'>
                                    <img src={author3} alt="authorImg" />
                                    <span>Ronal Jones</span>
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
                       
                        <Card.Body>
                            <Card.Title className="artical-head">💼️ Job</Card.Title>
                            <Card.Text>
                             <div className="d-flex justify-content-between">
                                <h4 className="artical-title">Software Developer</h4>
                                <img height={30} src={threedot} alt="threedot" />
                            </div>
                            <div className="date-location">
                                <div className='date'>
                                    <img src={work} alt="" />
                                    <span>Innovaccer Analytics Private Ltd.</span>
                                </div>
                                <div className='location'>
                                    <img src={location} alt="" />
                                    <span>Noida, India</span>
                                </div>
                            </div>   
                            <div className="visit-btn2">
                                <span>Apply on Timesjobs</span>
                            </div>   
                            
                            <span className='article-text'></span>
                            </Card.Text>
                            <div className="article-details">
                                <div className='author'>
                                    <img src={author3} alt="authorImg" />
                                    <span>Ronal Jones</span>
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
                       
                        <Card.Body>
                            <div className="article-details">
                                <div className='author'>
                                    <img src={author4} alt="authorImg" />
                                    <span>Joseph Gray</span>
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
                        <Container>
                            <div className='sidebar'>
                                <div className="locItem">
                                    <img src={location} alt="" />
                                    <span>Noida, India</span> 
                                </div>
                                <div>
                                    <img src={edit} />
                                </div>
                                
                            </div>
                            <hr />

                            <div className="error-content">
                               <img src={error} alt="" />
                                <span>Your location will help us serve better <br/> and extend a personalised experience.</span>
                            </div>
                        </Container>
   
                    </Col>
                </Row>

            </Container>
            
        </div>
    );
};

export default Posts;