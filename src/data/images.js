const base = import.meta.env.BASE_URL;

// Helper to build a gallery entry
const g = (src, alt, span) => ({ src: `${base}images/${src}`, alt, span });

// Central image manifest — update paths here if assets change
export const images = {
  logo: `${base}images/school_logo.jpeg`,
  founder: `${base}images/president.jpg`,
  vicePresident: `${base}images/vice-president.jpeg`,
  poster: `${base}images/programme-poster.jpeg`,
  students: `${base}images/ajogbo-students-picture.jpg`,
  gallery: [
    // Programme outreach images
    g('outreach.jpeg',  'Alumni outreach session with Ajogbo Grammar School students', 'large'),
    g('outreach2.jpeg', 'Community engagement — Ajogbo Future Leaders Initiative outreach', 'medium'),
    g('outreach4.jpeg',  'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach5.jpeg',  'Ajogbo Future Leaders Initiative programme outreach', 'large'),
    g('outreach6.jpeg',  'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach7.jpeg',  'Ajogbo Future Leaders Initiative programme outreach', 'medium'),
    g('outreach8.jpeg',  'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach9.jpeg',  'Ajogbo Future Leaders Initiative programme outreach', 'large'),
    g('outreach10.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach11.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'medium'),
    g('outreach12.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach13.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'large'),
    g('outreach14.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach15.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'medium'),
    g('outreach16.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach17.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'large'),
    g('outreach18.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach19.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'medium'),
    g('outreach20.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach21.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'large'),
    g('outreach22.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach23.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'medium'),
    g('outreach24.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach25.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'large'),
    g('outreach26.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach27.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'medium'),
    g('outreach28.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach29.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'large'),
    g('outreach30.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach31.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'medium'),
    g('outreach32.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'small'),
    g('outreach33.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'large'),
    g('outreach34.jpeg', 'Ajogbo Future Leaders Initiative programme outreach', 'medium'),
    // Other photos
    g('ajogbo-students-picture.jpg', 'Ajogbo Grammar School students', 'small'),
    g('programme-poster.jpeg', 'Ajogbo Future Leaders Initiative programme poster', 'small'),
    g('school_logo.jpeg', 'Ajogbo Grammar School logo', 'small'),
  ],
};
