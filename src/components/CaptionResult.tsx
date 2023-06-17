import React from "react";
import { Button, Card } from "react-bootstrap";
import { ColorRing } from "react-loader-spinner";
import TextToSpeech from "./TextToSpeech";

type Props = { caption: string | undefined };

const CaptionResult = (props: Props) => {
  return (
    <Card style={{ borderRadius:'.75rem',overflow:'clip'}}>
      <Card.Body style={{minHeight:"10rem"}}>
      <TextToSpeech text={props.caption===" " ? ("Please upload an image.") : (props.caption ?? ("Please wait."))} lang={'en'}>
        <Button variant="warning" size="lg" style={{position:"absolute", top:0, right:0, width:"15rem",borderRadius:0,borderBottomLeftRadius:'.5rem'}}>
        <i className="bi bi-volume-up-fill pe-2"></i>
          Describe the Image 
        </Button>
        </TextToSpeech>
        {props.caption ? (
          <> {props.caption}</>
        ) : (
          <ColorRing
            visible={true}
            height="160"
            width="160"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default CaptionResult;
