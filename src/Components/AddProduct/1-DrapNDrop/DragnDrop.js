//-----------// CSS
import "./dragnDrop.scss";
//--------------// packages
// import { useDropzone } from "react-dropzone";
import React, { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const DragnDrop = ({ setImageUpload, imageUpload }) => {
  // const { setCreateOffer, currentUser } = useContext(UserContext);
  //add
  // console.log(imageUpload);

  // console.log(imageUpload);

  const [numberOfImages, setNumberOfImages] = useState(10);

  //LIMIT IMAGES
  const NumberOfImages = (longueur) => {
    let lengthArray = longueur;
    const Limit = 10;
    let counter = Limit - lengthArray;
    return counter;
  };

  //DELETE IMAGE
  const deleteImage = (url) => {
    let imageToDelete = [...imageUpload];
    setImageUpload(imageToDelete.filter((el) => el.url !== url));
  };

  //ADD IMAGE
  const handelFile = (e) => {
    e.preventDefault();
    const files = e.target.files;
    const newFiles = [];
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      newFiles.push({ url: URL.createObjectURL(files[i]) });
    }
    setImageUpload(newFiles);
  };

  return (
    <div className="bloc-photo">
      <input
        type="file"
        id="image"
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
        <span>{NumberOfImages(imageUpload.length)} photos restantes</span>
      </label>
      {imageUpload.length !== 0 ? (
        <>
          {imageUpload.map((src, index) => {
            return (
              <div key={index} className="bloc-choosen-image">
                <img src={src.url} alt="sport-watter" />
                <div className="trash" onClick={() => deleteImage(src.url)}>
                  <ion-icon
                    name="close-outline"
                    style={{ fontSize: "20px" }}
                  ></ion-icon>
                </div>
              </div>
            );
          })}
        </>
      ) : null}

      {/* <div className="addPhoto"></div> */}
    </div>
  );
};

export default DragnDrop;
