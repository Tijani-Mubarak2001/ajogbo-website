// Contact constants — fill these in when available
const base = import.meta.env.BASE_URL;

export const CONTACT_EMAIL = '';
export const INSTAGRAM_URL = '';
export const LINKEDIN_URL = '';
export const WHATSAPP_URL = 'https://chat.whatsapp.com/CVPa1xNmk2UL2ct2C1N5WI';

export const programmeAreas = [
  {
    number: '01',
    icon: 'Monitor',
    title: 'Technology & AI',
    description:
      'Introduce students to software engineering, artificial intelligence, digital skills and the many pathways available within the technology industry.',
  },
  {
    number: '02',
    icon: 'Briefcase',
    title: 'Career Exposure',
    description:
      'Professionals from diverse industries share their experiences, career journeys and the realities of their fields so students can make informed decisions.',
  },
  {
    number: '03',
    icon: 'Users',
    title: 'Mentorship',
    description:
      'Students connect directly with professionals who can provide sustained guidance, encouragement and perspective beyond a single interaction.',
  },
  {
    number: '04',
    icon: 'Star',
    title: 'Leadership & Life Skills',
    description:
      'Sessions on confidence, discipline, decision-making, goal setting, financial responsibility and preparation for life after secondary school.',
  },
  {
    number: '05',
    icon: 'BookOpen',
    title: 'Educational Support',
    description:
      'Where resources permit, alumni contribute towards school bags, books, writing materials, uniforms and other essential educational items.',
  },
  {
    number: '06',
    icon: 'MessageCircle',
    title: 'Career Conversations',
    description:
      'Recurring conversations that help students understand different academic and professional pathways available to them.',
  },
];

export const impactItems = [
  {
    title: 'Career Awareness',
    description:
      'Students gain exposure to career pathways and opportunities beyond their immediate environment.',
    icon: 'Compass',
  },
  {
    title: 'Technology Awareness',
    description:
      'Students understand AI, software engineering and digital opportunities shaping the modern world.',
    icon: 'Cpu',
  },
  {
    title: 'Mentorship Access',
    description:
      'Students gain access to professionals and role models who have navigated similar starting points.',
    icon: 'Heart',
  },
  {
    title: 'Personal Development',
    description:
      'Students develop stronger leadership, confidence and decision-making skills through structured sessions.',
    icon: 'TrendingUp',
  },
  {
    title: 'Educational Support',
    description:
      'Students with identified needs receive practical educational materials to support their learning.',
    icon: 'Package',
  },
  {
    title: 'Alumni Engagement',
    description:
      'The school develops a sustainable culture of alumni involvement and community service.',
    icon: 'Globe',
  },
];

export const professions = [
  'Medicine',
  'Law',
  'Technology',
  'Finance',
  'Engineering',
  'Entrepreneurship',
  'Education',
  'Business',
  'Accounting',
  'Architecture',
  'Agriculture',
  'Media & Communications',
];

export const timelineSteps = [
  {
    number: '01',
    title: 'Mobilise',
    description:
      'Reconnect interested alumni and build the volunteer network. Establish a coordination group for planning, speakers and logistics.',
  },
  {
    number: '02',
    title: 'Prepare',
    description:
      'Coordinate speakers, mentors, programme schedule, educational support items and all logistical requirements.',
  },
  {
    number: '03',
    title: 'Engage',
    description:
      'Deliver mentorship sessions, career talks, technology workshops and life-skills discussions directly with students.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'Provide educational materials — school bags, books, writing materials and uniforms — to students with identified needs.',
  },
  {
    number: '05',
    title: 'Continue',
    description:
      'Maintain recurring alumni-student engagement well beyond the initial outreach. Build lasting relationships.',
  },
];

export const educationSupportItems = [
  { icon: 'ShoppingBag', label: 'School Bags' },
  { icon: 'BookOpen', label: 'Books' },
  { icon: 'PenTool', label: 'Writing Materials' },
  { icon: 'Shirt', label: 'School Uniforms' },
  { icon: 'Layers', label: 'Learning Resources' },
  { icon: 'Settings', label: 'Programme Logistics' },
];

export const documentationItems = [
  'Volunteer participation records',
  'Sessions delivered and content covered',
  'Students reached per activity',
  'Educational materials provided',
  'Programme photographs where appropriate',
  'Feedback from the school and students',
  'Subsequent activities and follow-ups',
];

export const teamMembers = [
  {
    name: 'Tijani Mubarak',
    role: 'President & Founder',
    description:
      'Backend Engineer and former Head Prefect Boy of Ajogbo Grammar School. Founded this initiative to connect alumni with students through mentorship, technology and career guidance.',
    image: `${base}images/president.jpg`,
    placeholder: false,
  },
  {
    name: 'Lawal Rotimi',
    role: 'Vice President',
    description:
      'Supporting the coordination and execution of the initiative, helping mobilise the alumni volunteer network and plan programme activities.',
    image: `${base}images/vice-president.jpeg`,
    placeholder: false,
  },
  {
    name: 'Fasina Adebisi',
    role: 'Treasurer',
    description:
      'Responsible for managing voluntary financial contributions and overseeing the provision of educational support materials to students.',
    image: null,
    placeholder: true,
  },
];
