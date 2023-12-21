// Banner.js
import React from 'react';
import './Banner.css';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="banner-section">
      <Container>
        <Row>
          <Col>
            <div className="overlay">
              <h1>Computer Engineering</h1>
              <span>142,765 Computer Engineers follow this</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
