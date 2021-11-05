import './App.css';
import Navbar from "./Components/Navbar"
import Subnavbar from './Components/Subnavbar';
import SliderBox from "./Components/Sliderbox/SliderBox";
import CardRender from "./Components/CardsRender"
import LiveStreamCard from "./Components/Card/LiveStreamCard";
import BottomCardMain from "./Components/Card/BottomCardMain";
import Footer from "./Components/Footer";
import FormRender from "./Components/Form/FromRender";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Subnavbar />
      <SliderBox />
      <CardRender />
      <LiveStreamCard />
      <BottomCardMain />
      <FormRender/>
      <Footer />
    </div>
  );
}

export default App;
