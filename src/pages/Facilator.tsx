import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';
import Keywords from '../components/Keywords';
import CaptionResult from '../components/CaptionResult';
import { getImageCaption } from '../axios/gezdirAPI';

type Props = {}

const Facilator = (props: Props) => {

  const [keywords, setKeywords] = React.useState(["Fire", "Volcano", "Traffic Light"]);
  const [caption, setCaption] = React.useState("");
  const [file, setFile] = React.useState({ changed: false, img: null });

  const setFileHandler = (params:{changed:boolean,img:any}) => {
    setFile(params);
    fileUpload(params.img);
  };

  const fileUpload = (file:any) => {
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        var result = getImageCaption(file.name);//"Bu bir deneme yayınıdır."; //postImg(formData).catch(e => console.log("Consumed."));//.then(res => { (console.log(res.status === 201 ? "Success" : res)) });
        
        result.then((data)=>console.log("Data:", data)).catch((ex)=>console.log("Exception:", ex));
        return true;
    }
    return false;
}

  return (
    <Container>
      <Row className='d-flex justify-content-between pt-5'>
        <Col md={8}>
          <ImageUpload file={file} setFile={setFileHandler}></ImageUpload>
        </Col>
        <Col md={4} className='ps-2' >
          <Keywords filter={keywords} setFilter={setKeywords}></Keywords>
        </Col>
      </Row>
      <Row className='d-flex justify-content-evenly pt-5 pr-2'>
        <Col md={12}>
        <CaptionResult caption={caption}></CaptionResult>
        </Col>
      </Row>
    </Container>
  )
}

export default Facilator