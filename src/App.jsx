import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import DevContainer from "./components/DevContainer";
import NavBar from "./components/NavBar";
import SocialMedia from "./components/SocialMedia";
import MyStacks from "./components/MyStacks";
import WantToLearn from "./components/WantTolearn";
import Footer from "./components/Footer";
import PortiFolio from "./components/PortiFolio";

function App() {
  return (
      <div className="bg-white px-10 md:px-40 lg:px-60">
        <NavBar />
        <DevContainer />
        <SocialMedia />
        <MyStacks />
        <WantToLearn/>
        <PortiFolio/>
        
        {/*************************** Portfolio ***************************/}
         
      <Footer/>
      </div>
  );
}

export default App;
