const base = import.meta.env.BASE_URL;

// Central image manifest — update paths here if assets change
export const images = {
  logo: `${base}images/school_logo.jpeg`,
  founder: `${base}images/president.jpg`,
  vicePresident: `${base}images/vice-president.jpeg`,
  poster: `${base}images/programme-poster.jpeg`,
  students: `${base}images/ajogbo-students-picture.jpg`,
  gallery: [
    {
      src: `${base}images/outreach.jpeg`,
      alt: 'Alumni outreach session with Ajogbo Grammar School students',
      span: 'large',
    },
    {
      src: `${base}images/outreach2.jpeg`,
      alt: 'Community engagement — Ajogbo Future Leaders Initiative outreach',
      span: 'medium',
    },
    {
      src: `${base}images/ajogbo-students-picture.jpg`,
      alt: 'Ajogbo Grammar School students',
      span: 'small',
    },
    {
      src: `${base}images/programme-poster.jpeg`,
      alt: 'Ajogbo Future Leaders Initiative programme poster',
      span: 'small',
    },
    {
      src: `${base}images/president.jpg`,
      alt: 'Tijani Mubarak — Founder, Ajogbo Future Leaders Initiative',
      span: 'small',
    },
    {
      src: `${base}images/vice-president.jpeg`,
      alt: 'Vice President, Ajogbo Future Leaders Initiative',
      span: 'medium',
    },
    {
      src: `${base}images/school_logo.jpeg`,
      alt: 'Ajogbo Grammar School logo',
      span: 'small',
    },
  ],
};
