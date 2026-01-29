import nest from "../assets/nestmart.png";
import revo from "../assets/revo.png";

import img1 from "../assets/nestmart/i1.png";
import img2 from "../assets/nestmart/i2.png";
import img3 from "../assets/nestmart/i3.png";
import img4 from "../assets/nestmart/i4.png";
import img5 from "../assets/nestmart/i5.png";
import img6 from "../assets/nestmart/i6.png";
import img7 from "../assets/nestmart/i7.png";
import img8 from "../assets/nestmart/i8.png";
import img9 from "../assets/nestmart/i9.png";
import img10 from "../assets/nestmart/i10.png";
import img11 from "../assets/nestmart/i11.png";

import img12 from "../assets/revo/i1.png";
import img13 from "../assets/revo/i2.png";
import img14 from "../assets/revo/i3.png";
import img15 from "../assets/revo/i4.png";
import img16 from "../assets/revo/i5.png";
import img17 from "../assets/revo/i6.png";
import img18 from "../assets/revo/i7.png";
import img19 from "../assets/revo/i8.png";

import r1 from "../assets/randomuser/i1.png";
import r2 from "../assets/randomuser/i2.png";
import r3 from "../assets/randomuser/i3.png";
import r4 from "../assets/randomuser/i4.png";

import f1 from "../assets/foodtuck/f1.png";
import f2 from "../assets/foodtuck/f2.png";
import f3 from "../assets/foodtuck/f3.png";
import f4 from "../assets/foodtuck/f4.png";
import f5 from "../assets/foodtuck/f5.png";
import f6 from "../assets/foodtuck/f6.png";
import f7 from "../assets/foodtuck/f7.png";
import f8 from "../assets/foodtuck/f8.png";
import f9 from "../assets/foodtuck/f9.png";

import cr1 from "../assets/cara/cr1.png";
import cr2 from "../assets/cara/cr2.png";
import cr3 from "../assets/cara/cr3.png";
import cr5 from "../assets/cara/cr5.png";
import cr6 from "../assets/cara/cr6.png";
import cr7 from "../assets/cara/cr7.png";
import cr8 from "../assets/cara/cr8.png";
import cr9 from "../assets/cara/cr9.png";
import cr10 from "../assets/cara/cr10.png";

import v1 from "../assets/vetched/v1.png";
import v2 from "../assets/vetched/v2.png";
import v3 from "../assets/vetched/v3.png";
import v4 from "../assets/vetched/v4.png";

import y1 from "../assets/yelp/y1.png";
import y2 from "../assets/yelp/y2.png";
import y3 from "../assets/yelp/y3.png";
import y4 from "../assets/yelp/y4.png";

import ak1 from "../assets/ak/ak1.png";
import ak2 from "../assets/ak/ak2.png";
import ak3 from "../assets/ak/ak3.png";
import ak4 from "../assets/ak/ak4.png";

import ad1 from "../assets/adan/ad1.png";
import ad2 from "../assets/adan/ad2.png";
import ad3 from "../assets/adan/ad3.png";
import ad4 from "../assets/adan/ad4.png";

import ox1 from "../assets/oxford/ox1.png";
import ox2 from "../assets/oxford/ox2.png";
import ox3 from "../assets/oxford/ox3.png";
import ox4 from "../assets/oxford/ox4.png";

import card_prev from "../assets/mentor/card_prev.png";
import fylo from "../assets/mentor/fylo.png";
import product_prev from "../assets/mentor/product_prev.png";
import status from "../assets/mentor/status.png";

