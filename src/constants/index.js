export const myProjects = [
  {
    id: 1,
    title: "Gold Price Prediction",
    description:
      "LSTM‑based time‑series model forecasting gold prices with an interactive web UI for charts and custom horizons.",
    subDescription: [
      "Data preparation and feature scaling using Pandas/NumPy.",
      "Model training and inference with TensorFlow; live plotting on the frontend.",
    ],
    href: {
      live: "https://github.com/vishwateja231/gold-price-prediction",
      github: "https://github.com/vishwateja231/gold-price-prediction",
    },
    logo: "",
    image: "/assets/projects/gold-price-project.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/vite.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 2,
    title: "URL Shortener",
    description:
      "Full‑stack service to create branded short links with click tracking and basic analytics dashboard.",
    subDescription: [
      "Responsive React frontend styled with Tailwind CSS.",
      "Node.js/Express API with MongoDB persistence and unique slug generation.",
    ],
    href: {
      live: "https://url-shortner-iota-opal.vercel.app/",
      github: "https://github.com/vishwateja231/Url_shortener",
    },
    logo: "",
    image: "/assets/projects/url_shortner.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Express", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logos/javascript.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 6, name: "Mongoose", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 3,
    title: "Urban Turf",
    description:
      "A modern landing page experience focused on smooth animations, fast loads, and accessible components.",
    subDescription: [
      "Built with Vite and React for rapid iteration.",
      "Attention to a11y, keyboard navigation, and color contrast.",
    ],
    href: {
      live: "https://urbanturf.vercel.app/",
      github: "https://github.com/vishwateja231/urbanturf",
    },
    logo: "",
    image: "/assets/projects/urban-turn.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Supabase", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 4,
    title: "Weather Forecasting App",
    description:
      "Real‑time weather dashboard that shows current conditions and a 7‑day forecast using the Open‑Meteo API with geolocation‑aware lookups.",
    subDescription: [
      "Auto‑detects user location with browser geolocation and reverse geocoding.",
      "Clean, responsive UI optimized for mobile and desktop.",
    ],
    href: {
      live: "https://weather-forecast-001.netlify.app/",
      github: "https://github.com/vishwateja231/weather-forecasting",
    },
    logo: "",
    image: "/assets/projects/weather-forcasting.png",
    tags: [
      { id: 1, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "React", path: "/assets/logos/react.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 5,
    title: "CEW Network",
    description:
      "Organization website with clean information architecture, responsive layouts, and optimized assets.",
    subDescription: [
      "Built modular React components for maintainability.",
      "Added SEO‑friendly meta and performant images.",
    ],
    href: {
      live: "https://vishwateja231.github.io/CEW-Network/",
      github: "https://github.com/vishwateja231/CEW-Network",
    },
    logo: "",
    image: "/assets/projects/cew-network.png",
    tags: [
      { id: 1, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials = [
  { name: "GitHub", href: "https://github.com/vishwateja231", icon: "/assets/logos/github.svg" },
  { name: "LinkedIn", href: "https://linkedin.com/in/-vishwateja", icon: "/assets/socials/linkedIn.svg" },
  { name: "Instagram", href: "https://instagram.com/_vishwateja", icon: "/assets/socials/instagram.svg" },
];

export const experiences = [
  {
    title: "Data Science Intern",
    job: "National Small Industries Corporation (NSIC)",
    date: "Jan 2024 – Jul 2024",
    contents: [
      "Built and deployed a house price prediction model achieving >92% accuracy.",
      "Cleaned and analyzed housing data to identify key pricing drivers and trends.",
      "Improved performance via feature selection, hyperparameter tuning, and robust validation.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
