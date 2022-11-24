//PACKAGE
import { useState } from "react";
//CSS
import "./imagesSlider.scss";
const ImagesSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log(slides);

  const arrowLeft = {
    color: "blue",
    fontSize: "40px",
    position: "absolute",
    width: "40px",
    border: "2px solid red",
  };

  return (
    <div className="container-carroussel">
      <div
        className="arrow-left"
        onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
      <div
        className="arrow-right"
        onClick={() =>
          currentIndex < slides.length - 1 && setCurrentIndex(currentIndex + 1)
        }
      >
        {" "}
        <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
      </div>

      <div
        className="carrousselIner"
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
      ></div>
      <div className="container-dot">
        {" "}
        {slides.map((slides, index) => {
          return (
            <div
              className="dot"
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              <ion-icon name="ellipse-outline"></ion-icon>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesSlider;
