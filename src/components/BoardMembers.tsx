'use client';

import { Box, Container, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';

// Sample board members data - replace with actual data later
const boardMembers = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    title: 'Experto en Finanzas',
    description: 'Ex-CFO de multinacional con 20 años de experiencia en reestructuración financiera y optimización de capital para empresas en crecimiento.',
    image: '/images/boardMembers.png'
  },
  {
    id: 2,
    name: 'María Fernández',
    title: 'Especialista en Marketing Digital',
    description: 'Lideró campañas digitales para marcas reconocidas, experta en estrategias de crecimiento y posicionamiento en mercados competitivos.',
    image: '/images/boardMembers.png'
  },
  {
    id: 3,
    name: 'Javier Morales',
    title: 'Consultor Tecnológico',
    description: 'Fundador de tres startups exitosas y asesor de transformación digital para empresas tradicionales que buscan modernizar sus operaciones.',
    image: '/images/boardMembers.png'
  },
  {
    id: 4,
    name: 'Ana Gómez',
    title: 'Estratega de Operaciones',
    description: 'Especializada en optimización de procesos y cadenas de suministro para empresas manufactureras y de servicios en América Latina.',
    image: '/images/boardMembers.png'
  },
  {
    id: 5,
    name: 'Diego Herrera',
    title: 'Experto en Expansión Internacional',
    description: 'Ha liderado la entrada de múltiples empresas colombianas a mercados internacionales, con enfoque en Estados Unidos y Europa.',
    image: '/images/boardMembers.png'
  }
];

export default function BoardMembers() {
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
      id="board-members"
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: '#000',
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
            Nuestros Miembros
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
            Contamos con expertos en diferentes áreas que aportan su experiencia y conocimiento para ayudar a tu empresa a superar desafíos.
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
            {boardMembers.map((member) => (
              <Card 
                key={member.id}
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
                  image={member.image}
                  alt={member.name}
                  sx={{ 
                    objectFit: 'contain',
                    backgroundColor: '#1a1a1a',
                    p: 2
                  }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ color: '#fff', mb: 0.5 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#ccc', mb: 1 }}>
                    {member.title}
                  </Typography>
                  <Typography variant="body2" color="#aaa">
                    {member.description}
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