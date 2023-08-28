export default {
  global: {
    componenteFormativo: 'Planeación y ejecución de diagnósticos energéticos',
    descripcionCurso:
      'La eficiencia en cualquier contexto es el cociente de la magnitud de una variable a la salida dividida entre la magnitud de esa variable y la entrada. En el contexto energético, la variable es la energía y una auditoría o revisión energética determina la eficiencia actual de un proceso e identifica las oportunidades de mejora de la misma.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diagrama de flujo de procesos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ejemplos de procesos industriales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aplicaciones del balance y flujo de energía en los procesos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inventario de equipos consumidores de energía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Introducción a las auditorías energéticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Instrumentos y equipos de medición usados para la realización de auditorías energéticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Principios de las auditorías energéticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Planificación de las auditorías energéticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Procesos de análisis en las auditorías energéticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo:
          'Identificación de oportunidades de mejora del desempeño energético',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Reporte de auditoría energética',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_015_821207.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diagrama de flujo de procesos',
      referencia:
        'Lifeder educación (2023, mayo 29). El diagrama de flujo explicado [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pWVFKfTUeYQ',
    },
    {
      tema: 'Introducción a las auditorías energéticas',
      referencia:
        'Asociación Española de la Calidad (s.f.). Auditoría energética. ',
      tipo: 'Página web',
      link:
        'https://www.aec.es/web/guest/centro-conocimiento/auditoria-energetica',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría energética',
      significado:
        'inspección y análisis sistemático del uso de energía y el consumo de energía de un objeto(s) auditado(s), con el propósito de identificar los flujos de energía y las oportunidades potenciales para mejorar el desempeño energético e informarlas.',
    },
    {
      termino: 'Auditor energético',
      significado: 'persona que realiza una auditoría energética.',
    },
    {
      termino: 'Balance energético',
      significado:
        'contabilidad del suministro de energía (entrada) para consumo y/o producción basada en los flujos de energía a partir de los usos de energía.',
    },
    {
      termino: 'Eficiencia energética',
      significado:
        'relación en porcentaje de la energía de salida y la energía de entrada en un equipo o proceso.',
    },
    {
      termino: 'Flujo de energía',
      significado:
        'descripción o mapeo de procesos de transferencia de energía o conversión de la energía dentro del objeto(s) auditado(s).',
    },
    {
      termino: 'Línea base energética',
      significado:
        'estado de desempeño energético de un proceso, antes de realizar acciones de mejora.',
    },
    {
      termino: 'Uso significativo de energía (USE)',
      significado:
        'forma o tipo de energía de mayor consumo en un proceso o equipo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto colombiano de normas técnicas y certificación. (2014). <em>Norma técnica colombiana Auditorías energéticas NTC-ISO 50002:2014.</em> Icontec.',
      link: '',
    },
    {
      referencia:
        'Red colombiana de conocimiento en eficiencia energética - RECIEE. (2019). <em>Implementación de un sistema de gestión de la energía - Guía con base en la Norma ISO 50001:2018.</em> Segunda edición. ',
      link:
        'https://www1.upme.gov.co/DemandaEnergetica/EEIColombia/Guia_estructura_ISO50001.pdf',
    },
    {
      referencia:
        'Unidad de planeación minero energética - UPME. (2007). <em>Guía didáctica para el desarrollo de auditorías energéticas.</em> UPME.',
      link:
        'https://bdigital.upme.gov.co/bitstream/001/902/1/upme_217_auditorias_energeticas_2007.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Javier González Cuevas',
          cargo: 'Experto técnico',
          centro:
            'Regional Distrito Capital - Centro Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Leidy Carolina Arias Aguirre',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
