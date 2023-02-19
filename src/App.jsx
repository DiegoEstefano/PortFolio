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
      <WantToLearn />
      <PortiFolio />
      <Footer />
    </div>
  );
}

export default App;
