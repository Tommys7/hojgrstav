import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Realizations from "./Components/Realizations";
import Reviews from "./Components/Reviews";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Work from "./Components/Work";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Realizations />
      <Work />
      <Reviews />
      <Form />
      <Footer />
    </div>
  );
}
