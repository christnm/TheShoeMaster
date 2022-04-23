import React, { useState } from "react";
import {Image, Button} from 'react-bootstrap'

const PicUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <Image alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)}></Image>
        <br />
        <Button onClick={()=>setSelectedImage(null)}>Remove</Button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default PicUpload;