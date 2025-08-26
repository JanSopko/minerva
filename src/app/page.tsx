import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/navbar/Navbar'
import ArticlesCarousel from './components/sections/ArticlesCarousel';
import { Pricing } from './components/sections/Pricing';
import { AboutUs } from './components/sections/AboutUs';
import { Footer } from './components/sections/Footer';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <Stack display="flex" flexDirection="column">
      <Navbar />  
      <ArticlesCarousel />
      {/* client section here */}
      <AboutUs />
      <Pricing />
      <Footer />
    </Stack>
  );
}
