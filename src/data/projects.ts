import BootstrapIcon from "../components/tech-icons/BootstrapIcon.astro";
import CanvaIcon from "../components/tech-icons/CanvaIcon.astro";
import CSSIcon from "../components/tech-icons/CSSIcon.astro";
import ElementorIcon from "../components/tech-icons/ElementorIcon.astro";
import ExpressIcon from "../components/tech-icons/ExpressIcon.astro";
import HTMLIcon from "../components/tech-icons/HTMLIcon.astro";
import JavaScriptIcon from "../components/tech-icons/JavaScriptIcon.astro";
import MySQLIcon from "../components/tech-icons/MySQLIcon.astro";
import NotionIcon from "../components/tech-icons/NotionIcon.astro";
import ReactIcon from "../components/tech-icons/ReactIcon.astro";
import RenderIcon from "../components/tech-icons/RenderIcon.astro";
import WordPressIcon from "../components/tech-icons/WordPressIcon.astro";

import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    title: "Task List App",
    subtitle: "Aprendizaje - Desarrollador",
    description:
      "Aplicación de lista de tareas personal, full stack y desarrollada con el MERN stack utilizando arquitectura MVC. Definición correcta de estilos y utilización de Render y Clever Cloud en sus capas gratuitas para la ejecución del servidor.",
    image: "/images/projects/TLA.webp",
    code: "https://github.com/jona0707/TaskListApp",
    production: "https://jona0707.github.io/TaskListApp/",
    stack: [
      {
        tech: "React",
        color: "black",
        icon: ReactIcon,
      },
      {
        tech: "Express",
        color: "black",
        icon: ExpressIcon,
      },
      {
        tech: "JavaScript",
        color: "black",
        icon: JavaScriptIcon,
      },
      {
        tech: "MySQL",
        color: "black",
        icon: MySQLIcon,
      },
      {
        tech: "Bootstrap",
        color: "black",
        icon: BootstrapIcon,
      },
      {
        tech: "Render",
        color: "black",
        icon: RenderIcon,
      },
    ],
  },
  {
    title: "FresQ",
    subtitle: "Académico - Líder de equipo, diseñador",
    description:
      "Aplicación creada en entorno académico, su funcionamiento atacaba el desperdicio de comida en restaurantes, permitiendo a los usuarios adquirir productos a precios reducidos. Diseño de la aplicación en Canva y utilización de Notion para la organización del equipo.",
    image: "/images/projects/FQ.webp",
    presentation:
      "https://www.canva.com/design/DAGN3typxGk/FMcLIGzskgV8eOq8EelpLw/edit?utm_content=DAGN3typxGk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    stack: [
      {
        tech: "React",
        color: "black",
        icon: ReactIcon,
      },
      {
        tech: "JavaScript",
        color: "black",
        icon: JavaScriptIcon,
      },
            {
        tech: "MySQL",
        color: "black",
        icon: MySQLIcon,
      },
      {
        tech: "Notion",
        color: "black",
        icon: NotionIcon,
      },
      {
        tech: "Canva",
        color: "black",
        icon: CanvaIcon,
      },
    ],
  },
  {
    title: "The Office Gif App",
    subtitle: "Aprendizaje - Desarrollador",
    description:
      "Aplicación recreativa de obtención de Gifs de los personajes de la serie The Office, consumo de API, utilización de Hooks en React, implementación de Bootstrap y subida a producción a través de GitHub Pages.",
    image: "/images/projects/TOGA.webp",
    code: "https://github.com/jona0707/TheOfficeGifApp",
    production: "https://jona0707.github.io/TheOfficeGifApp/",
    stack: [
      {
        tech: "React",
        color: "black",
        icon: ReactIcon,
      },
      {
        tech: "JavaScript",
        color: "black",
        icon: JavaScriptIcon,
      },
      {
        tech: "Bootstrap",
        color: "black",
        icon: BootstrapIcon,
      },
    ],
  },
];
