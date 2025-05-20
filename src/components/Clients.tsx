'use client';

import { Box, Container, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';

// Sample client data - replace with actual data later
const clients = [
  {
    id: 1,
    name: 'Divinamente',
    description: 'Divinamente Speakers S.A.S: Fundada en 2017 y con sede en Bogotá, se especializa en la organización de convenciones y eventos comerciales, conectando empresas con conferencistas y líderes para inspirar y transformar organizaciones.',
    image: '/images/divinamente.png'
  },
  {
    id: 2,
    name: 'Hornitos',
    description: 'Hornitos: Con más de 45 años de trayectoria desde su fundación en 1980, es una reconocida cadena de panaderías y pastelerías en Bogotá, que cuenta con 22 puntos de venta y una amplia variedad de productos de panadería, pastelería y platos a la carta.',
    image: '/images/hornitos.jpeg'
  },
  {
    id: 3,
    name: 'Santo Marketing',
    description: 'Santo Marketing S.A.S: Establecida en 2012 en Bogotá, es una agencia de publicidad que ofrece estrategias de marketing BTL, publicidad y branding para potenciar marcas en Colombia.',
    image: '/images/santo.jpeg'
  },
  {
    id: 4,
    name: 'Proxet',
    description: 'Proxet es una empresa de desarrollo de software que ofrece soluciones tecnológicas personalizadas, especializada en salud, fintech y análisis de datos.',
    image: '/images/proxet.png'
  },
  {
    id: 5,
    name: 'Whisker',
    description: 'Whisker es una empresa estadounidense especializada en tecnología para mascotas, reconocida por su producto estrella, el Litter-Robot, una caja de arena automática y autolimpiante para gatos. Fundada en 1999 por Brad Baxter, Whisker ha vendido más de un millón de unidades y continúa innovando en el cuidado inteligente de mascotas.',
    image: '/images/whisker.png'
  }
];

export default function Clients() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box 
      id="clients"
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: '#111',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, color: '#fff' }}
          >
            Nuestros Clientes
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            color="#aaa"
            sx={{ 
              maxWidth: 700,
              mx: 'auto',
              mb: 2,
            }}
          >
            Empresas que han transformado su crecimiento con nuestro apoyo estratégico y la experiencia de nuestros miembros.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <IconButton 
            onClick={() => scroll('left')} 
            sx={{ 
              position: 'absolute', 
              left: -20, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              zIndex: 2,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.8)',
              }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box
            ref={scrollContainerRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollbarWidth: 'none', // Firefox
              '&::-webkit-scrollbar': { display: 'none' }, // Chrome
              gap: 3,
              pb: 2,
              px: 2
            }}
          >
            {clients.map((client) => (
              <Card 
                key={client.id}
                sx={{ 
                  minWidth: 280,
                  maxWidth: 280,
                  backgroundColor: '#222',
                  borderRadius: 2,
                  flexShrink: 0,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 40px -12px rgba(255,255,255,0.1)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={client.image}
                  alt={client.name}
                  sx={{ 
                    objectFit: 'contain',
                    backgroundColor: '#1a1a1a',
                    p: 2
                  }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ color: '#fff', mb: 1 }}>
                    {client.name}
                  </Typography>
                  <Typography variant="body2" color="#aaa">
                    {client.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <IconButton 
            onClick={() => scroll('right')} 
            sx={{ 
              position: 'absolute', 
              right: -20, 
              top: '50%', 
              transform: 'translateY(-50%)', 
              zIndex: 2,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.8)',
              }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
} 