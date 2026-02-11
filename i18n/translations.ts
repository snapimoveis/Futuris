import { TranslationStructure, Language } from '../types';

export const translations: Record<Language, TranslationStructure> = {
  es: {
    common: {
      readMore: 'Leer Más',
      viewDetails: 'Ver Detalles',
      learnMore: 'Saber Más',
      back: 'Volver',
      loading: 'Cargando',
      details: 'Detalles'
    },
    nav: {
      home: 'Inicio',
      company: 'Empresa',
      businessAreas: 'Áreas de Actuación',
      assembly: 'Montaje Electromecánico',
      maintenancePrev: 'Calderería',
      maintenanceCorr: 'Soldadura',
      clients: 'Clientes',
      news: 'Noticias',
      careers: 'Carrera',
      contact: 'Contactos',
    },
    hero: {
      title: 'Ingeniería de Precisión para el Futuro Industrial',
      subtitle: 'Soluciones integrales en montaje, mantenimiento y optimización operativa.',
      cta: 'Explorar Servicios',
    },
    home: {
      features: {
        engineering: 'Integración avanzada CAD/CAM y mecánica de precisión.',
        safety: 'Protocolos de cero accidentes y evaluación rigurosa de riesgos.',
        efficiency: 'Principios de manufactura Lean para reducir tiempos de inactividad.'
      },
      intro: 'FUTURIS se sitúa a la vanguardia del sector industrial europeo. Combinamos décadas de experiencia con integración tecnológica moderna para ofrecer soluciones que no solo son efectivas, sino transformadoras. Desde el montaje de maquinaria pesada hasta algoritmos de mantenimiento predictivo, impulsamos la industria del mañana.',
      stats: {
        countries: 'Países Servidos',
        projects: 'Proyectos Completados',
        safety: 'Índice de Seguridad',
        engineers: 'Ingenieros Cualificados',
        support: 'Soporte Activo'
      }
    },
    company: {
      title: 'Sobre FUTURIS',
      description: 'Somos líderes en soluciones industriales avanzadas, comprometidos con la excelencia técnica y la innovación sostenible en toda Europa.',
      values: {
        engineering: 'Excelencia en Ingeniería',
        safety: 'Seguridad Integral',
        efficiency: 'Eficiencia Operacional'
      },
      about: {
        title: 'Sobre Nosotros',
        intro: 'FUTURIS nace de la experiencia y el compromiso con la excelencia en el mantenimiento y montaje industrial. Actuamos en el sector con un enfoque práctico, tecnológico y orientado a resultados, ofreciendo soluciones eficientes y seguras para los desafíos más exigentes de la industria.',
        trust: 'Trabajamos con transparencia, rigor y responsabilidad. Cada proyecto que asumimos es tratado con seriedad y dedicación, porque creemos que la confianza construye relaciones duraderas.',
        roles: 'Contamos con un equipo multidisciplinar compuesto por profesionales altamente cualificados — soldadores, tubería, caldereros industriales, pintores, ayudantes técnicos y especialistas en montaje — preparados para intervenir con precisión en entornos industriales de alta complejidad.'
      },
      training: {
        title: 'Formación y Certificación Técnica',
        description: 'En FUTURIS, la cualificación técnica no es solo un requisito, es un compromiso permanente.',
        standards: 'Todos los miembros de nuestro equipo pasan por formación especializada y continua, garantizando conformidad con las más rigurosas normas industriales internacionales. Trabajamos de acuerdo con los estándares ASME IX y AWS, asegurando competencia en los procesos de soldadura TIG, RX, MIG y MAG, así como en operaciones de montaje industrial, mantenimiento preventivo, paradas técnicas y pintura industrial.',
        outcome: 'Esta preparación nos permite actuar con seguridad, eficiencia y total control de calidad en cada intervención.'
      },
      challenges: {
        title: 'Preparados para Todos los Desafíos',
        description: 'Asumimos cada proyecto como una oportunidad de crear valor para nuestros clientes. Ya sea en una parada de mantenimiento, un montaje electromecánico o una intervención correctiva urgente, nuestra prioridad es garantizar continuidad operativa, seguridad y rendimiento.',
        commitment: 'Estamos preparados para responder a las necesidades específicas de su empresa con profesionalismo, rigor técnico y capacidad de ejecución.'
      },
      team: {
        title: 'Nuestro Equipo',
        subtitle: 'Experiencia que Marca la Diferencia',
        description: 'El verdadero activo de FUTURIS es su equipo. Reunimos profesionales con sólida experiencia en el sector industrial, preparados para enfrentar contextos exigentes y proyectos de elevada responsabilidad técnica. La combinación entre conocimiento, práctica y actualización constante nos permite ofrecer soluciones eficaces y sostenibles.',
        values: 'Creemos que la excelencia técnica se construye con formación continua, trabajo en equipo y atención al detalle.',
        cta: '¿Quiere formar parte de nuestro equipo? Estamos siempre disponibles para conocer nuevos talentos que compartan nuestros valores de compromiso, calidad y responsabilidad.'
      }
    },
    services: {
      title: 'Nuestras Capacidades',
      description: 'Ofrecemos un espectro completo de servicios industriales diseñados para maximizar la productividad.',
      intro: 'Para responder de forma completa a las necesidades del mercado industrial, actuamos en las siguientes áreas:'
    },
    businessAreasList: {
      boilermaking: {
        title: 'Calderería',
        description: 'Fabricación, instalación y mantenimiento de equipos y estructuras metálicas industriales, incluyendo calderas y sistemas asociados.',
        points: ["Estructuras Metálicas", "Instalación de Calderas", "Mantenimiento"]
      },
      electromechanical: {
        title: 'Montaje Electromecánico',
        description: 'Instalación e integración de equipos eléctricos y mecánicos en entornos industriales, asegurando alineación técnica y operativa.',
        points: ["Integración de Equipos", "Alineación Técnica", "Configuración Operativa"]
      },
      piping: {
        title: 'Tubería Industrial',
        description: 'Instalación, mantenimiento y adaptación de sistemas de tuberías para la conducción de fluidos industriales, con foco en seguridad y eficiencia.',
        points: ["Conducción de Fluidos", "Adaptación de Tuberías", "Sistemas de Seguridad"]
      },
      welding: {
        title: 'Servicios de Soldadura',
        description: 'Ejecución de soldadura en los procesos TIG, RX, MIG y MAG, de acuerdo con las normas ASME IX y AWS, garantizando calidad estructural y conformidad técnica.',
        points: ["TIG / MIG / MAG / RX", "ASME IX & AWS", "Calidad Estructural"]
      },
      polishing: {
        title: 'Pulido Industrial',
        description: 'Tratamiento y acabado superficial de componentes metálicos, mejorando rendimiento, durabilidad y presentación.',
        points: ["Tratamiento Superficial", "Acabado", "Mejora de Rendimiento"]
      },
      painting: {
        title: 'Pintura Industrial',
        description: 'Aplicación de revestimientos protectores y técnicos en estructuras y equipos industriales, asegurando resistencia y protección contra agentes externos.',
        points: ["Revestimientos Protectores", "Aplicación Técnica", "Resistencia"]
      }
    },
    businessAreasPage: {
      serviceOverview: 'Descripción del Servicio',
      keyCapabilities: 'Capacidades Clave',
      safetyDesc: 'Nuestros equipos especializados están equipados con herramientas de última generación para manejar los entornos industriales más exigentes. Seguimos estrictos protocolos de seguridad (HSE) y estándares de calidad para garantizar que sus operaciones funcionen sin problemas.',
      ctaTitle: '¿Necesita este servicio?',
      ctaDesc: 'Contacte a nuestro departamento de ingeniería para obtener una evaluación técnica.',
      ctaButton: 'Solicitar Presupuesto',
      back: 'Volver a Áreas'
    },
    clients: {
      title: 'Socios que Confían en Nosotros',
      intro: 'Estamos orgullosos de servir a algunos de los nombres más respetados en los sectores automotriz, aeroespacial y energético.',
      ctaTitle: '¿Quiere unirse a nuestra red?',
      ctaDesc: 'Ofrecemos soluciones personalizadas adaptadas a las necesidades específicas de su industria.',
      ctaButton: 'Contactar Ventas'
    },
    news: {
      title: 'Noticias',
      readArticle: 'Leer Artículo',
      items: [
        {
          title: 'FUTURIS Expande Operaciones a Alemania',
          category: 'Corporativo',
          excerpt: 'Estamos encantados de anunciar la apertura de nuestro nuevo centro logístico en Hamburgo.'
        },
        {
          title: 'Nueva Certificación ISO 45001',
          category: 'Seguridad',
          excerpt: 'Nuestro compromiso con la salud y seguridad ocupacional ha sido reconocido.'
        },
        {
          title: 'Innovación en Mantenimiento Predictivo',
          category: 'Tecnología',
          excerpt: 'Cómo la IA y los sensores IoT están revolucionando nuestro enfoque.'
        },
        {
          title: 'Informe Anual de Sostenibilidad',
          category: 'Sostenibilidad',
          excerpt: 'Reducción de nuestra huella de carbono en un 20% en el último año fiscal.'
        }
      ]
    },
    contact: {
      title: 'Hablemos de su Proyecto',
      intro: 'Estamos listos para ayudarlo con sus desafíos industriales. Ya sea que necesite una consulta para una nueva línea de montaje o soporte de mantenimiento de emergencia, nuestro equipo está disponible.',
      details: {
        headquarters: 'Sede Central',
        phone: 'Teléfono',
        email: 'Correo Electrónico',
        mainOffice: 'Oficina Principal',
        support247: 'Soporte 24/7'
      },
      form: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: 'Mensaje enviado correctamente.',
        successTitle: 'Mensaje Enviado',
        reset: 'Enviar otro'
      }
    },
    careers: {
      title: 'Únete al Equipo',
      subtitle: 'Buscamos talento técnico apasionado por la industria.',
      upload: 'Subir CV (PDF)',
      apply: 'Enviar Candidatura',
      openPositions: 'Posiciones Abiertas',
      whyUs: '¿Por qué FUTURIS?',
      whyUsList: {
        training: 'Formación Continua',
        projects: 'Proyectos Internacionales',
        shifts: 'Turnos Flexibles'
      },
      spontaneous: 'Candidatura Espontánea',
      form: {
        firstName: 'Nombre',
        lastName: 'Apellidos',
        email: 'Correo Electrónico',
        cv: 'CV / Currículum',
        fileType: 'PDF, DOC hasta 5MB'
      },
      jobs: {
        mechEng: 'Ingeniero Mecánico Senior',
        electrician: 'Electricista Industrial',
        safety: 'Oficial de Seguridad (HSE)'
      }
    }
  },
  pt: {
    common: {
      readMore: 'Ler Mais',
      viewDetails: 'Ver Detalhes',
      learnMore: 'Saber Mais',
      back: 'Voltar',
      loading: 'A carregar',
      details: 'Detalhes'
    },
    nav: {
      home: 'Início',
      company: 'Empresa',
      businessAreas: 'Áreas de Atuação',
      assembly: 'Montagem Eletromecânica',
      maintenancePrev: 'Caldeiraria',
      maintenanceCorr: 'Soldadura',
      clients: 'Clientes',
      news: 'Notícias',
      careers: 'Carreira',
      contact: 'Contactos',
    },
    hero: {
      title: 'Engenharia de Precisão para o Futuro Industrial',
      subtitle: 'Soluções integrais em montagem, manutenção e otimização operacional.',
      cta: 'Explorar Serviços',
    },
    home: {
      features: {
        engineering: 'Integração avançada CAD/CAM e mecânica de precisão.',
        safety: 'Protocolos de zero acidentes e avaliação rigorosa de riscos.',
        efficiency: 'Princípios de manufatura Lean para reduzir tempos de inatividade.'
      },
      intro: 'A FUTURIS situa-se na vanguarda do setor industrial europeu. Combinamos décadas de experiência com integração tecnológica moderna para oferecer soluções que não são apenas eficazes, mas transformadoras. Desde a montagem de maquinaria pesada até algoritmos de manutenção preditiva, impulsionamos a indústria do amanhã.',
      stats: {
        countries: 'Países Servidos',
        projects: 'Projetos Concluídos',
        safety: 'Índice de Segurança',
        engineers: 'Engenheiros Qualificados',
        support: 'Suporte Ativo'
      }
    },
    company: {
      title: 'Sobre a FUTURIS',
      description: 'Somos líderes em soluções industriais avançadas, comprometidos com a excelência técnica e a inovação sustentável em toda a Europa.',
      values: {
        engineering: 'Excelência em Engenharia',
        safety: 'Segurança Integral',
        efficiency: 'Eficiência Operacional'
      },
      about: {
        title: 'Sobre Nós',
        intro: 'A FUTURIS nasce da experiência e do compromisso com a excelência na manutenção e montagem industrial. Atuamos no setor com uma abordagem prática, tecnológica e orientada para resultados, oferecendo soluções eficientes e seguras para os desafios mais exigentes da indústria.',
        trust: 'Trabalhamos com transparência, rigor e responsabilidade. Cada projeto que assumimos é tratado com seriedade e dedicação, porque acreditamos que a confiança constrói relações duradouras.',
        roles: 'Contamos com uma equipa multidisciplinar composta por profissionais altamente qualificados — soldadores, canalizadores, caldeireiros industriais, pintores, ajudantes técnicos e especialistas em montagem — preparados para intervir com precisão em ambientes industriais de elevada complexidade.'
      },
      training: {
        title: 'Formação e Certificação Técnica',
        description: 'Na FUTURIS, a qualificação técnica não é apenas um requisito, é um compromisso permanente.',
        standards: 'Todos os membros da nossa equipa passam por formação especializada e contínua, garantindo conformidade com as mais rigorosas normas industriais internacionais. Trabalhamos de acordo com os padrões ASME IX e AWS, assegurando competência nos processos de soldadura TIG, RX, MIG e MAG, bem como em operações de montagem industrial, manutenção preventiva, paragens técnicas e pintura industrial.',
        outcome: 'Esta preparação permite-nos atuar com segurança, eficiência e total controlo de qualidade em cada intervenção.'
      },
      challenges: {
        title: 'Preparados para Todos os Desafios',
        description: 'Assumimos cada projeto como uma oportunidade de criar valor para os nossos clientes. Seja numa paragem de manutenção, numa montagem eletromecânica ou numa intervenção corretiva urgente, a nossa prioridade é garantir continuidade operacional, segurança e desempenho.',
        commitment: 'Estamos preparados para responder às necessidades específicas da sua empresa com profissionalismo, rigor técnico e capacidade de execução.'
      },
      team: {
        title: 'A Nossa Equipa',
        subtitle: 'Experiência que Faz a Diferença',
        description: 'O verdadeiro ativo da FUTURIS é a sua equipa. Reunimos profissionais com sólida experiência no setor industrial, preparados para enfrentar contextos exigentes e projetos de elevada responsabilidade técnica. A combinação entre conhecimento, prática e atualização constante permite-nos oferecer soluções eficazes e sustentáveis.',
        values: 'Acreditamos que excelência técnica se constrói com formação contínua, trabalho em equipa e atenção ao detalhe.',
        cta: 'Quer fazer parte da nossa equipa? Estamos sempre disponíveis para conhecer novos talentos que partilhem os nossos valores de compromisso, qualidade e responsabilidade.'
      }
    },
    services: {
      title: 'As Nossas Capacidades',
      description: 'Oferecemos um espectro completo de serviços industriais desenhados para maximizar a produtividade.',
      intro: 'Para responder de forma completa às necessidades do mercado industrial, atuamos nas seguintes áreas:'
    },
    businessAreasList: {
      boilermaking: {
        title: 'Caldeiraria',
        description: 'Fabricação, instalação e manutenção de equipamentos e estruturas metálicas industriais, incluindo caldeiras e sistemas associados.',
        points: ["Estruturas Metálicas", "Instalação de Caldeiras", "Manutenção"]
      },
      electromechanical: {
        title: 'Montagem Eletromecânica',
        description: 'Instalação e integração de equipamentos elétricos e mecânicos em ambientes industriais, assegurando alinhamento técnico e operacional.',
        points: ["Integração de Equipamentos", "Alinhamento Técnico", "Configuração Operacional"]
      },
      piping: {
        title: 'Tubulação Industrial',
        description: 'Instalação, manutenção e adaptação de sistemas de tubagem para condução de fluidos industriais, com foco em segurança e eficiência.',
        points: ["Condução de Fluidos", "Adaptação de Tubagens", "Sistemas de Segurança"]
      },
      welding: {
        title: 'Serviços de Soldadura',
        description: 'Execução de soldadura nos processos TIG, RX, MIG e MAG, de acordo com as normas ASME IX e AWS, garantindo qualidade estrutural e conformidade técnica.',
        points: ["TIG / MIG / MAG / RX", "ASME IX & AWS", "Qualidade Estrutural"]
      },
      polishing: {
        title: 'Polimento Industrial',
        description: 'Tratamento e acabamento superficial de componentes metálicos, melhorando desempenho, durabilidade e apresentação.',
        points: ["Tratamento Superficial", "Acabamento", "Melhoria de Desempenho"]
      },
      painting: {
        title: 'Pintura Industrial',
        description: 'Aplicação de revestimentos protetores e técnicos em estruturas e equipamentos industriais, assegurando resistência e proteção contra agentes externos.',
        points: ["Revestimentos Protetores", "Aplicação Técnica", "Resistência"]
      }
    },
    businessAreasPage: {
      serviceOverview: 'Descrição do Serviço',
      keyCapabilities: 'Capacidades Chave',
      safetyDesc: 'As nossas equipas especializadas estão equipadas com ferramentas de última geração para lidar com os ambientes industriais mais exigentes. Seguimos rigorosos protocolos de segurança (HSE) e normas de qualidade para garantir que as suas operações decorram sem problemas.',
      ctaTitle: 'Necessita deste serviço?',
      ctaDesc: 'Contacte o nosso departamento de engenharia para obter uma avaliação técnica.',
      ctaButton: 'Solicitar Orçamento',
      back: 'Voltar a Áreas'
    },
    clients: {
      title: 'Parceiros que Confiam em Nós',
      intro: 'Temos orgulho em servir alguns dos nomes mais respeitados nos setores automóvel, aeroespacial e energético.',
      ctaTitle: 'Quer juntar-se à nossa rede?',
      ctaDesc: 'Oferecemos soluções personalizadas adaptadas às necessidades específicas da sua indústria.',
      ctaButton: 'Contactar Vendas'
    },
    news: {
      title: 'Notícias',
      readArticle: 'Ler Artigo',
      items: [
        {
          title: 'FUTURIS Expande Operações para a Alemanha',
          category: 'Corporativo',
          excerpt: 'Temos o prazer de anunciar a abertura do nosso novo centro logístico em Hamburgo.'
        },
        {
          title: 'Nova Certificação ISO 45001',
          category: 'Segurança',
          excerpt: 'O nosso compromisso com a saúde e segurança ocupacional foi reconhecido.'
        },
        {
          title: 'Inovação em Manutenção Preditiva',
          category: 'Tecnologia',
          excerpt: 'Como a IA e os sensores IoT estão a revolucionar a nossa abordagem.'
        },
        {
          title: 'Relatório Anual de Sustentabilidade',
          category: 'Sustentabilidade',
          excerpt: 'Redução da nossa pegada de carbono em 20% no último ano fiscal.'
        }
      ]
    },
    contact: {
      title: 'Fale Connosco',
      intro: 'Estamos prontos para ajudá-lo com os seus desafios industriais. Quer necessite de uma consulta para uma nova linha de montagem ou suporte de manutenção de emergência, a nossa equipa está disponível.',
      details: {
        headquarters: 'Sede',
        phone: 'Telefone',
        email: 'Email',
        mainOffice: 'Escritório Principal',
        support247: 'Suporte 24/7'
      },
      form: {
        name: 'Nome Completo',
        email: 'Email',
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
        sending: 'A enviar...',
        success: 'Mensagem enviada com sucesso.',
        successTitle: 'Mensagem Enviada',
        reset: 'Enviar outra'
      }
    },
    careers: {
      title: 'Junte-se à Equipa',
      subtitle: 'Procuramos talento técnico apaixonado pela indústria.',
      upload: 'Carregar CV (PDF)',
      apply: 'Enviar Candidatura',
      openPositions: 'Posições em Aberto',
      whyUs: 'Porquê a FUTURIS?',
      whyUsList: {
        training: 'Formação Contínua',
        projects: 'Projetos Internacionais',
        shifts: 'Turnos Flexíveis'
      },
      spontaneous: 'Candidatura Espontânea',
      form: {
        firstName: 'Nome Próprio',
        lastName: 'Apelido',
        email: 'Email',
        cv: 'CV / Currículo',
        fileType: 'PDF, DOC até 5MB'
      },
      jobs: {
        mechEng: 'Engenheiro Mecânico Sénior',
        electrician: 'Eletricista Industrial',
        safety: 'Técnico de Segurança (HSE)'
      }
    }
  },
  ca: {
    common: {
      readMore: 'Llegir Més',
      viewDetails: 'Veure Detalls',
      learnMore: 'Saber Més',
      back: 'Tornar',
      loading: 'Carregant',
      details: 'Detalls'
    },
    nav: {
      home: 'Inici',
      company: 'Empresa',
      businessAreas: 'Àrees d\'Actuació',
      assembly: 'Muntatge Electromecànic',
      maintenancePrev: 'Caldereria',
      maintenanceCorr: 'Soldadura',
      clients: 'Clients',
      news: 'Notícies',
      careers: 'Carrera',
      contact: 'Contactes',
    },
    hero: {
      title: 'Enginyeria de Precisió per al Futur Industrial',
      subtitle: 'Solucions integrals en muntatge, manteniment i optimització operativa.',
      cta: 'Explorar Serveis',
    },
    home: {
      features: {
        engineering: 'Integració avançada CAD/CAM i mecànica de precisió.',
        safety: 'Protocols de zero accidents i avaluació rigorosa de riscos.',
        efficiency: 'Principis de manufactura Lean per reduir temps d\'inactivitat.'
      },
      intro: 'FUTURIS se situa a l\'avantguarda del sector industrial europeu. Combinem dècades d\'experiència amb integració tecnològica moderna per oferir solucions que no només són efectives, sinó transformadores. Des del muntatge de maquinària pesant fins a algoritmes de manteniment predictiu, impulsem la indústria del demà.',
      stats: {
        countries: 'Països Servits',
        projects: 'Projectes Completats',
        safety: 'Índex de Seguretat',
        engineers: 'Enginyers Qualificats',
        support: 'Suport Actiu'
      }
    },
    company: {
      title: 'Sobre FUTURIS',
      description: 'Som líders en solucions industrials avançades, compromesos amb l\'excel·lència tècnica i la innovació sostenible a tot Europa.',
      values: {
        engineering: 'Excel·lència en Enginyeria',
        safety: 'Seguretat Integral',
        efficiency: 'Eficiència Operacional'
      },
      about: {
        title: 'Sobre Nosaltres',
        intro: 'FUTURIS neix de l\'experiència i el compromís amb l\'excel·lència en el manteniment i muntatge industrial. Actuem en el sector amb un enfocament pràctic, tecnològic i orientat a resultats, oferint solucions eficients i segures per als reptes més exigents de la indústria.',
        trust: 'Treballem amb transparència, rigor i responsabilitat. Cada projecte que assumim és tractat amb serietat i dedicació, perquè creiem que la confiança construeix relacions duradores.',
        roles: 'Comptem amb un equip multidisciplinari compost per professionals altament qualificats — soldadors, canoners, calderers industrials, pintors, ajudants tècnics i especialistes en muntatge — preparats per intervenir amb precisió en entorns industrials d\'alta complexitat.'
      },
      training: {
        title: 'Formació i Certificació Tècnica',
        description: 'A FUTURIS, la qualificació tècnica no és només un requisit, és un compromís permanent.',
        standards: 'Tots els membres del nostre equip passen per formació especialitzada i contínua, garantint conformitat amb les normes industrials internacionals més rigoroses. Treballem d\'acord amb els estàndards ASME IX i AWS, assegurant competència en els processos de soldadura TIG, RX, MIG i MAG, així com en operacions de muntatge industrial, manteniment preventiu, aturades tècniques i pintura industrial.',
        outcome: 'Aquesta preparació ens permet actuar amb seguretat, eficiència i total control de qualitat en cada intervenció.'
      },
      challenges: {
        title: 'Preparats per a Tots els Reptes',
        description: 'Assumim cada projecte com una oportunitat de crear valor per als nostres clients. Ja sigui en una aturada de manteniment, un muntatge electromecànic o una intervenció correctiva urgent, la nostra prioritat és garantir continuïtat operativa, seguretat i rendiment.',
        commitment: 'Estem preparats per respondre a les necessitats específiques de la seva empresa amb professionalisme, rigor tècnic i capacitat d\'execució.'
      },
      team: {
        title: 'El Nostre Equip',
        subtitle: 'Experiència que Marca la Diferència',
        description: 'El veritable actiu de FUTURIS és el seu equip. Reunim professionals amb sòlida experiència en el sector industrial, preparats per afrontar contextos exigents i projectes d\'elevada responsabilitat tècnica. La combinació entre coneixement, pràctica i actualització constant ens permet oferir solucions eficaces i sostenibles.',
        values: 'Creiem que l\'excel·lència tècnica es construeix amb formació contínua, treball en equip i atenció al detall.',
        cta: 'Vol formar part del nostre equip? Estem sempre disponibles per conèixer nous talents que comparteixin els nostres valors de compromís, qualitat i responsabilitat.'
      }
    },
    services: {
      title: 'Les Nostres Capacitats',
      description: 'Oferim un espectre complet de serveis industrials dissenyats per maximitzar la productivitat.',
      intro: 'Per respondre de forma completa a les necessitats del mercat industrial, actuem en les següents àrees:'
    },
    businessAreasList: {
      boilermaking: {
        title: 'Caldereria',
        description: 'Fabricació, instal·lació i manteniment d\'equips i estructures metàl·liques industrials, incloent calderes i sistemes associats.',
        points: ["Estructures Metàl·liques", "Instal·lació de Calderes", "Manteniment"]
      },
      electromechanical: {
        title: 'Muntatge Electromecànic',
        description: 'Instal·lació i integració d\'equips elèctrics i mecànics en entorns industrials, assegurant alineament tècnic i operatiu.',
        points: ["Integració d'Equips", "Alineament Tècnic", "Configuració Operativa"]
      },
      piping: {
        title: 'Canonada Industrial',
        description: 'Instal·lació, manteniment i adaptació de sistemes de canonades per a la conducció de fluids industrials, amb focus en seguretat i eficiència.',
        points: ["Conducció de Fluids", "Adaptació de Canonades", "Sistemes de Seguretat"]
      },
      welding: {
        title: 'Serveis de Soldadura',
        description: 'Execució de soldadura en els processos TIG, RX, MIG i MAG, d\'acord amb les normes ASME IX i AWS, garantint qualitat estructural i conformitat tècnica.',
        points: ["TIG / MIG / MAG / RX", "ASME IX & AWS", "Qualitat Estructural"]
      },
      polishing: {
        title: 'Poliment Industrial',
        description: 'Tractament i acabat superficial de components metàl·lics, millorant rendiment, durabilitat i presentació.',
        points: ["Tractament Superficial", "Acabat", "Millora de Rendiment"]
      },
      painting: {
        title: 'Pintura Industrial',
        description: 'Aplicació de revestiments protectors i tècnics en estructures i equips industrials, assegurant resistència i protecció contra agents externs.',
        points: ["Revestiments Protectors", "Aplicació Tècnica", "Resistència"]
      }
    },
    businessAreasPage: {
      serviceOverview: 'Descripció del Servei',
      keyCapabilities: 'Capacitats Clau',
      safetyDesc: 'Els nostres equips especialitzats estan equipats amb eines d\'última generació per gestionar els entorns industrials més exigents. Seguim estrictes protocols de seguretat (HSE) i estàndards de qualitat per garantir que les seves operacions funcionin sense problemes.',
      ctaTitle: 'Necessita aquest servei?',
      ctaDesc: 'Contacti amb el nostre departament d\'enginyeria per obtenir una avaluació tècnica.',
      ctaButton: 'Sol·licitar Pressupost',
      back: 'Tornar a Àrees'
    },
    clients: {
      title: 'Socis que Confien en Nosaltres',
      intro: 'Estem orgullosos de servir alguns dels noms més respectats en els sectors automotriu, aeroespacial i energètic.',
      ctaTitle: 'Vol unir-se a la nostra xarxa?',
      ctaDesc: 'Oferim solucions personalitzades adaptades a les necessitats específiques de la seva indústria.',
      ctaButton: 'Contactar Vendes'
    },
    news: {
      title: 'Notícies',
      readArticle: 'Llegir Article',
      items: [
        {
          title: 'FUTURIS Expandeix Operacions a Alemanya',
          category: 'Corporatiu',
          excerpt: 'Estem encantats d\'anunciar l\'obertura del nostre nou centre logístic a Hamburg.'
        },
        {
          title: 'Nova Certificació ISO 45001',
          category: 'Seguretat',
          excerpt: 'El nostre compromís amb la salut i seguretat ocupacional ha estat reconegut.'
        },
        {
          title: 'Innovació en Manteniment Predictiu',
          category: 'Tecnologia',
          excerpt: 'Com la IA i els sensors IoT estan revolucionant el nostre enfocament.'
        },
        {
          title: 'Informe Anual de Sostenibilitat',
          category: 'Sostenibilitat',
          excerpt: 'Reducció de la nostra petjada de carboni en un 20% en l\'últim any fiscal.'
        }
      ]
    },
    contact: {
      title: 'Parlem del seu Projecte',
      intro: 'Estem llestos per ajudar-lo amb els seus reptes industrials. Ja sigui que necessiti una consulta per a una nova línia de muntatge o suport de manteniment d\'emergència, el nostre equip està disponible.',
      details: {
        headquarters: 'Seu Central',
        phone: 'Telèfon',
        email: 'Correu Electrònic',
        mainOffice: 'Oficina Principal',
        support247: 'Suport 24/7'
      },
      form: {
        name: 'Nom Complet',
        email: 'Correu Electrònic',
        message: 'Missatge',
        submit: 'Enviar Missatge',
        sending: 'Enviant...',
        success: 'Missatge enviat correctament.',
        successTitle: 'Missatge Enviat',
        reset: 'Enviar un altre'
      }
    },
    careers: {
      title: 'Uneix-te a l\'Equip',
      subtitle: 'Busquem talent tècnic apassionat per la indústria.',
      upload: 'Pujar CV (PDF)',
      apply: 'Enviar Candidatura',
      openPositions: 'Posicions Obertes',
      whyUs: 'Per què FUTURIS?',
      whyUsList: {
        training: 'Formació Contínua',
        projects: 'Projectes Internacionals',
        shifts: 'Torns Flexibles'
      },
      spontaneous: 'Candidatura Espontània',
      form: {
        firstName: 'Nom',
        lastName: 'Cognoms',
        email: 'Correu Electrònic',
        cv: 'CV / Currículum',
        fileType: 'PDF, DOC fins a 5MB'
      },
      jobs: {
        mechEng: 'Enginyer Mecànic Sènior',
        electrician: 'Electricista Industrial',
        safety: 'Oficial de Seguretat (HSE)'
      }
    }
  },
  en: {
    common: {
      readMore: 'Read More',
      viewDetails: 'View Details',
      learnMore: 'Learn More',
      back: 'Back',
      loading: 'Loading',
      details: 'Details'
    },
    nav: {
      home: 'Home',
      company: 'Company',
      businessAreas: 'Areas of Expertise',
      assembly: 'Electromechanical Assembly',
      maintenancePrev: 'Boilermaking',
      maintenanceCorr: 'Welding',
      clients: 'Clients',
      news: 'News',
      careers: 'Careers',
      contact: 'Contact',
    },
    hero: {
      title: 'Precision Engineering for the Industrial Future',
      subtitle: 'Integral solutions in assembly, maintenance, and operational optimization.',
      cta: 'Explore Services',
    },
    home: {
      features: {
        engineering: 'Advanced CAD/CAM integration and precision mechanics.',
        safety: 'Zero-accident protocols and rigorous risk assessment.',
        efficiency: 'Lean manufacturing principles to reduce downtime.'
      },
      intro: 'FUTURIS stands at the forefront of the European industrial sector. We combine decades of expertise with modern technological integration to deliver solutions that are not just effective, but transformative. From heavy machinery assembly to predictive maintenance algorithms, we power the industry of tomorrow.',
      stats: {
        countries: 'Countries Served',
        projects: 'Projects Completed',
        safety: 'Safety Rating',
        engineers: 'Skilled Engineers',
        support: 'Support Active'
      }
    },
    company: {
      title: 'About FUTURIS',
      description: 'We are leaders in advanced industrial solutions, committed to technical excellence and sustainable innovation across Europe.',
      values: {
        engineering: 'Engineering Excellence',
        safety: 'Integral Safety',
        efficiency: 'Operational Efficiency'
      },
      about: {
        title: 'About Us',
        intro: 'FUTURIS is born from experience and commitment to excellence in industrial maintenance and assembly. We operate in the sector with a practical, technological, and results-oriented approach, offering efficient and safe solutions for the industry\'s most demanding challenges.',
        trust: 'We work with transparency, rigor, and responsibility. Every project we undertake is treated with seriousness and dedication because we believe that trust builds lasting relationships.',
        roles: 'We rely on a multidisciplinary team composed of highly qualified professionals — welders, pipefitters, industrial boilermakers, painters, technical assistants, and assembly specialists — prepared to intervene with precision in highly complex industrial environments.'
      },
      training: {
        title: 'Technical Training and Certification',
        description: 'At FUTURIS, technical qualification is not just a requirement; it is a permanent commitment.',
        standards: 'All members of our team undergo specialized and continuous training, ensuring compliance with the strictest international industrial standards. We work according to ASME IX and AWS standards, ensuring competence in TIG, RX, MIG, and MAG welding processes, as well as in industrial assembly operations, preventive maintenance, technical shutdowns, and industrial painting.',
        outcome: 'This preparation allows us to act with safety, efficiency, and total quality control in every intervention.'
      },
      challenges: {
        title: 'Ready for All Challenges',
        description: 'We take on every project as an opportunity to create value for our clients. Whether in a maintenance shutdown, electromechanical assembly, or urgent corrective intervention, our priority is to ensure operational continuity, safety, and performance.',
        commitment: 'We are ready to respond to your company\'s specific needs with professionalism, technical rigor, and execution capability.'
      },
      team: {
        title: 'Our Team',
        subtitle: 'Experience that Makes the Difference',
        description: 'The true asset of FUTURIS is its team. We gather professionals with solid experience in the industrial sector, prepared to face demanding contexts and projects of high technical responsibility. The combination of knowledge, practice, and constant updating allows us to offer effective and sustainable solutions.',
        values: 'We believe that technical excellence is built with continuous training, teamwork, and attention to detail.',
        cta: 'Want to be part of our team? We are always open to meeting new talent who share our values of commitment, quality, and responsibility.'
      }
    },
    services: {
      title: 'Our Capabilities',
      description: 'We offer a full spectrum of industrial services designed to maximize productivity.',
      intro: 'To fully respond to the needs of the industrial market, we operate in the following areas:'
    },
    businessAreasList: {
      boilermaking: {
        title: 'Boilermaking',
        description: 'Manufacture, installation, and maintenance of industrial metal equipment and structures, including boilers and associated systems.',
        points: ["Metal Structures", "Boiler Installation", "Maintenance"]
      },
      electromechanical: {
        title: 'Electromechanical Assembly',
        description: 'Installation and integration of electrical and mechanical equipment in industrial environments, ensuring technical and operational alignment.',
        points: ["Equipment Integration", "Technical Alignment", "Operational Setup"]
      },
      piping: {
        title: 'Industrial Piping',
        description: 'Installation, maintenance, and adaptation of piping systems for industrial fluid conduction, focusing on safety and efficiency.',
        points: ["Fluid Conduction", "Piping Adaptation", "Safety Systems"]
      },
      welding: {
        title: 'Welding Services',
        description: 'Execution of welding in TIG, RX, MIG, and MAG processes, according to ASME IX and AWS standards, ensuring structural quality and technical compliance.',
        points: ["TIG / MIG / MAG / RX", "ASME IX & AWS", "Structural Quality"]
      },
      polishing: {
        title: 'Industrial Polishing',
        description: 'Surface treatment and finishing of metal components, improving performance, durability, and presentation.',
        points: ["Surface Treatment", "Finishing", "Performance Upgrade"]
      },
      painting: {
        title: 'Industrial Painting',
        description: 'Application of protective and technical coatings on industrial structures and equipment, ensuring resistance and protection against external agents.',
        points: ["Protective Coatings", "Technical Application", "Resistance"]
      }
    },
    businessAreasPage: {
      serviceOverview: 'Service Overview',
      keyCapabilities: 'Key Capabilities',
      safetyDesc: 'Our specialized teams are equipped with state-of-the-art tools to handle the most demanding industrial environments. We follow strict safety protocols (HSE) and quality standards to ensure your operations run smoothly.',
      ctaTitle: 'Need this service?',
      ctaDesc: 'Contact our engineering department to get a technical assessment.',
      ctaButton: 'Request Quote',
      back: 'Back to Areas'
    },
    clients: {
      title: 'Partners Who Trust Us',
      intro: 'We are proud to serve some of the most respected names in the automotive, aerospace, and energy sectors.',
      ctaTitle: 'Want to join our network?',
      ctaDesc: 'We deliver custom solutions tailored to your industry specific needs.',
      ctaButton: 'Contact Sales'
    },
    news: {
      title: 'News',
      readArticle: 'Read Article',
      items: [
        {
          title: 'FUTURIS Expands Operations to Germany',
          category: 'Corporate',
          excerpt: 'We are thrilled to announce the opening of our new logistical hub in Hamburg.'
        },
        {
          title: 'New ISO 45001 Certification Achieved',
          category: 'Safety',
          excerpt: 'Our commitment to occupational health and safety has been recognized.'
        },
        {
          title: 'Innovation in Predictive Maintenance',
          category: 'Technology',
          excerpt: 'How AI and IoT sensors are revolutionizing the way we approach corrective measures.'
        },
        {
          title: 'Annual Sustainability Report 2022',
          category: 'Sustainability',
          excerpt: 'Reducing our carbon footprint by 20% in the last fiscal year through green logistics.'
        }
      ]
    },
    contact: {
      title: 'Let\'s Discuss Your Project',
      intro: 'We are ready to assist you with your industrial challenges. Whether you need a consultation for a new assembly line or emergency maintenance support, our team is available.',
      details: {
        headquarters: 'Headquarters',
        phone: 'Phone',
        email: 'Email',
        mainOffice: 'Main Office',
        support247: '24/7 Support'
      },
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully.',
        successTitle: 'Message Sent',
        reset: 'Send another'
      }
    },
    careers: {
      title: 'Join the Team',
      subtitle: 'We are looking for technical talent passionate about industry.',
      upload: 'Upload CV (PDF)',
      apply: 'Submit Application',
      openPositions: 'Open Positions',
      whyUs: 'Why FUTURIS?',
      whyUsList: {
        training: 'Continuous Training',
        projects: 'International Projects',
        shifts: 'Flexible Shifts'
      },
      spontaneous: 'Spontaneous Application',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        cv: 'CV / Resume',
        fileType: 'PDF, DOC up to 5MB'
      },
      jobs: {
        mechEng: 'Senior Mechanical Engineer',
        electrician: 'Industrial Electrician',
        safety: 'Safety Officer (HSE)'
      }
    }
  }
};