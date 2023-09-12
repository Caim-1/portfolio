import postmanImg from "../assets/Postman.webp";
import commerceImg from "../assets/Commerce.webp";
import weatherImg from "../assets/Weather.webp";

export const projects = [
  {
    title: "Postman clone (lite)",
    img: postmanImg,
    demoUrl: "https://caim-1.github.io/postman-clone-app/",
    githubUrl: "https://github.com/Caim-1/postman-clone-app",
    description:
      "A (lite) postman clone that emulates Postman's most commonly used features.",
    tags: ["React", "TypeScript", "Bootstrap", "Axios"],
  },
  {
    title: "E-commerce App",
    img: commerceImg,
    demoUrl: "https://caim-1.github.io/react-ecommerce-app",
    githubUrl: "https://github.com/Caim-1/react-ecommerce-app",
    description:
      "An e-commerce web application where you can add products to cart, change quantities of items and proceed to checkout. Built with commerce.js and stripe.",
    tags: ["React", "TypeScript", "Stripe", "Material UI"],
  },
  {
    title: "Weather App",
    img: weatherImg,
    demoUrl: "https://caim-1.github.io/react-weather-app/",
    githubUrl: "https://github.com/Caim-1/react-weather-app",
    description:
      "A simple web application which displays a weather forecast. Data provided by OpenWeatherMap API.",
    tags: ["React", "TypeScript"],
  },
];

export const profileDescription =
  "Welcome to my portfolio website! My name is Szymon Siudzinski, a self-taught web developer driven by a boundless passion for coding and creating captivating online experiences. With a strong determination to continuously learn and grow, I have honed my skills in front-end and some back-end development. Through my portfolio, you will discover a collection of projects that showcase my ability to craft various and functional websites. From responsive designs to user experiences, I hope to deliver results that satisfy user expectations.";

export const interests = [
  "Programming",
  "Video Games",
  "The Internet",
  "Playing the guitar",
];

export const contactLinks = {
  gitHub: "https://github.com/Caim-1",
  linkedIn: "https://github.com/Caim-1",
};
