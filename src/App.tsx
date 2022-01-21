import "./App.css";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import image1 from "./assets/liq-1.png";
import image2 from "./assets/liq-2.png";
import image3 from "./assets/liq-3.png";
import image6 from "./assets/liq-6.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <NavBar />
        </div>
      </header>
      <section className="landing-page">
        <Content />
        <div className="container">
          <img src={image1} alt="" className="blob blob-1 hue-shift" />
          <img src={image2} alt="" className="blob blob-2 hue-shift" />
          <img src={image3} alt="" className="blob blob-3 hue-shift" />
          <img src={image6} alt="" className="blob blob-4 hue-shift" />
        </div>
      </section>
    </div>
  );
}

export default App;
