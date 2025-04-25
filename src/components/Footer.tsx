'use client';

import { Box, Container, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const footerLinks = [
  {
    title: 'Servicios',
    links: [
      { name: 'Análisis Empresarial', href: '#features' },
      { name: 'Conexión con Expertos', href: '#' },
      { name: 'Casos de Éxito', href: '#' },
      { name: 'Para Miembros de Juntas', href: '#' },
    ],
  },
  {
    title: 'Club',
    links: [
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Nuestros Expertos', href: '#' },
      { name: 'Eventos', href: '#' },
      { name: 'Contáctanos', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Términos de Servicio', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Código de Ética', href: '#' },
      { name: 'Responsabilidad', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#000',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Club Colombiano De Juntas Directivas
              </Typography>
              <Typography variant="body2" color="#aaa" sx={{ mb: 2 }}>
                Facilitamos el crecimiento de las PyMEs colombianas mediante la conexión estratégica con miembros de juntas directivas experimentados, quienes aportan soluciones efectivas a los retos empresariales.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton sx={{ color: 'white' }} aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }} aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }} aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }} aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          
          {footerLinks.map((category) => (
            <Grid item xs={12} sm={6} md={2.5} key={category.title}>
              <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                {category.title}
              </Typography>
              <Box>
                {category.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    underline="hover"
                    color="#aaa"
                    sx={{ 
                      display: 'block', 
                      mb: 1,
                      '&:hover': {
                        color: 'white',
                      } 
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        
        <Divider sx={{ mt: 6, mb: 4, borderColor: '#333' }} />
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="#aaa">
            © {new Date().getFullYear()} Club Colombiano De Juntas Directivas. Todos los derechos reservados.
          </Typography>
          <Box>
            <Link href="#" color="#aaa" sx={{ mr: 3 }}>
              Términos
            </Link>
            <Link href="#" color="#aaa" sx={{ mr: 3 }}>
              Privacidad
            </Link>
            <Link href="#" color="#aaa">
              Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 