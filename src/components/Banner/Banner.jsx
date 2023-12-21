import './Banner.css';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="banner-section">
      <Container>
        <Row>
          <Col>
            <div className="overlay">
              <div className="text-div">
                <h1>Computer Engineering</h1>
                <span>142,765 Computer Engineers follow this</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
