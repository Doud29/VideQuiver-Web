//-----------// CSS
import "./dragnDrop.scss";
//--------------// packages
// import { useDropzone } from "react-dropzone";
import React from "react";
import { useState } from "react";

const DragnDrop = () => {
  //----// Add Photos
  const [imageUpload, setImageUpload] = useState(null);

  //add
  const handelFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageUpload(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="bloc-photo">
      <input
        type="file"
        id="addImage"
        multiple
        onChange={handelFile}
        accept="image/png, image/jpeg"
      />
      <label htmlFor="image" id="image-file">
        <ion-icon
          style={{ fontSize: "60px", marginBottom: "15px", color: "#508ae2" }}
          name="images-outline"
        ></ion-icon>
        <span>Ajouter des photos</span>
        <span>10 photos max</span>
      </label>
      {imageUpload !== null && (
        <div className="bloc-choosen-image">
          <img src={imageUpload} alt="" />
          <div
            className="trash"
            onClick={() => {
              setImageUpload(null);
            }}
          >
            <ion-icon
              style={{ fontSize: "20px" }}
              name="trash-outline"
            ></ion-icon>
          </div>
        </div>
      )}

      <div className="addPhoto"></div>
    </div>
  );
};

export default DragnDrop;
