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
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <h1>{desc[ImageIndex]}</h1>
      <img className="slider-img" src={urls[ImageIndex]} alt="" />
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
