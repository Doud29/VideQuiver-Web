//-----------// CSS
import "./dragnDrop.scss";
//--------------// packages
import { useDropzone } from "react-dropzone";
import React, { useState } from "react";

//--------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
const addimage = <FontAwesomeIcon icon={faImage} />;

const DragnDrop = () => {
  //---------------------------------------//
  //----// State récupérer les files //----//
  //---------------------------------------//

  //--------// On définie un tableau tableau vide dans lequel on viendra récupérer nos fichiers déposer

  const [files, setfiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    //on accept seulement Jpeg/png
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    onDrop: (acceptedfiles) => {
      setfiles(
        acceptedfiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      console.log(acceptedfiles);
    },
    maxFiles: 10,
    multiple: true,
    minSize: 0,
    maxSize: Infinity,
    noKeyboard: true,
    noDrag: true,
  });

  //------------// fonction pour supprimer un élément du tableau

  const deleteFile = (key, arr) => {
    let ImageName = key;
    console.log(ImageName);
    let newArray = [];
    newArray = [...arr];

    for (let i = 0; i < arr.length; i++) {
      if (newArray[i].key === ImageName) {
        console.log("trouvé");
      } else {
        console.log("pas trouvé");
      }
    }
  };

  //------------// composant image

  const images = files.map((index) => {
    return (
      <div key={index.name} className="bloc-choosen-image">
        <img src={index.preview} id="image" alt="contenuvente" />
        <div
          className="trash"
          onClick={() => {
            deleteFile(index.name, images);
          }}
        >
          <ion-icon
            style={{ fontSize: "20px" }}
            name="trash-outline"
          ></ion-icon>
        </div>
      </div>
    );
  });

  return (
    <div className="bloc-photo">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <label htmlFor="image" id="image-file">
          <div className="container-ajoutimage">{addimage}</div>
          <p>Ajouter des photos</p>
        </label>
      </div>
      {images}
    </div>
  );
};

export default DragnDrop;

/* <div className="bloc-photo">
              <input
                type="file"
                onChange={(e) => setselectFileState(e.target.files[0])}
                name="image"
                id="image"
                webkitdirectory="true"
                multiple
              />
              <label htmlFor="image" id="image-file">
                <div className="container-ajoutimage">{addimage}</div>
                <p>Ajouter des photos</p>
              </label>
              <img
                // src={`/${selectFileState.webkitdirectory}`}
                alt="selection"
                id="image"
              />
            </div> */
