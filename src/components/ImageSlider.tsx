import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import "./slider.css";

export function ImageSlider({ urls, hrefs, desc }: any) {
  const [ImageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex(index => {
        if (index === urls.length - 1) return 0
        return index + 1

    })
  }

  function showPrevtImage() {
    setImageIndex(index => {
        if (index === 0) return urls.length - 1
        return index - 1

    })
  }



  return (
    <div className="container">
      <div className="heading">
      <h1>My Portfolio</h1>
      <p>{desc[ImageIndex]}</p>
      <a target="_blank" href={hrefs[ImageIndex]}>Link to project</a>

      </div>
       {urls.map(url => (
      <img key={url[ImageIndex]} className="slider-img" src={url[ImageIndex]} alt="" />
       ))}
      <div>

      </div>
      <button onClick={showPrevtImage} className="img-btn" style={{left: "0",}}>
        <ArrowBigLeft />
      </button>
      <button onClick={showNextImage} className="img-btn" style={{right: "0",}}>
        <ArrowBigRight />
      </button>
    </div>
  );
}

export default ImageSlider;
