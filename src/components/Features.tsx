'use client';

import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupsIcon from '@mui/icons-material/Groups';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BarChartIcon from '@mui/icons-material/BarChart';

const features = [
  {
    icon: <AnalyticsIcon fontSize="large" sx={{ color: '#fff' }} />,
    title: 'Análisis Detallado',
    description: 'Realizamos un diagnóstico profundo de tu empresa para identificar con precisión los retos principales que enfrentas para crecer.',
  },
  {
    icon: <GroupsIcon fontSize="large" sx={{ color: '#fff' }} />,
    title: 'Conexión Estratégica',
    description: 'Te conectamos con miembros de juntas directivas que cuentan con experiencia específica en las áreas donde necesitas impulso.',
  },
  {
    icon: <MonitorHeartIcon fontSize="large" sx={{ color: '#fff' }} />,
    title: 'Monitoreo Continuo',
    description: 'Hacemos seguimiento de todo el proceso de colaboración, asegurando que se cumplan los objetivos establecidos.',
  },
  {
    icon: <BarChartIcon fontSize="large" sx={{ color: '#fff' }} />,
    title: 'Medición de Impacto',
    description: 'Medimos y presentamos datos concretos sobre el impacto generado, permitiéndote ver el retorno de la inversión.',
  },
];

export default function Features() {
  return (
    <Box 
      id="features"
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
            Nuestro Proceso
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
            Ayudamos a las PyMEs colombianas a superar sus barreras de crecimiento conectándolas con la experiencia adecuada en el momento preciso.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  backgroundColor: '#111',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 70px -12.125px rgba(255,255,255,0.1)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#fff' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="#aaa">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 