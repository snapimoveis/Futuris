export type Language = 'es' | 'pt' | 'ca' | 'en';

export interface NavItem {
  key: string;
  path: string;
  subItems?: NavItem[];
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  key: string;
  icon: string;
  path: string;
}

export interface TranslationStructure {
  common: {
    readMore: string;
    viewDetails: string;
    learnMore: string;
    back: string;
    loading: string;
    details: string;
  };
  nav: {
    home: string;
    company: string;
    businessAreas: string;
    assembly: string;
    maintenancePrev: string;
    maintenanceCorr: string;
    clients: string;
    news: string;
    careers: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  home: {
    features: {
      engineering: string;
      safety: string;
      efficiency: string;
    };
    intro: string;
    stats: {
      countries: string;
      projects: string;
      safety: string;
      engineers: string;
      support: string;
    }
  };
  company: {
    title: string;
    description: string;
    values: {
      engineering: string;
      safety: string;
      efficiency: string;
    };
    about: {
      title: string;
      intro: string;
      trust: string;
      roles: string;
    };
    training: {
      title: string;
      description: string;
      standards: string;
      outcome: string;
    };
    challenges: {
      title: string;
      description: string;
      commitment: string;
    };
    team: {
      title: string;
      subtitle: string;
      description: string;
      values: string;
      cta: string;
    };
  };
  services: {
    title: string;
    description: string;
    intro: string;
  };
  businessAreasList: {
    boilermaking: { title: string; description: string; points: string[] };
    electromechanical: { title: string; description: string; points: string[] };
    piping: { title: string; description: string; points: string[] };
    welding: { title: string; description: string; points: string[] };
    polishing: { title: string; description: string; points: string[] };
    painting: { title: string; description: string; points: string[] };
  };
  businessAreasPage: {
    serviceOverview: string;
    keyCapabilities: string;
    safetyDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    back: string;
  };
  clients: {
    title: string;
    intro: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  news: {
    title: string; // nav.news alias
    readArticle: string;
    items: {
      title: string;
      category: string;
      excerpt: string;
    }[];
  };
  contact: {
    title: string;
    intro: string;
    details: {
      headquarters: string;
      phone: string;
      email: string;
      mainOffice: string;
      support247: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      successTitle: string;
      reset: string;
    }
  };
  careers: {
    title: string;
    subtitle: string;
    openPositions: string;
    whyUs: string;
    whyUsList: {
      training: string;
      projects: string;
      shifts: string;
    };
    spontaneous: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      cv: string;
      fileType: string;
    };
    jobs: {
      mechEng: string;
      electrician: string;
      safety: string;
    };
    upload: string;
    apply: string;
  };
}