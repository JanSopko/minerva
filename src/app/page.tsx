import { Stack } from '@mui/material';
import Navbar from './components/navbar/Navbar'
import ArticlesCarousel from './components/sections/ArticlesCarousel';
import { Pricing } from './components/sections/pricing/Pricing';
import { AboutUs } from './components/sections/aboutUs/AboutUs';
import { Footer } from './components/sections/footer/Footer';
import { FAQSection } from './components/sections/FAQ/FaqSection';

export default function Home() {
  return (
    <>
      <Stack display="flex" flexDirection="column" sx={{ alignContent: 'center' }}>
        <Stack flex={1}>
          <Navbar />  
          <ArticlesCarousel />
          {/* client section here */}
          <AboutUs />
          <FAQSection />
          <Pricing />
        </Stack>
        <Footer />
      </Stack>
    </>
  );
}
