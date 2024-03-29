import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Expertise from "./components/Expertise/expertise";
import Portfolio from "./components/Portfolio/portfolio";
import Gallery from "./components/Gallery/gallery";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import BacktoTop from "./components/Back-To-Top/Back-To-Top";
function App() {
    return (
        <>
        <Navbar/>
        <Intro/>
        <Expertise/>
        <Portfolio/>
        <Gallery/>
        <Contact/>
        <BacktoTop/>
        <Footer/>
        </>
    );
}

export default App;