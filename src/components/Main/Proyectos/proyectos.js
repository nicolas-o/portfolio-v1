import presupuestoViajes1 from "../../../assets/presupuestoViajes1.jpg";
import presupuestoViajes2 from "../../../assets/presupuestoViajes2.jpg";
import presupuestoViajes3 from "../../../assets/presupuestoViajes3.jpg";
import elMaestro1 from "../../../assets/elMaestro1.jpg";
import elMaestro2 from "../../../assets/elMaestro2.jpg";
import elMaestro3 from "../../../assets/elMaestro3.jpg";
import elMaestro4 from "../../../assets/elMaestro4.jpg";
import elMaestro5 from "../../../assets/elMaestro5.jpg";
import portfolio1 from "../../../assets/portfolio1.jpg";
import portfolio2 from "../../../assets/portfolio2.jpg";
import portfolio3 from "../../../assets/portfolio3.jpg";
import portfolio4 from "../../../assets/portfolio4.jpg";
import portfolio5 from "../../../assets/portfolio5.jpg";

export const proyectosSpa = [
  {
    className: "presupuestoViajes",
    name: "Presupuesto de Viajes",
    image: [presupuestoViajes1, presupuestoViajes2, presupuestoViajes3],
    animation: "fade-right",
    tecnologias: ["React.js", "Firebase", "Chart-2.js", "Material-UI"],
    webLink: "https://presupuesto-de-viajes.netlify.app/",
    githubLink: "#",
    description:
      "Esta es una aplicación simple para poder calcular exactamente los gastos que se harían para ciertos viajes y tener un presupuesto más certero. Desarrollé esta aplicación con React.js y utilizando firebase para almacenar el presupuesto y los gastos.",
  },
  {
    className: "elMaestro",
    name: "El Maestro Sanguchería",
    image: [elMaestro1, elMaestro2, elMaestro3, elMaestro4, elMaestro5],
    animation: "fade-left",
    tecnologias: [
      "Reacts.js",
      "Material-UI",
      "React-sping",
      "Aos",
      "React-slick",
      "Fontawesome",
      "React-router",
    ],
    webLink: "https://el-maestro.netlify.app/",
    githubLink: "#",
    description:
      "Esta es una aplicación que desarrollé pensando en una sanguchería, despliega el menú de forma simple y de fácil acceso. La desarrollé utilizando React.js, material-UI para el estilo y react-spring para las animaciones.",
  },
  {
    className: "Portfoliov1",
    name: "Portfolio v1",
    image: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
    animation: "fade-up",
    tecnologias: [
      "Reacts.js",
      "Material-UI",
      "React-slick",
      "Aos",
      "React-sping",
      "Illustrator",
    ],
    webLink: "https://nicolas-orellana.netlify.app/",
    githubLink: "#",

    description:
      "Este es el primer portafolio que he desarrollado con React.js, Material-UI, React-spring y otras librerías.",
  },
];

export const proyectosEng = [
  {
    className: "presupuestoViajes",
    name: "Travel Budget",
    image: [presupuestoViajes1, presupuestoViajes2, presupuestoViajes3],
    animation: "fade-right",
    tecnologias: ["React.js", "Firebase", "Chart-2.js", "Material-UI"],
    webLink: "https://presupuesto-de-viajes.netlify.app/",
    githubLink: "#",
    description:
      "This is a simple app to calculate the cost of travel expenses the user will need to know for certain trips. I developed this app with React.js and firebase to keep the data on local storage.",
  },
  {
    className: "elMaestro",
    name: "El Maestro Sangucheria",
    image: [elMaestro1, elMaestro2, elMaestro3, elMaestro4, elMaestro5],
    animation: "fade-left",
    tecnologias: [
      "Reacts.js",
      "Material-UI",
      "React-sping",
      "Aos",
      "React-slick",
      "Fontawesome",
      "React-router",
    ],
    webLink: "https://el-maestro.netlify.app/",
    githubLink: "#",
    description:
      "I made this app thinking about a fast-food restaurant. It has a very simple and easy to use interface. I developed it with React.js, Material-UI for styling, and react-spring for animations.",
  },
  {
    className: "Portfoliov1",
    name: "Portfolio v1",
    image: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
    animation: "fade-up",
    tecnologias: [
      "Reacts.js",
      "Material-UI",
      "React-slick",
      "Aos",
      "React-sping",
      "Illustrator",
    ],
    webLink: "https://nicolas-orellana.netlify.app/",
    githubLink: "#",

    description:
      "This is the first portfolio that I've developed. I made it with React.js, Material-UI, React-spring, and other libraries.",
  },
];
