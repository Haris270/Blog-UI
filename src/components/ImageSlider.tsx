import { useState } from "react";
import { useEffect } from "react";
import clock from "./black-300.png";
import deer from "./Marcus-Aurelius-Quote.png";
import pen from "./CR7-Quote.png";

// const images = ["1", "2", "3"];
const images = [pen, deer, clock];
function ImageSlider() {
  //  let images = [{pen}, {deer}, {clock}];
  //   let images = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
    // console.log(imageIndex);
  }, []);
  console.log(imageIndex);
  return (
    <div className="image-slider">
      <img className="current-img" src={images[imageIndex]} alt="pic here" />
      {/* <h1>{images[imageIndex]}</h1> */}
    </div>
  );
}

export default ImageSlider;
