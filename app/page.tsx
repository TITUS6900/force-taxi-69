import Header from "./components/Header";
import Hero from "./components/Hero";
import Syndicat from "./components/Syndicat";
import Avantages from "./components/Avantages";
import Adherer from "./components/Adherer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Syndicat />
        <Avantages />
        <Adherer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
