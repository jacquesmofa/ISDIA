export interface ConferenceEdition {
  year: number;
  title: string;
  theme: string;
  tagline: string;
  dates: { start: string; end: string };
  startDateTime: string;
  venue: { name: string; city: string; country: string; timezone: string };
  coHosts: Array<{ name: string; acronym: string }>;
  tracks: Array<{ id: string; title: string; description: string; sessions: number }>;
  stats: Array<{ value: string; label: string }>;
}

export const currentEdition: ConferenceEdition = {
  year: 2027,
  title: 'International Summit on Disability Inclusion & Accessibility 2027',
  theme: 'Disability Inclusion and Accessible Employment for Sustainable Development',
  tagline: 'Building Inclusive Futures Through Accessibility, Employment, and Innovation',
  dates: { start: 'April 6, 2027', end: 'April 8, 2027' },
  startDateTime: '2027-04-06T09:00:00-04:00',
  venue: { name: 'Metro Toronto Convention Centre', city: 'Toronto', country: 'Canada', timezone: 'EST (UTC-4)' },
  coHosts: [
    { name: 'Lead Disability Inclusive Society', acronym: 'LDIS' },
    { name: 'Hope Inclusive Consultancy Inc.', acronym: 'HIC' },
  ],
  tracks: [
    { id: 'A', title: 'Corporate Leadership & Inclusive Workplaces', description: 'Best practices for Fortune 500 companies building disability-inclusive cultures, accessible recruitment pipelines, and reasonable accommodation frameworks.', sessions: 24 },
    { id: 'B', title: 'Accessible Technology & Digital Inclusion', description: 'Deep dives into AI-powered accessibility tools, WCAG compliance engineering, screen reader optimization, and universal UX design patterns.', sessions: 18 },
    { id: 'C', title: 'Policy, Advocacy & Global Frameworks', description: 'UN CRPD implementation strategies, national disability action plans, and cross-border policy harmonization for inclusive sustainable development.', sessions: 16 },
    { id: 'D', title: 'Inclusive Education & Workforce Development', description: 'Building accessible learning pathways, vocational training programs, and university-industry partnerships for career readiness.', sessions: 14 },
    { id: 'E', title: 'Healthcare Accessibility & Mental Wellness', description: 'Universal healthcare design, accessible medical devices, mental health support systems, and workplace wellness integration strategies.', sessions: 12 },
  ],
  stats: [
    { value: '50+', label: 'Countries Represented' },
    { value: '200+', label: 'Keynote Speakers' },
    { value: '120+', label: 'Interactive Sessions' },
    { value: '3', label: 'Transformative Days' },
  ],
};

export const futureEditions: ConferenceEdition[] = [
  {
    year: 2028,
    title: 'International Summit on Disability Inclusion & Accessibility 2028',
    theme: 'Technology-Driven Inclusion for the Next Decade',
    tagline: 'Harnessing Innovation to Accelerate Global Accessibility',
    dates: { start: 'April 4, 2028', end: 'April 6, 2028' },
    startDateTime: '2028-04-04T09:00:00-04:00',
    venue: { name: 'Metro Toronto Convention Centre', city: 'Toronto', country: 'Canada', timezone: 'EST (UTC-4)' },
    coHosts: [
      { name: 'Lead Disability Inclusive Society', acronym: 'LDIS' },
      { name: 'Hope Inclusive Consultancy Inc.', acronym: 'HIC' },
    ],
    tracks: [],
    stats: [],
  },
  {
    year: 2029,
    title: 'International Summit on Disability Inclusion & Accessibility 2029',
    theme: 'Global Solidarity for Universal Access',
    tagline: 'Uniting Nations for Barrier-Free Societies Worldwide',
    dates: { start: 'April 3, 2029', end: 'April 5, 2029' },
    startDateTime: '2029-04-03T09:00:00-04:00',
    venue: { name: 'Metro Toronto Convention Centre', city: 'Toronto', country: 'Canada', timezone: 'EST (UTC-4)' },
    coHosts: [
      { name: 'Lead Disability Inclusive Society', acronym: 'LDIS' },
      { name: 'Hope Inclusive Consultancy Inc.', acronym: 'HIC' },
    ],
    tracks: [],
    stats: [],
  },
];