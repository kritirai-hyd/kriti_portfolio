import a from "../../assets/image/project-1.png";
import b from "../../assets/image/portfolio.png";
import c from "../../assets/image/couponszone-p1.png";
const project = [
  {
    id: 3,
    des: "CouponsZone is a user-friendly coupon and deals platform built to help users discover the latest offers, discounts, and deals from different brands. The website includes categorized coupon listings, search and filtering functionality, and a responsive interface designed to make finding valuable offers quick and easy.",
    title: "CouponsZone\nCoupon &\nDeals Website.",
    link: "https://www.couponszone.co.in",
    image: c,
    alt: "CouponsZone Coupon and Deals Website",
    isreversed: false,
    solution: ["Next.js", "React", "Node.js", "MongoDB", "SEO Optimization"],
    features: [
      "Coupon Listings",
      "Deals & Offers",
      "Brand Categories",
      "Search & Filtering",
    ],
  },
  {
    id: 1,
    des: "A modern and responsive car rental website designed to help customers easily explore available vehicles and submit booking inquiries. The website provides a clean user experience across desktop, tablet, and mobile devices, with a focus on performance, usability, and SEO.",
    title: "Car Rental\nWebsite\nDevelopment.",
    link: "https://www.vkgoacarrental.com",
    image: a,
    alt: "Car Rental Website",
    isreversed: false,
    solution: ["Next.js", "React", "CSS Modules", "SEO Optimization"],
    features: [
      "Responsive Design",
      "Vehicle Listings",
      "Booking Inquiry",
      "Client-side Routing",
    ],
  },
  {
    id: 2,
    des: "A professional website created for a software development company to showcase its services, projects, and technical expertise. The website features a modern responsive design, optimized performance, and clear calls-to-action to help convert visitors into potential clients.",
    title: "Creative\nCoder\nWebsite.",
    link: "https://www.creativecoder.net",
    image: b,
    alt: "Creative Coder Website",
    isreversed: true,
    solution: ["Next.js", "React", "CSS Modules", "Performance Optimization"],
    features: [
      "Service Showcase",
      "Project Portfolio",
      "Contact Form",
      "Responsive Layout",
    ],
  },
];
export default project;
