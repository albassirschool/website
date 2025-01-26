export interface Dictionary {
  header: {
    nav: {
      home: string;
      about: string;
      courses: string;
      forStudents: string;
      forCompanies: string;
      contact: string;
      resources: string;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    stats: {
      items: Array<{
        label: string;
        value: string;
      }>;
    };
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    courses: {
      title: string;
      subtitle: string;
      duration: string;
      level: string;
      featured: Array<{
        title: string;
        description: string;
        duration: string;
        level: string;
        image: string;
      }>;
      viewAll: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: Array<{
        name: string;
        role: string;
        content: string;
        image: string;
      }>;
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
  about: {
    title: string;
    content: string[];
    mission: {
      title: string;
      content: string;
    };
    values: {
      title: string;
      items: string[];
    };
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    };
  };
  courses: {
    title: string;
    duration: string;
    level: string;
    items: Array<{
      title: string;
      description: string;
      duration: string;
      level: string;
    }>;
  };
  forCompanies: {
    title: string;
    subtitle: string;
    services: Array<{
      title: string;
      description: string;
      benefits: string[];
    }>;
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  forStudents: {
    title: string;
    subtitle: string;
    resources: Array<{
      title: string;
      description: string;
    }>;
    admissions: {
      title: string;
      description: string;
      steps: string[];
    };
    cta: string;
  };
  resources: {
    title: string;
    catalog: {
      title: string;
      description: string;
      downloadButton: string;
    };
    documentation: {
      title: string;
      description: string;
    };
    faq: {
      title: string;
      description: string;
    };
  };
  footer: {
    address: string;
    phone: string;
    email: string;
    social: {
      title: string;
      links: {
        facebook: string;
        instagram: string;
        tiktok: string;
      };
    };
    legal: {
      title: string;
      privacy: string;
      terms: string;
    };
    quickLinks: {
      title: string;
      about: string;
      courses: string;
      contact: string;
    }
    copyright: string;
  };
}
