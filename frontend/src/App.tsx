import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Body from "./pages/Body"
import Photo from "./pages/Photo";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";

function App() {
 
  return (
    <>
        <Nav />
        <Header eventname="Event Name" state1="Organized by:" state2="Team CodeShack" />
        <Body date="21/2/24" time="1:30PM"/>
        <Photo />
        <Faq />
        <Footer eventname="Event name" venuetime="venue and time"/>
    </>
    );
}

export default App