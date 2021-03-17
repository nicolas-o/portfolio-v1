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

export const proyectos = [
  {
    className: "presupuestoViajes",
    name: "Presupuesto de Viajes",
    image: [presupuestoViajes1, presupuestoViajes2, presupuestoViajes3],
    animation: "fade-right",
    tecnologias: ["React.js", "Firebase", "Chart-2.js", "Material-ui", "uuid"],
    webLink: "https://presupuesto-de-viajes.netlify.app/",
    githubLink: "#",
    description:
      "Esta es una aplicación simple para poder calcular exactamente los gastos que se necesitarian para ciertos viajes y tener un presupuesto más certero. Desarrolle está aplicación con React.js y utilizando firebase para almacenar el presupuesto y los gastos.",
  },
  {
    className: "elMaestro",
    name: "El Maestro Sangucheria",
    image: [elMaestro1, elMaestro2, elMaestro3, elMaestro4, elMaestro5],
    animation: "fade-left",
    tecnologias: [
      "Reacts.js",
      "Material-ui",
      "React-sping",
      "Aos",
      "uuid",
      "React-slick",
      "Fontawesome",
      "React-router",
    ],
    webLink: "https://el-maestro.netlify.app/",
    githubLink: "#",
    description:
      "Esta es una aplicación que desarrolle pensando en una sangucheria, despliega el menú de forma simple y de fácil acceso. La desarrolle utilizando React.js, material-ui para el estilo y react-spring para las animaciones.",
  },
  {
    className: "Portfoliov1",
    name: "Portfolio v1",
    image: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
    animation: "fade-up",
    tecnologias: [
      "Reacts.js",
      "Material-ui",
      "uuid",
      "React-slick",
      "Aos",
      "React-sping",
      "Illustrator",
    ],
    webLink: "https://nicolas-orellana.netlify.app/",
    githubLink: "#",

    description:
      "Este es el primer portafolio que he desarrollado con React.js.",
  },
];
