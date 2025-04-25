'use client';

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Toolbar, 
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ContactForm from './ContactForm';

const navItems = [
  { name: 'Características', href: '#features' }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mounted, setMounted] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  // Wait until the component is mounted on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenContactForm = () => {
    setContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setContactFormOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Club Colombiano De Juntas Directivas
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={item.href}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton 
            sx={{ textAlign: 'center' }} 
            onClick={handleOpenContactForm}
          >
            <ListItemText primary="Comenzar" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  // Server-side and client-side rendering synchronization
  if (!mounted) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position="fixed" 
          color="transparent" 
          elevation={0}
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderBottom: '1px solid #f0f0f0'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: 'bold' }}
              >
                Club Colombiano De Juntas Directivas
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0}
        sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          borderBottom: '1px solid #222'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            disableGutters
            sx={{ 
              height: 70, 
              py: 0.5 
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1, 
                fontWeight: 'bold',
                fontSize: { xs: '1rem', sm: '1.25rem' },
                letterSpacing: '-0.01em',
                color: '#fff'
              }}
            >
              Club Colombiano De Juntas Directivas
            </Typography>
            
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: '#fff' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex' }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.name} 
                    href={item.href}
                    sx={{ 
                      color: '#fff', 
                      mx: 1,
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#ccc',
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
                <Button 
                  variant="outlined" 
                  color="primary"
                  sx={{ 
                    ml: 2,
                    fontWeight: 600,
                    borderRadius: '4px',
                    textTransform: 'none',
                    px: 2,
                    borderColor: '#fff',
                    color: '#fff',
                    '&:hover': {
                      borderColor: '#ccc',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                  onClick={handleOpenContactForm}
                >
                  Comenzar
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />

      {/* Contact Form Dialog */}
      <ContactForm open={contactFormOpen} onClose={handleCloseContactForm} />
    </Box>
  );
} 