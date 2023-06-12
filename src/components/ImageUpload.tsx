import React, { MouseEventHandler, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Button, Stack } from "react-bootstrap";
import AddImg from "../resources/AddImg.png";
import "../css/border.css";

const fileTypes = ["JPG", "PNG", "BMP", "JPEG"];
//npm i --save react-drag-drop-files
function ImageUpload({file,setFile} : {file:any, setFile:Function}) {
  const [tempUrl, setTempUrl] = useState<any>(null);
  const handleChange = (f:File) => {
    setFile({changed:true,img:f});
    setTempUrl(URL.createObjectURL(f));
  };
  const removeImg = () => {
    setFile({changed:false,img:null});
    setTempUrl(undefined);
  };
  
  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      children={ChildComponent(tempUrl ? tempUrl:file.img, removeImg)}
      hoverTitle="Drop Here"
      types={fileTypes}
      multiple={false}
    />
  );
}
const ChildComponent = (tempUrl: string, removeImg: MouseEventHandler) => (
  <>
    {tempUrl ? (
      <div
        style={{ height: "30rem", width:"50rem" }}
        className="border border-secondary dashed rounded"
      >
        <img
          src={tempUrl}
          alt=""
          style={{
            height: "100%",
            width: "20rem",
            objectFit: "contain",
          }}
        />
        <div className="d-grid mt-2">
          <Button variant="danger" size="sm" onClick={removeImg}>
            Change / Remove Image
          </Button>
        </div>
      </div>
    ) : (
      <div
        style={{ height: "30rem", width: "50rem" }}
        className="border border-secondary dashed rounded"
      >
        <Stack className="align-items-center justify-content-center h-100">
          <div className="text-center ">Drag the image of<br />the scene here to create caption.</div>
          <div className="text-center pt-4 pb-4">
            <img
              src={AddImg}
              alt="Add Icon"
              style={{ width: "4rem" }}
            ></img>
          </div>
          <div className="text-center ">Accepted Formats</div>
          <div className="text-center ">JPG, PNG, BMP</div>
          
        </Stack>
      </div>
    )}
  </>
);

export default ImageUpload;