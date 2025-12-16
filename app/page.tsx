import '../styles/globals.css';
import ThemeToggleButton from '../components/ThemeToggleButton';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Book from '@/sections/Book';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Book />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