export const projectsData = [
  {
    title: "NestMart — E-Commerce Platform",
    description:
      "A modern, fully responsive e-commerce web application built with React.js and Tailwind CSS. Features include product search, category filtering, a cart system, and a clean, user-friendly interface designed from scratch.",
    year: "2025",
    role: "Front-end Developer",
    path: "https://nest-mart-oesx.vercel.app/",
    github: "https://github.com/saadzeb/nestmart",
    img: nest,
    technologies: ["React", "Tailwind CSS", "Context API"],
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11],
  },

  {
    title: "Revo Medical Billing Web App",
    description:
      "A professional medical billing web application developed from a Figma design using HTML, CSS, JavaScript, and Tailwind CSS. Includes service pages, contact forms, specialties, and smooth UI transitions.",
    year: "2024",
    role: "Front-end Developer",
    path: "https://revo-293.netlify.app/",
    github: "https://github.com/saadzeb/revo-medical",
    img: revo,
    technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    images: [img12, img13, img14, img15, img16, img17, img18, img19],
  },

  {
    title: "Random User Fetcher App",
    description:
      "A modern user interface application that fetches data from the RandomUser API with pagination, filtering, loading shimmer effects, and dynamic query parameters for better performance and scalability.",
    year: "2025",
    role: "React Developer",
    path: "https://random-user-explorer-delta.vercel.app/",
    github: "https://github.com/saadzeb/random-user",
    img: r1,
    technologies: ["React", "Tailwind CSS", "Context API", "API Fetching"],
    images: [r1, r2, r3, r4],
  },

  {
    title: "Food-Tuck — E-Commerce Platform",
    description:
      "A fully responsive food e-commerce platform built with React.js and Tailwind CSS. Features include product browsing, category filters, cart functionality, and a smooth, modern user experience.",
    year: "2025",
    role: "React Developer",
    path: "https://foodtuck-edu123.web.app/",
    github: "https://github.com/saadzeb/foodtuck",
    img: f1,
    technologies: ["React", "Tailwind CSS", "Context API", "API Fetching"],
    images: [f1, f2, f3, f4, f5, f6, f7, f8, f9],
  },

  {
    title: "Vetched Landing Page",
    description:
      "A fully responsive landing page built using HTML, CSS, and JavaScript. Designed with multiple sections, modern layout, and clean UI structure.",
    year: "2024",
    role: "HTML & CSS Developer",
    path: "https://vetched.vercel.app/",
    github: "https://github.com/saadzeb/vetched",
    img: v1,
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [v1, v2, v3, v4],
  },

  {
    title: "Cara E-Commerce Website",
    description:
      "A responsive e-commerce website built with HTML, CSS, and JavaScript. Includes product sections, shopping layout, and modern landing page design.",
    year: "2024",
    role: "HTML & CSS Developer",
    path: "https://cara-e-commerce-delta.vercel.app/",
    github: "https://github.com/saadzeb/cara-ecommerce",
    img: cr1,
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [cr1, cr2, cr3, cr5, cr6, cr7, cr8, cr9, cr10],
  },

  {
    title: "Oxford University Website",
    description:
      "A responsive university website built using HTML, CSS, and JavaScript. Features multiple informational sections with a clean and professional layout.",
    year: "2024",
    role: "HTML & CSS Developer",
    path: "https://exford-uni-website.vercel.app/",
    github: "https://github.com/saadzeb/oxford-clone",
    img: ox1,
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [ox1, ox2, ox3, ox4],
  },

  {
    title: "Yelp-Style Business Discovery Platform",
    description:
      "A modern business discovery platform built with React.js and Tailwind CSS. Includes advanced filtering with URL-synced queries, API-based data fetching, infinite scroll pagination, and individual business detail pages.",
    year: "2025",
    role: "React Developer",
    path: "https://yelp-style-business-discovery-platf.vercel.app/",
    github: "https://github.com/saadzeb/yelp-clone",
    img: y2,
    technologies: ["React", "Tailwind CSS", "Zustand"],
    images: [y1, y2, y3, y4],
  },

  {
    title: "Modern Portfolio Website",
    description:
      "A modern and fully responsive portfolio website for a client, featuring rich animations and smooth transitions using Framer Motion.",
    year: "2025",
    role: "React Developer",
    path: "https://adan-ktk-portfilo.vercel.app/",
    github: "https://github.com/saadzeb/portfolio-client",
    img: ad1,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    images: [ad1, ad2, ad3, ad4],
  },

  {
    title: "AK Poultry Consultant",
    description:
      "A professional business website built with React.js and Tailwind CSS. Includes multiple responsive sections to showcase services, company profile, and contact information.",
    year: "2026",
    role: "React Developer",
    path: "https://ak-poultry.vercel.app/",
    github: "https://github.com/saadzeb/ak-poultry",
    img: ak1,
    technologies: ["React", "Tailwind CSS"],
    images: [ak1, ak2, ak3, ak4],
  },

  {
    title: "Card Preview Component",
    description:
      "A clean and responsive UI card component built as part of a Frontend Mentor challenge using HTML and CSS. Focused on layout precision and modern design practices.",
    year: "2023",
    role: "HTML & CSS Developer",
    path: "https://card-preview-nu.vercel.app/",
    github: "https://github.com/saadzeb/cara-ecommerce",
    img: card_prev,
    technologies: ["HTML", "CSS"],
  },

  {
    title: "Fylo Landing Page",
    description:
      "A responsive landing page built from a Frontend Mentor design challenge using HTML and CSS. Emphasizes clean layout, typography, and responsive design.",
    year: "2023",
    role: "HTML & CSS Developer",
    path: "https://product-preview-card-component-main-cyan-phi.vercel.app/",
    github: "https://github.com/saadzeb/cara-ecommerce",
    img: fylo,
    technologies: ["HTML", "CSS"],
  },

  {
    title: "Status Card Preview",
    description:
      "A minimal and responsive status card component created from a Frontend Mentor challenge using pure HTML and CSS.",
    year: "2023",
    role: "HTML & CSS Developer",
    path: "https://tats-preview-card-component-main.vercel.app/",
    github: "https://github.com/saadzeb/cara-ecommerce",
    img: status,
    technologies: ["HTML", "CSS"],
  },

  {
    title: "Product Preview Card",
    description:
      "A responsive product card UI built as part of a Frontend Mentor challenge using HTML and CSS, focusing on layout structure and visual hierarchy.",
    year: "2023",
    role: "HTML & CSS Developer",
    path: "https://product-preview-card-component-main-gamma-five.vercel.app/",
    github: "https://github.com/saadzeb/cara-ecommerce",
    img: product_prev,
    technologies: ["HTML", "CSS"],
  },
];
