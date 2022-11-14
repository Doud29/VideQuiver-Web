//-----------// CSS
import "./dragnDrop.scss";
//--------------// packages
// import { useDropzone } from "react-dropzone";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const DragnDrop = ({ imageUpload, setImageUpload }) => {
  const { setCreateOffer, currentUser } = useContext(UserContext);

  //DISPLAY-IMAGES
  const [displayImages, setDisplayImages] = useState([]);
  console.log(displayImages);
  //LIMIT IMAGES
  const NumberOfImages = (longueur) => {
    let lengthArray = longueur;
    const Limit = 10;
    let counter = Limit - lengthArray;
    return counter;
  };

  //DELETE IMAGE
  const deleteImage = (url) => {
    let imageToDelete = [...displayImages];
    setDisplayImages(imageToDelete.filter((el) => el !== url));
    setImageUpload(imageToDelete.filter((el) => el !== url));
  };

  //ADD IMAGE
  const handelFile = (e) => {
    e.preventDefault();
    const files = e.target.files;
    // console.log(files);
    if (!files) return;
    const newFiles = [];
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      newFiles.push(URL.createObjectURL(files[i]));
    }
    setDisplayImages(newFiles);
    setImageUpload(files);
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
        <span>{NumberOfImages(displayImages.length)} photos restantes</span>
      </label>

      {displayImages.length !== 0 ? (
        <>
          {displayImages.map((src, index) => {
            return (
              <div key={index} className="bloc-choosen-image">
                {src && (
                  <>
                    <img src={src} alt="sport-watter" />
                    <div className="trash" onClick={() => deleteImage(src)}>
                      <ion-icon
                        name="close-outline"
                        style={{ fontSize: "20px" }}
                      ></ion-icon>
                    </div>
                  </>
                )}
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
