'use client'
import About from "./component/About";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import Work from "./component/Work";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
    <NavBar />
    <Header />
    <About />
    <Services />
    <Work />
    <Contact />
    <Footer />
    </>
  );
}
