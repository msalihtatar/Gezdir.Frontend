import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';

type Props = {}

const Facilator = (props: Props) => {

  return (
    <Container>
      <Row>
        <Col md={8}>
          <ImageUpload file={"something"} setFile={()=>{}}></ImageUpload>
        </Col>
        <Col md={4}>
          
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>
  )
}

export default Facilator