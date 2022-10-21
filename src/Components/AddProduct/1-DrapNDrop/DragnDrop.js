//-----------// CSS
import "./dragnDrop.scss";
//--------------// packages
import { useDropzone } from "react-dropzone";
import React from "react";

//--------------// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const addimage = <FontAwesomeIcon icon={faImage} />;

const DragnDrop = ({ setfiles, files }) => {
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
      // console.log(acceptedfiles);
    },
    maxFiles: 10,
    multiple: true,
    minSize: 0,
    maxSize: Infinity,
    noKeyboard: true,
    noDrag: true,
  });

  //------------// fonction pour supprimer un élément du tableau

  const removeFile = (file) => {
    // console.log(file);
    let newFiles = [...files];
    console.log(newFiles);
    newFiles.splice(newFiles.indexOf(file), 1);
    console.log(newFiles);
    setfiles(newFiles);
  };

  //------------// composant image

  const images = files.map((file) => {
    return (
      <div key={file.path} className="bloc-choosen-image">
        <img src={file.preview} id="image" alt="contenuvente" />
        <div
          className="trash"
          onClick={() => {
            removeFile(file);
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
        <input {...getInputProps()} id="addImage" />
        <label htmlFor="image" id="image-file">
          <div className="container-ajoutimage">{addimage}</div>
          <span>Ajouter des photos</span>
          <span>10 photos max</span>
        </label>
      </div>
      {images}
      <div className="addPhoto"></div>
    </div>
  );
};

export default DragnDrop;
