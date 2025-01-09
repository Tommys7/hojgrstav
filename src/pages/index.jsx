import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Realizations from "./Components/Realizations";
import Reviews from "./Components/Reviews";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Work from "./Components/Work";
import Announcement from "./Components/Announcement";

const Index = () => {
    return <div>
      {/* <Announcement/> */}
      <Header />
      <Hero />
      <Realizations />
      <Work />
      {/* <Reviews /> */}
      <Form />
      <Footer />
    </div>
};
export default Index;