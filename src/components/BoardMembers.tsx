'use client';

import { Box, Container, Typography, Card, CardContent, CardMedia, IconButton, Dialog } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';

interface BoardMember {
  id: number;
  name: string;
  title: string;
  shortDescription: string;
  image: string;
  fullDescription: string;
}

// Replace boardMembers array with real data (short description for card, full for modal)
const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: 'David Parra',
    title: 'Miembro del Club Colombiano de Juntas Directivas',
    shortDescription: 'Ejecutivo con más de 15 años liderando empresas familiares, actualmente Gerente General de Hornitos.',
    image: '/images/david.png',
    fullDescription: `David Parra es un ejecutivo con más de 15 años de experiencia liderando empresas familiares desde un enfoque de crecimiento estructurado, escalabilidad comercial y gobierno corporativo efectivo. Actualmente se desempeña como Gerente General de Hornitos, una de las empresas de panadería y pastelería más importantes de Bogotá, con más de 20 puntos de venta y una operación centralizada de alto rendimiento.\n\nBajo su liderazgo, Hornitos ha duplicado sus ventas en cinco años mediante la implementación de modelos de negocio eficientes, planeación estratégica, formalización de procesos y consolidación de equipos de alto desempeño. Su gestión ha sido clave para transformar una empresa familiar en una organización sólida y sostenible.\n\nDavid es especialista en marketing estratégico del CESA y cuenta con formación ejecutiva en desarrollo directivo por INALDE. Además, es empresario en el sector de alimentos con Helados Clemente, lo que refuerza su visión integral sobre retail, producto, experiencia de cliente y escalamiento empresarial.\n\nDesde el Club Colombiano de Juntas Directivas, David acompaña a organizaciones en procesos de fortalecimiento de la gobernanza, crecimiento comercial y consolidación de estructuras corporativas alineadas con propósito, personas y resultados sostenibles.\n\nEjes estratégicos de aporte para juntas directivas – David Parra\n\nGobierno corporativo en empresas de familia\nAcompañamiento en la formalización de juntas, protocolo de familia y mecanismos de sucesión profesional.\n\nCrecimiento y escalabilidad del modelo de negocio\nDiseño de estrategias para expansión orgánica y comercial en mercados competitivos, con sostenibilidad financiera.\n\nGestión de la empresa con visión integral\nEnlace entre visión estratégica, operaciones, marketing y cultura empresarial para mejorar la ejecución directiva.\n\nPlaneación estratégica centrada en el propósito\nConstrucción de hojas de ruta realistas y alineadas con el ADN corporativo, integrando equipos y procesos.\n\nImplementación de procesos organizacionales clave\nMetodología para estructurar áreas críticas (ventas, operaciones, logística, talento) como base de la sostenibilidad empresarial.\n\nTransformación de retail y experiencia de cliente\nAporte desde el conocimiento operativo para empresas con puntos de venta físicos y alto contacto con consumidores.`
  },
  {
    id: 2,
    name: 'María Clara Villegas',
    title: 'Miembro del Club Colombiano de Juntas Directivas',
    shortDescription: 'Líder en bienestar corporativo, autora y experta en felicidad organizacional y sostenibilidad.',
    image: '/images/maria.png',
    fullDescription: `María Clara Villegas es una líder en bienestar corporativo, con una trayectoria ejecutiva que incluye cargos de vicepresidencia en multinacionales y una profunda transformación personal que la llevó a especializarse en felicidad organizacional como palanca estratégica de sostenibilidad y rendimiento.\n\nAutora del libro "La gente feliz es más exitosa" (Editorial Planeta), ha convertido su experiencia vital en un modelo aplicable para organizaciones que buscan mejorar su cultura, atraer y retener talento, e incrementar la productividad desde el bienestar integral. Su enfoque conecta indicadores de salud emocional con resultados de negocio.\n\nEn el Club Colombiano de Juntas Directivas, María Clara acompaña a altos ejecutivos y miembros de junta en la toma de decisiones que impactan la cultura organizacional, la experiencia del colaborador y la capacidad de adaptación en entornos de alta presión. Su aporte se centra en construir organizaciones emocionalmente sostenibles y con propósito claro.\n\nEjes estratégicos de aporte para juntas directivas – María Clara Villegas\n\nBienestar Corporativo Estratégico\nDiseño e implementación de modelos de bienestar organizacional como ventaja competitiva sostenible, alineados con los objetivos corporativos.\n\nCultura Organizacional y Clima Laboral\nDiagnóstico y transformación cultural para entornos de alto rendimiento, con énfasis en liderazgo positivo, propósito compartido y gestión emocional.\n\nGestión del Talento Humano desde el Ser\nAcompañamiento a juntas en la definición de políticas y estrategias centradas en el ser humano, para atraer, retener y fidelizar talento clave.\n\nTransformación desde el Propósito\nFacilitación de procesos para redefinir el propósito organizacional y su alineación con los intereses de los grupos de interés internos y externos.\n\nLiderazgo de Alta Conciencia\nEntrenamiento y mentoring para directivos que deseen integrar estilos de liderazgo más humanos, conscientes y resilientes.\n\nGobierno Corporativo con Perspectiva Humana\nAcompañamiento a juntas para integrar indicadores de bienestar, cultura y sostenibilidad emocional en el análisis estratégico.`
  },
  {
    id: 3,
    name: 'Fernando Enrique Plata',
    title: 'Miembro del Club Colombiano de Juntas Directivas',
    shortDescription: 'Estratega organizacional, autor y conferencista, experto en liderazgo y transformación cultural.',
    image: '/images/fernando.png',
    fullDescription: `Fernando Enrique Plata es un estratega organizacional, autor y conferencista, con más de dos décadas de experiencia liderando equipos multiculturales en América Latina. Ingeniero de Sistemas de la Universidad de los Andes y especialista en Gerencia Estratégica de la Universidad de La Sabana, ha dedicado su trayectoria a fortalecer la capacidad de liderazgo de las organizaciones desde el autoconocimiento, el propósito y la inteligencia emocional aplicada.\n\nEs autor del libro "Domesticar el Elefante" (Penguin Random House), una obra de referencia en la gestión del cambio personal y organizacional. A través de su metodología, Fernando ayuda a líderes y juntas directivas a identificar las narrativas inconscientes que frenan el crecimiento, transformándolas en herramientas de evolución y bienestar estratégico.\n\nCon certificaciones en Psicología Positiva, Ciencia de la Felicidad y Coaching Ontológico, Fernando diseña e implementa rutas de transformación cultural alineadas con los objetivos de negocio. Su enfoque combina pensamiento estratégico con herramientas humanas que potencian la toma de decisiones en entornos complejos.\n\nDesde el Club Colombiano de Juntas Directivas, acompaña a gobiernos corporativos en la adopción de modelos de liderazgo consciente, cultura de bienestar y sostenibilidad emocional como pilares para fortalecer los resultados a largo plazo.\n\nEjes estratégicos de aporte para juntas directivas – Fernando Enrique Plata\n\nTransformación Cultural con Propósito\nDiseño de entornos que promueven la resiliencia, colaboración y compromiso desde la dirección superior.\n\nLiderazgo Consciente y Autenticidad Directiva\nFormación de líderes de junta capaces de alinear visión estratégica con coherencia emocional y ética.\n\nGestión del Cambio y Adaptabilidad Organizacional\nIntervenciones que abordan los obstáculos internos al cambio, fortaleciendo la agilidad institucional.\n\nGobierno Corporativo desde la Inteligencia Emocional\nIntegración de herramientas humanas en el análisis estratégico para decisiones más integrales y sostenibles.\n\nEstrategias de Bienestar con Impacto en KPIs\nModelos que demuestran cómo la felicidad organizacional puede mejorar los indicadores clave de desempeño.\n\nMentoría en Filosofía Aplicada a Negocios\nReflexión estratégica desde la filosofía, religión y ciencia para juntas que buscan profundidad en su accionar.`
  },
  {
    id: 4,
    name: 'Nicolás Uribe Rueda',
    title: 'Miembro del Club Colombiano de Juntas Directivas',
    shortDescription: 'Líder en gobierno corporativo, transformación empresarial y liderazgo con propósito. Ex-presidente de la Cámara de Comercio de Bogotá.',
    image: '/images/nicolas.png',
    fullDescription: `Nicolás Uribe Rueda es un líder con experiencia en gobierno corporativo, transformación empresarial y liderazgo con propósito. Abogado de la Universidad de los Andes, con maestría en Acción Política y formación en Alto Gobierno y Política Internacional, ha sido presidente de la Cámara de Comercio de Bogotá y Chair de la Federación Mundial de Cámaras de Comercio (WCF), participando activamente en juntas directivas nacionales e internacionales.

Con más de 20 años de trayectoria, ha sido consejero presidencial, representante a la Cámara, consultor empresarial y referente en medios de comunicación, lo que le permite integrar visión estratégica con habilidades de comunicación clara y persuasiva, fundamentales para entornos directivos de alta complejidad.

Nicolás lidera procesos de alfabetización empresarial en inteligencia artificial, siendo parte del Instituto VJAL (www.vjal.ai), donde entrena líderes en el uso estratégico de tecnologías como la IA generativa (tipo ChatGPT) para potenciar la productividad, la innovación y la toma de decisiones. Su enfoque facilita que las juntas incorporen capacidades tecnológicas sin depender exclusivamente de expertos técnicos.

Además, ha sido promotor de la equidad en el ámbito empresarial, liderando desde el ejemplo una agenda de transformación cultural que rompe paradigmas sin radicalismos, con un enfoque honesto y efectivo para abordar desafíos de inclusión y diversidad desde el liderazgo.

Sus conferencias, como "Mentes abiertas, mundos posibles", "Liderazgo y carácter en la promoción de la equidad" y "Nuevo ADN Empresarial", han sido presentadas en escenarios nacionales e internacionales, invitando a repensar el papel de las empresas y sus líderes en un mundo cambiante y polarizado.

Desde el Club Colombiano de Juntas Directivas, Nicolás acompaña a órganos de gobierno corporativo en la actualización de su mentalidad estratégica, fomentando una cultura directiva abierta a la transformación digital, el liderazgo social y la legitimidad empresarial.

Ejes estratégicos de aporte para juntas directivas – Nicolás Uribe Rueda

Transformación Digital y Adopción de IA
Formación de juntas y líderes en inteligencia artificial aplicada, promoviendo el uso estratégico de modelos generativos para la toma de decisiones.

Gobierno Corporativo Adaptativo
Fortalecimiento del rol transformador de las juntas en contextos sociales complejos, con foco en legitimidad, sostenibilidad y ciudadanía corporativa.

Comunicación Estratégica para Altos Directivos
Desarrollo de habilidades de vocería y posicionamiento en entornos públicos, regulatorios y mediáticos.

Liderazgo Inclusivo y Equidad
Implementación de políticas y culturas de equidad de género e inclusión desde el liderazgo de la alta dirección, sin sesgos ni polarizaciones.

Diseño de Estrategias con Propósito
Acompañamiento en la construcción de estrategias empresariales que equilibren resultados financieros con impacto social, legitimidad institucional y sostenibilidad reputacional.

Pensamiento Crítico para Entornos de Alta Incertidumbre
Facilitación de conversaciones estratégicas que desafíen paradigmas y movilicen nuevas visiones empresariales desde la junta.`
  },
  {
    id: 5,
    name: 'Ignacio Giraldo',
    title: 'Miembro del Club Colombiano de Juntas Directivas',
    shortDescription: 'Líder empresarial en transformación financiera, innovación digital y experiencia del cliente. CEO de Lulo Bank.',
    image: '/images/ignacio.png',
    fullDescription: `Ignacio Giraldo es un líder empresarial especializado en la transformación del sector financiero, con una visión centrada en la sostenibilidad, la innovación digital y la experiencia del cliente. Administrador de negocios con especialización en finanzas del CESA, ha construido una carrera sólida liderando iniciativas de alto impacto en entidades como Citibank, Banco Itaú, RappiPay y actualmente como CEO de Lulo Bank.

Su experiencia combina pensamiento estratégico, agilidad organizacional y liderazgo en ecosistemas digitales. Fue responsable de la consolidación de soluciones como RappiCuenta y RappiCard, logrando posicionar a RappiPay como un actor clave en la evolución del sistema financiero colombiano. En su gestión ha priorizado la analítica avanzada, la eficiencia operativa y el desarrollo de productos financieros inclusivos y rentables.

Hoy, al frente de Lulo Bank, lidera la estrategia de expansión y consolidación de los segmentos de banca personal y pymes en un modelo 100% digital. Su capacidad para estructurar equipos de alto desempeño, reducir riesgos y generar valor a través de tecnologías emergentes, lo posiciona como una voz autorizada en temas de transformación financiera, fintech y modelos de negocio digitales.

Desde el Club Colombiano de Juntas Directivas, Ignacio aporta una visión experta en la integración de innovación, riesgo y crecimiento sostenible en la toma de decisiones estratégicas de juntas corporativas, particularmente en sectores altamente regulados y en evolución tecnológica acelerada.

Ejes estratégicos de aporte para juntas directivas – Ignacio Giraldo

Transformación Digital y Fintech
Orientación para la adopción tecnológica en el sistema financiero y en otros sectores que requieren evolución digital acelerada.

Gobierno Corporativo en Entornos Digitales
Acompañamiento a juntas para evaluar riesgos, estructurar modelos operativos digitales y tomar decisiones basadas en datos.

Diseño de Modelos de Negocio Escalables
Construcción y maduración de estrategias de crecimiento rentables, con foco en productos digitales y segmentos emergentes.

Gestión de Riesgo e Innovación Simultánea
Integración de analítica avanzada y control de cartera en el marco de decisiones directivas para crecimiento controlado.

Transformación Organizacional Ágil
Diseño de estructuras de alto desempeño y metodologías ágiles para juntas que buscan eficiencia operativa y velocidad estratégica.

Liderazgo en Experiencia del Cliente
Alineación de la estrategia de la junta con las expectativas cambiantes del cliente digital y los indicadores de satisfacción.`
  },
  {
    id: 6,
    name: 'Lucas Chávez-Alcorta',
    title: 'Miembro del Club Colombiano de Juntas Directivas',
    shortDescription: 'Estratega en marketing, transformación cultural y liderazgo creativo. Reconocido por conectar resultados de negocio con innovación y diversidad.',
    image: '/images/lucas.png',
    fullDescription: `Lucas Chávez-Alcorta es un estratega en marketing, transformación cultural y liderazgo creativo, reconocido en América Latina por su capacidad para conectar resultados de negocio con innovación, diversidad e inclusión. Con un MBA en Liderazgo Creativo del Berlin School, ha liderado estrategias regionales para marcas líderes del retail como Falabella, destacándose como uno de los marketeros más influyentes del continente según Adlatina y Scopen.

Con más de 60 premios internacionales por campañas creativas y eficientes, Lucas combina pensamiento estratégico, sensibilidad cultural y visión de futuro. Su trayectoria le permite asesorar a juntas directivas en el desarrollo de marcas sólidas, inclusión real (no simbólica), y el aprovechamiento de la inteligencia artificial como motor de crecimiento reputacional y comercial.

Miembro del comité consultivo de la Cámara de la Diversidad en Colombia y del Advisory Board del Istituto Marangoni en Miami, ha sido vocero global en eventos como EXMA, Out & Equal Forum y Reinvention, aportando a multinacionales su visión sobre liderazgo auténtico, cultura organizacional e innovación.

Desde el Club Colombiano de Juntas Directivas, Lucas asesora a juntas y CEOs en procesos de transformación reputacional, fortalecimiento de marca institucional, cultura inclusiva y adopción inteligente de tendencias que conectan con las nuevas generaciones de consumidores, colaboradores e inversionistas.

Ejes estratégicos de aporte para juntas directivas – Lucas Chávez-Alcorta

Estrategia de Marca Corporativa y Reputación Directiva
Acompañamiento en la definición y posicionamiento de marcas corporativas desde el propósito, los valores y la coherencia reputacional.

Cultura Organizacional e Inclusión Auténtica
Implementación de estrategias de diversidad sin "washing", construyendo entornos donde la inclusión genere valor real y sostenible.

Liderazgo Creativo para la Alta Dirección
Formación de líderes que potencien la innovación y el pensamiento disruptivo desde la junta directiva como habilitador de cambio.

Transformación del Marketing con Inteligencia Artificial
Asesoría sobre el uso ético y estratégico de IA para evolucionar el marketing corporativo y mejorar la conexión con audiencias clave.

Retail, E-commerce y Experiencia de Cliente
Aporte de visión práctica sobre la integración de canales físicos y digitales para juntas directivas de empresas del sector consumo.

Marca Personal y Embajadores de Marca Corporativa
Desarrollo de vocerías sólidas entre miembros de junta y altos ejecutivos, alineando marca personal con la narrativa institucional.`
  }
];

export default function BoardMembers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleCardClick = (member: BoardMember) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMember(null);
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
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 40px -12px rgba(255,255,255,0.1)',
                  }
                }}
                onClick={() => handleCardClick(member)}
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
                    {member.shortDescription}
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

        {/* Modal for member details */}
        <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="md" fullWidth PaperProps={{
          sx: {
            backgroundColor: '#181818',
            color: '#f5f5f5',
            borderRadius: 3,
            p: 0
          }
        }}>
          {selectedMember && (
            <Box sx={{ position: 'relative', textAlign: 'center', px: { xs: 2, sm: 6 }, pt: 4, pb: 4 }}>
              <IconButton
                aria-label="close"
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: 16,
                  color: '#fff',
                  zIndex: 10
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                <img src={selectedMember.image} alt={selectedMember.name} style={{ width: 120, borderRadius: 12, marginBottom: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>
                  {selectedMember.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 3, color: '#bdbdbd' }}>
                  {selectedMember.title}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line', color: '#e0e0e0', textAlign: 'center', maxWidth: 700, mx: 'auto', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                {selectedMember.fullDescription}
              </Typography>
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
} 