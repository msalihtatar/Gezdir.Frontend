import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";
import Keywords from "../components/Keywords";
import CaptionResult from "../components/CaptionResult";
import { getImageCaption, getObjectDetection } from "../axios/gezdirAPI";
import TextToSpeech from "../components/TextToSpeech";
import '../css/chip.css'

type Props = {};

const Facilator = (props: Props) => {
    const [keywords, setKeywords] = React.useState([
        "Fire",
        "Volcano",
        "Traffic Light",
    ]);
    const [caption, setCaption] = React.useState<string | undefined>(" ");
    const [file, setFile] = React.useState({ changed: false, img: null });
    const [detection, setDetection] = React.useState<string[] | undefined>([]);
    const [lang, setLang] = React.useState<'en' | 'tr'>('en');

    const setFileHandler = (params: { changed: boolean; img: any }) => {
        setFile(params);
        fileUpload(params.img);
    };

    const fileUpload = (file: any) => {
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            setCaption(undefined);
            setDetection(undefined);
            var captionResult = getImageCaption(file.name);
            //console.log(captionResult)
            captionResult
                .then((data) => setCaption(data.data))
                .catch((ex) => console.log("Exception:", ex));
            var detectionResult = getObjectDetection(file.name);
            //console.log(detectionResult)
            detectionResult
                .then((data) => setDetection(data.data))
                .catch((ex) => console.log("Exception:", ex));
            return true;
        }
        return false;
    };
    const foundKeyword = keywords.filter((x) => detection?.includes(x.toLowerCase())).toString() ?? "";
    return (
        <Container>
            <Row className="d-flex justify-content-between pt-5">
                <Col xxl={8} lg={12} className="text-start">
                    <ImageUpload file={file} setFile={setFileHandler}></ImageUpload>
                </Col>
                <Col xxl={4}  lg={12} className="ps-2">
                    <Keywords filter={keywords} setFilter={setKeywords}></Keywords>
                    <div className="pt-5">
                        <TextToSpeech
                            lang={'en'}
                            text={
                                detection == undefined
                                    ? "Please wait for object detection for your keywords."
                                    : detection.length > 0
                                        ? foundKeyword.length > 0
                                            ? "We found " + foundKeyword + " in your keywords."
                                            : "Not found any match."
                                        : "Please upload an image"
                            }
                        >
                            <Button variant="success" size="lg">
                                {detection == undefined ? 
                                    <div className="spinner-border spinner-border-sm text-light" role="status">
                                    <span className="visually-hidden">[Loading]</span>
                                    </div>: 
                                    <i className="bi bi-patch-check-fill"></i>
                                }
                                <span className="ps-2">Check Keywords</span>
                            </Button>
                        </TextToSpeech>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-evenly pt-5">
                <Col md={12}>
                    <CaptionResult caption={caption}></CaptionResult>
                </Col>
            </Row>
        </Container>
    );
};

export default Facilator;
