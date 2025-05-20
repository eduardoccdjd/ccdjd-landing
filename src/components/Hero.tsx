'use client';

import { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ContactForm from './ContactForm';

export default function Hero() {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const handleCloseContactForm = () => {
    setContactFormOpen(false);
  };

  return (
    <Box 
      sx={{ 
        bgcolor: '#000',
        backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        py: { xs: 8, md: 12 }, 
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 480 }}>
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom
                sx={{ 
                  mb: 3,
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                Impulsando el Crecimiento de PyMEs Colombianas
              </Typography>
              
              <Typography variant="h6" color="#aaa" sx={{ mb: 4 }}>
                Conectamos empresas con miembros de juntas directivas expertos 
                para superar retos de crecimiento en tecnología, marketing y más, 
                con análisis detallados y medición de impacto.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 480, ml: { md: 4 }, mt: { xs: 4, md: 0 } }}>
              <img 
                src="/images/board.png" 
                alt="Junta directiva de PyMEs Colombianas" 
                style={{ width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Contact Form Dialog */}
      <ContactForm open={contactFormOpen} onClose={handleCloseContactForm} />
    </Box>
  );
} 