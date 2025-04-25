import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Features from '@/components/Features';
import BoardMembers from '@/components/BoardMembers';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box component="main">
      <Header />
      <Hero />
      <Clients />
      <BoardMembers />
      <Features />
      <Footer />
    </Box>
  );
}
