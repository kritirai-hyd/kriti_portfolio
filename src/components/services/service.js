
const service = [
  {
    id: 1,
    color: 'secondary',
    heading: 'Business Websites &\nSEO',
    description: 'Business Website Development + Google-Friendly Websites',
    items: [
      'Responsive Web Design',
      'On-Page & Technical SEO',
      'Mobile-First Development',
      'Google Search Visibility',
    ],
    readmore: 'Read More ↗',
    link: '/services/responsive-web-design',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },

  {
    id: 2,
    color: 'primary',
    heading: 'Web & Mobile\nApplications',
    description: 'Custom Web Applications + Mobile Application Development',
    items: [
      'React & Next.js',
      'Custom Dashboards',
      'Booking & Business Systems',
      'Android & iOS Applications',
    ],
    readmore: 'Read More ↗',
    link: '/services/web-application-development',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="12" y1="6" x2="12" y2="14" />
        <line x1="9" y1="10" x2="15" y2="10" />
      </svg>
    ),
  },

  {
    id: 3,
    color: 'secondary',
    heading: 'Performance, Security\n& Support',
    description: 'Speed Optimization + Website Security + Ongoing Support',
    items: [
      'Website Speed Optimization',
      'Security & Threat Protection',
      'Bug Fixes & Updates',
      'Ongoing Technical Support',
    ],
    readmore: 'Read More ↗',
    link: '/services/website-maintenance',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];
export default service;