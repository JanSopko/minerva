import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar'
import ArticlesCarousel from './components/sections/ArticlesCarousel';
import { Pricing } from './components/sections/Pricing';
import { AboutUs } from './components/sections/AboutUs';
import { Footer } from './components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />  
      <ArticlesCarousel />
      {/* client section here */}
      <AboutUs />
      <Pricing />
      <Footer />
    </>
  );
}
