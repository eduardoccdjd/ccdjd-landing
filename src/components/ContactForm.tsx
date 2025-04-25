'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
  Typography,
  Alert,
  AlertTitle,
  IconButton,
  SelectChangeEvent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { PartnershipType } from '@/types';
import { submitContactForm } from '@/actions/formActions';

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  nombre: string;
  email: string;
  tipo: string;
  telefono: string;
  empresa?: string;
  sector?: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  tipo?: string;
  telefono?: string;
  empresa?: string;
  sector?: string;
}

export default function ContactForm({ open, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    tipo: '',
    telefono: '',
    empresa: '',
    sector: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Handle text input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  // Handle select input changes
  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  // Common function to update form data and clear errors
  const updateFormData = (name: string, value: unknown) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.nombre) {
      newErrors.nombre = 'Por favor, introduce tu nombre';
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Por favor, introduce tu email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor, introduce un email válido';
    }
    
    // Type validation
    if (!formData.tipo) {
      newErrors.tipo = 'Por favor, selecciona una opción';
    }
    
    // Phone validation
    if (!formData.telefono) {
      newErrors.telefono = 'Por favor, introduce tu número de teléfono';
    } else if (!/^\d{7,15}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Por favor, introduce un número de teléfono válido';
    }
    
    // Conditional validation based on type
    if (formData.tipo === 'empresa') {
      if (!formData.empresa) {
        newErrors.empresa = 'Por favor, introduce el nombre de tu empresa';
      }
      if (!formData.sector) {
        newErrors.sector = 'Por favor, selecciona el sector de tu empresa';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      // Map form data to the API format
      const partnershipType: PartnershipType = 
        formData.tipo === 'empresa' ? 'partnership' :
        formData.tipo === 'miembro' ? 'consultation' : 'information';
      
      try {
        // Use server action to submit form
        const result = await submitContactForm({
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono,
          type: partnershipType,
          company: formData.empresa,
          sector: formData.sector
        });
        
        if (result.success) {
          setSubmitted(true);
        } else {
          setSubmitError(result.message);
        }
      } catch (error) {
        setSubmitError('An unexpected error occurred');
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleClose = () => {
    // Reset form state when closing
    if (submitted) {
      setFormData({
        nombre: '',
        email: '',
        tipo: '',
        telefono: '',
        empresa: '',
        sector: '',
      });
      setErrors({});
    }
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 8px 40px rgba(255, 255, 255, 0.1)',
          backgroundColor: '#111',
          color: '#fff'
        }
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: '#fff',
        }}
      >
        <CloseIcon />
      </IconButton>

      {submitted ? (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Alert severity="success" 
            sx={{ 
              mb: 2, 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: '#fff',
              '.MuiAlert-icon': { color: '#fff' } 
            }}
          >
            <AlertTitle>¡Gracias por tu interés!</AlertTitle>
            Hemos recibido tu información y nos pondremos en contacto contigo pronto.
          </Alert>
          <Button 
            variant="outlined" 
            onClick={handleClose}
            sx={{ 
              mt: 2,
              color: '#fff',
              borderColor: '#fff',
              '&:hover': {
                borderColor: '#ccc',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Cerrar
          </Button>
        </Box>
      ) : (
        <form onSubmit={handleSubmit}>
          <DialogTitle sx={{ pb: 1, pt: 3, color: '#fff' }}>
            <Typography variant="h5" component="div" fontWeight={600}>
              Comienza tu proceso
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="#aaa" sx={{ mb: 2 }}>
              Completa el formulario para comenzar a impulsar el crecimiento de tu empresa o para unirte como miembro experto de juntas directivas.
            </Typography>
            <Box component="div" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="nombre"
                label="Nombre Completo"
                name="nombre"
                autoComplete="name"
                value={formData.nombre}
                onChange={handleInputChange}
                error={!!errors.nombre}
                helperText={errors.nombre}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <FormControl 
                fullWidth 
                margin="normal" 
                required
                error={!!errors.tipo}
              >
                <InputLabel id="tipo-label">¿Cómo te gustaría participar?</InputLabel>
                <Select
                  labelId="tipo-label"
                  id="tipo"
                  name="tipo"
                  value={formData.tipo}
                  label="¿Cómo te gustaría participar?"
                  onChange={handleSelectChange}
                >
                  <MenuItem value="empresa">Necesito ayuda para mi empresa</MenuItem>
                  <MenuItem value="miembro">Soy miembro de juntas directivas</MenuItem>
                </Select>
                {errors.tipo && <FormHelperText>{errors.tipo}</FormHelperText>}
              </FormControl>
              
              {/* Show company and sector fields only when tipo is empresa */}
              {formData.tipo === 'empresa' && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="empresa"
                    label="Nombre de la Empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    error={!!errors.empresa}
                    helperText={errors.empresa}
                  />
                  <FormControl
                    fullWidth
                    margin="normal"
                    required
                    error={!!errors.sector}
                  >
                    <InputLabel id="sector-label">Sector</InputLabel>
                    <Select
                      labelId="sector-label"
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      label="Sector"
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="tecnologia">Tecnología</MenuItem>
                      <MenuItem value="servicios">Servicios</MenuItem>
                      <MenuItem value="retail">Retail</MenuItem>
                      <MenuItem value="manufactura">Manufactura</MenuItem>
                      <MenuItem value="salud">Salud</MenuItem>
                      <MenuItem value="educacion">Educación</MenuItem>
                      <MenuItem value="otro">Otro</MenuItem>
                    </Select>
                    {errors.sector && <FormHelperText>{errors.sector}</FormHelperText>}
                  </FormControl>
                </>
              )}
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="telefono"
                label="Teléfono"
                name="telefono"
                autoComplete="tel"
                value={formData.telefono}
                onChange={handleInputChange}
                error={!!errors.telefono}
                helperText={errors.telefono}
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              disabled={isSubmitting}
              sx={{ 
                py: 1.5,
                backgroundColor: '#fff',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#ccc'
                }
              }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Información'}
            </Button>
          </DialogActions>
        </form>
      )}
      {submitError && (
        <Box sx={{ px: 3, pb: 2 }}>
          <Alert severity="error" sx={{ backgroundColor: 'rgba(255,0,0,0.2)', color: '#fff' }}>
            {submitError}
          </Alert>
        </Box>
      )}
    </Dialog>
  );
} 