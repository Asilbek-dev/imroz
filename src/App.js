import About from "./Components/about";
import Brands from "./Components/brands";
import Footer from "./Components/footer";
import Header from "./Components/header";
import News from "./Components/news";
import OurCompany from "./Components/ourCompany";
import OurWork from "./Components/ourWork";
import People from "./Components/people";
import Service from "./Components/service";

function App() {
  return (
    <>
      <Header/>
      {/* Refreshingly Unique Company About. */}
      <About/>
      {/* Services provide for you. */}
      <Service/>
      {/* Some of our Recent Works */}
      <OurWork/>
      {/* Our Company Growth */}
      <OurCompany/>
      {/* Afifa Sampa The standard chunk of */}
      <People/>
      {/* Latest News */}
      <News/>
      {/* We worked with brands. */}
      <Brands/>
      <Footer/>
    </>
  );
}

export default App;
