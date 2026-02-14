
import { Lesson } from '../types';

export const PASTORAL_LESSON_4: Lesson = {
  id: 'clase-4-pastorales',
  title: 'Epístolas Pastorales - Clase 4',
  subtitle: 'Siervos Aprobados por Dios',
  totalSlides: 11,
  slides: [
    {
      id: 'c4-s1-intro',
      type: 'intro',
      title: 'Siervos Aprobados',
      subtitle: 'Estudio de 1 Timoteo 4',
      visual: {
        type: 'image',
        source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/fe63fe3d-fee6-4bc6-9980-58781f1afc3e_rw_1920.jpg?h=819906d9b83cddfdfd7f295edce3ff9e',
        position: 'background',
        effect: 'overlay-dark'
      },
      content: '¿Cuál es el verdadero ministerio de un pastor y qué clase de persona debe ser? Pablo subraya el carácter y el trabajo del pastor, enumerando cualidades esenciales para el éxito en el servicio de Dios.'
    },
    {
      id: 'c4-s2-false-teachers',
      type: 'keynote-cards',
      title: 'Los Falsos Maestros',
      subtitle: 'Identificando la Apostasía',
      visual: { type: 'icon', source: 'AlertOctagon' },
      interaction: {
        type: 'grid-cards',
        revealItems: [
          {
            title: 'Movidos por Satanás',
            text: 'Doctrinas de demonios.',
            icon: 'Skull',
            longContent: 'Satanás es un imitador. Tiene sus propios ministros y doctrinas. La prueba de fuego es: ¿Qué dicen respecto a Jesucristo?',
            image: 'https://enlaceshaddai.com/wp-content/uploads/2024/01/FALSA-DOCTRINAS.png'
          },
          {
            title: 'Extravían a la Gente',
            text: 'La meta es la apostasía.',
            icon: 'Compass',
            longContent: 'Buscan hacer discípulos para sí mismos, no para Cristo. Una secta roba convertidos para esclavizarlos a sus líderes.',
            image: 'https://i0.wp.com/universal.org.mx/wp-content/uploads/2021/12/Enganadores.jpg?resize=860%2C525&ssl=1'
          },
          {
            title: 'Son Hipócritas',
            text: 'Predican pero no practican.',
            icon: 'Mask',
            longContent: 'Satanás obra por medio de la hipocresía de mentirosos. El siervo verdadero tiene integridad y sinceridad.',
            image: 'https://laciudadrevista.com/wp-content/uploads/2020/04/hipocrita.jpg'
          },
          {
            title: 'Conciencia Cauterizada',
            text: 'Sin sensibilidad moral.',
            icon: 'Activity',
            longContent: 'Como una piel herrada con hierro candente, la conciencia se vuelve dura. Afirman con labios lo que niegan con su vida.',
            image: 'https://www.sedolor.es/wp-content/uploads/2022/12/insensibilidad-congenita-dolor.jpg-755x425.webp'
          }
        ]
      }
    },
    {
      id: 'c4-s3-legalism',
      type: 'hermeneutics',
      title: 'El Error del Legalismo',
      subtitle: 'Ascetismo vs Libertad Cristiana',
      visual: {
        type: 'image',
        source: 'https://evangelio.blog/wp-content/uploads/2015/06/clip_image0022.jpg',
        position: 'left'
      },
      content: 'Los falsos maestros prohibían el matrimonio y ciertos alimentos, negando la bondad de la creación de Dios.',
      interaction: {
        type: 'grid-cards',
        revealItems: [
          { title: 'Matrimonio', text: 'Institución divina aprobada por Jesús y Pablo.', icon: 'Heart' },
          { title: 'Alimentos', text: 'Todo lo que Dios creó es bueno si se toma con acción de gracias.', icon: 'Coffee' },
          { title: 'Santificación', text: 'La Palabra y la oración santifican nuestra comida diaria.', icon: 'Book' },
          { title: 'Libertad', icon: 'Unlock', text: 'No debemos dejar que legalistas dictaminen nuestra espiritualidad.' }
        ]
      }
    },
    {
      id: 'c4-s4-good-pastor',
      type: 'tabs-reveal',
      title: 'El Pastor Bueno',
      subtitle: 'Prioridades del Ministerio',
      visual: { type: 'icon', source: 'UserCheck' },
      interaction: {
        type: 'side-reveal',
        revealItems: [
          {
            title: 'Enseña la Verdad',
            text: 'Todo el consejo de Dios.',
            icon: 'Mic',
            longContent: 'Debe dar señales de destino (doctrina positiva) y señales de peligro (denunciar el error).',
            image: 'https://definicion.de/wp-content/uploads/2010/04/verdad-1.png'
          },
          {
            title: 'Se Alimenta',
            text: 'Nutrido en la Palabra.',
            icon: 'Utensils',
            longContent: 'Un pastor debe crecer en la Palabra antes de guiar a otros. Es un estudiante constante.',
            image: 'https://www.umnews.org/-/media/umc-media/2019/10/21/19/40/spanish-bible-anniversary-hands-umnews-2019-3500.jpg?la=es&h=800&mw=1200&w=1200&hash=B6A8B03815C5F64205B1F19978CFC27C'
          },
          {
            title: 'Apego a la Oración',
            text: 'Comunión constante.',
            icon: 'Flame',
            longContent: 'La Palabra y la oración transforman lo ordinario en un servicio espiritual para la gloria de Dios.',
            image: 'https://wradio.com.mx/resizer/v2/PDX3IOYY3VNALIVWHSWSCBLIFA.jpg?auth=95a59ee08d094b9582591259be8009954f5d77c07110730880ae73e9397a24b9&width=736&height=552&quality=70&smart=true'
          }
        ]
      }
    },
    {
      id: 'c4-s5-exercise',
      type: 'split-visual',
      title: 'Ejercicio de Piedad',
      subtitle: 'Entrenamiento Espiritual',
      visual: {
        type: 'image',
        source: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
        position: 'right'
      },
      content: 'Al igual que un atleta se disciplina para ganar, el creyente debe ejercitarse en la santidad.',
      bullets: [
        'Lo Malo: Evitar fábulas profanas y cuentos de viejas.',
        'Lo Temporal: El ejercicio corporal aprovecha para poco (esta vida).',
        'Lo Eterno: La piedad es provechosa para todo (esta vida y la venidera).',
        'La Disciplina: Hacer del cuerpo un siervo, no un amo.'
      ]
    },
    {
      id: 'c4-s6-example',
      type: 'flashcards',
      title: 'Sé Ejemplo',
      subtitle: 'Seis Áreas de Influencia',
      visual: { type: 'icon', source: 'Star' },
      interaction: {
        type: 'flashcards',
        revealItems: [
          {
            title: 'Palabra y Conducta',
            text: 'Hablar genuino y vida controlada por la Palabra. No negar con hechos lo que profesamos.',
            icon: 'MessageCircle',
            image: 'https://watv.org/wp-content/uploads/2019/11/structure-bible-img.jpg'
          },
          {
            title: 'Amor y Espíritu',
            text: 'El amor es el incentivo; el espíritu es el entusiasmo y ánimo interno del hijo de Dios.',
            icon: 'Heart',
            image: 'https://mejorconsalud.as.com/wp-content/uploads/2021/08/corazon-concepto-amor-768x533.jpg?auto=format%2Ccompress&quality=75&width=640&height=360&fit=cover&gravity=center&sharp=true&progressive=true'
          },
          {
            title: 'Fe y Pureza',
            text: 'Confianza en Dios y castidad absoluta. Mantener limpia la mente, el corazón y el cuerpo.',
            icon: 'ShieldCheck',
            image: 'https://d2cxctkhfj5y1y.cloudfront.net/images/fe_724_482_80.jpg'
          }
        ]
      }
    },
    {
      id: 'c4-s7-savior',
      type: 'hotspot-reveal',
      title: 'Salvador de Todos',
      subtitle: 'La Esperanza en el Dios Vivo',
      visual: {
        type: 'image',
        source: 'https://www.desdemitrinchera.com/wordpress/wp-content/uploads/2025/01/9-acciones-para-fortalecer-la-esperanza-e1548458116795.jpg',
        position: 'background'
      },
      interaction: {
        type: 'hotspots',
        revealItems: [
          {
            title: 'Dios Viviente',
            text: 'Diferente a los ídolos muertos.',
            longContent: 'Nuestra esperanza está puesta en el Dios que actúa y salva hoy.',
            icon: 'Sun',
            x: 50,
            y: 30
          },
          {
            title: 'Salvador de Todos',
            text: 'Provisión Universal.',
            longContent: 'Cualquier pecador puede confiar en Cristo. La oferta es para todos los hombres.',
            icon: 'Globe',
            x: 20,
            y: 60
          },
          {
            title: 'Mayormente los que Creen',
            text: 'Eficacia Personal.',
            longContent: 'Aunque la provisión es para todos, solo es eficaz para aquellos que depositan su fe en Él.',
            icon: 'UserCheck',
            x: 80,
            y: 60
          }
        ]
      }
    },
    {
      id: 'c4-s8-prokope',
      type: 'timeline',
      title: 'El Avance Pionero',
      subtitle: 'Tu Progreso sea Manifiesto (Prokopē)',
      visual: { type: 'icon', source: 'TrendingUp' },
      interaction: {
        type: 'side-reveal',
        revealItems: [
          {
            title: 'Término Militar',
            text: 'Limpiar el camino.',
            icon: 'Target',
            longContent: 'Prokopē significa un soldado que se adelanta a la tropa, elimina obstáculos y permite que otros avancen.',
            image: 'https://i.pinimg.com/736x/1c/37/1f/1c371f6441ba2a327292a379b776e742.jpg'
          },
          {
            title: 'Liderazgo Visible',
            text: 'Que todos lo vean.',
            icon: 'Eye',
            longContent: 'Nadie puede guiar a donde no ha llegado. El pastor debe dar evidencia de crecimiento espiritual constante.',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Sin Estancamiento',
            text: 'Avanzar o retroceder.',
            icon: 'ArrowUpRight',
            longContent: 'En la vida cristiana es imposible quedarse quieto. Si no estás progresando, estás retrocediendo.',
            image: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800'
          }
        ]
      }
    },
    {
      id: 'c4-s9-pillars',
      type: 'keynote-cards',
      title: 'Pilares del Progreso',
      subtitle: 'Cómo crecer ministerialmente',
      visual: { type: 'icon', source: 'Columns' },
      interaction: {
        type: 'grid-cards',
        revealItems: [
          {
            title: 'Lectura Pública',
            text: 'La Palabra en la Asamblea.',
            icon: 'BookOpen',
            longContent: 'La Biblia merece lo mejor. Leerla, explicarla y aplicarla (exhortación) es el centro del culto.',
            image: 'https://biteproject.com/wp-content/uploads/2024/07/Destacada-1024x576.webp'
          },
          {
            title: 'Enseñanza',
            text: 'Apto para aprender.',
            icon: 'Library',
            longContent: 'Apto para enseñar significa también apto para aprender. El pastor debe ser un estudiante perpetuo.',
            image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Dones Espirituales',
            text: 'Aviva el fuego.',
            icon: 'Zap',
            longContent: 'Dios nos llama y nos capacita. Debemos cultivar, usar y perfeccionar los dones que Él nos ha dado.',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Dedicación Total',
            text: 'Una sola cosa hago.',
            icon: 'Focus',
            longContent: 'El ministerio debe absorbernos. Dividir el tiempo con actividades secundarias daña la vida espiritual.',
            image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800'
          }
        ]
      }
    },
    {
      id: 'c4-s10-watch-yourself',
      type: 'split-stacked-reveal',
      title: 'Cuidado Personal',
      subtitle: 'Ten Cuidado de Ti Mismo',
      visual: { type: 'icon', source: 'Eye' },
      content: 'Un siervo puede estar tan ocupado ayudando a otros que descuida su propio corazón.',
      interaction: {
        type: 'side-reveal',
        revealItems: [
          {
            title: 'Mirad por Vosotros',
            text: 'Antes que la doctrina.',
            icon: 'User',
            longContent: 'Pablo pone "de ti mismo" antes de "la doctrina". Si tu vida no corresponde a tu trabajo, el ministerio fallará.',
            image: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'Inventario Espiritual',
            text: 'Examen constante.',
            icon: 'ClipboardCheck',
            longContent: 'Examina tu corazón a la luz de la Palabra. El que piensa estar firme, mire que no caiga.',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
          }
        ]
      }
    },
    {
      id: 'c4-s14-final',
      type: 'completion',
      title: '¡Clase 4 Completada!',
      subtitle: 'Siervos Aprobados por Dios',
      visual: {
        type: 'image',
        source: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80&w=1600',
        position: 'background'
      },
      content: 'Has estudiado cómo ser un siervo aprobado. Recuerda: Predica la Palabra, vive la Palabra y progresa en la Palabra.'
    }
  ]
};
