import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Feature from "./components/feature/Feature";
import Gallery from "./components/gallery/Gallery";
import Purchase from "./components/purchase/Purchase";
import Footer from "./components/footer/Footer";
import Review from "./components/review/Review";

function App() {
  return (
    <main id="home">
      <Header />
      <Hero />
      <Feature />
      <Gallery />
      <Purchase />
      <Review />
      <Footer />
    </main>
  );
}

export default App;
