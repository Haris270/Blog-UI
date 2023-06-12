//import Message from './Message'
//import ListGroup from "./components/ListGroup";
import "./components/style.css";
import NavBar from "./components/NavBar";
// import Carousel from "./components/ImageSlide.tsx";
import ImageSlider from "./components/ImageSlider";

// import clock from "./components/black-300.png";
// import deer from "./components/Marcus-Aurelius-Quote.png";

// import deer from "./components/b";

function App() {
  return (
    <>
      <NavBar />

      {/* <div className="image-fader"> */}
      {/* <img className="image-slide" src={clock} alt="clock" />
      <img className="image-slide" src={deer} alt="deer" />
      <img className="image-slide" src={pen} alt="pen" /> */}
      <ImageSlider />

      {/* </div> */}
    </>
  );
}

export default App;
