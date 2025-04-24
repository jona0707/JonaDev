import TailwindIcon from "../components/icons/TailwindIcon.astro";
import CSSIcon from "../components/tech-icons/CSSIcon.astro";
import HTMLIcon from "../components/tech-icons/HTMLIcon.astro";
import JavaScriptIcon from "../components/tech-icons/JavaScriptIcon.astro";
import NextJsIcon from "../components/tech-icons/NextJsIcon.astro";
import ReactIcon from "../components/tech-icons/ReactIcon.astro";
import TypeScriptIcon from "../components/tech-icons/TypeScriptIcon.astro";
import WordPressIcon from "../components/tech-icons/WordPressIcon.astro";
import type { Experience } from "../types/experience";

export const EXPERIENCIE: Experience[] = [
  {
    title: "Pasante de Desarrollo",
    subtitle: "InitGrammers",
    date: "ene 25",
    description: [
      "Integración en proyecto: Desarrollo de componentes dinámicos para el frontend y desarrollo de funcionalidades nuevas en el backend.",
      "Aprendizaje y desarrollo de habilidades en programación: arquitectura hexagonal, principios SOLID, código limpio y desarrollo ágil.",
    ],
    link: "https://initgrammers.com/",
    stack: [
      {
        tech: "TypeScript",
        color: "black",
        icon: TypeScriptIcon,
      },
      {
        tech: "React",
        color: "black",
        icon: ReactIcon,
      },
      {
        tech: "Tailwind",
        color: "black",
        icon: TailwindIcon,
      },
      {
        tech: "Next.JS",
        color: "black",
        icon: NextJsIcon,
      },
    ],
  },
  {
    title: "Desarrollador Web Ocasional",
    subtitle: "DIESLA",
    date: "abr 23 - oct 24",
    description: [
      "Colaboración en el mantenimiento y desarrollo de páginas web.",
      "Contribución en proyectos específicos para Centros Médicos de la Cruz Roja Ecuatoriana y PNP Pest Solutions, aportando a su presencia en línea y funcionalidad de sus sitios web.",
    ],
    stack: [
      {
        tech: "WordPress",
        color: "black",
        icon: WordPressIcon,
      },
      {
        tech: "HTML",
        color: "black",
        icon: HTMLIcon,
      },
      {
        tech: "CSS",
        color: "black",
        icon: CSSIcon,
      },
      {
        tech: "JavaScript",
        color: "black",
        icon: JavaScriptIcon,
      },
    ],
  },
  {
    title: "Practicante Desarrollador Web",
    subtitle: "Observatorio de la Organización y La Industria / Divulgaciencia",
    date: "jul 23 - oct 23",
    description: [
      "Mantenimiento y mejora de páginas web con WordPress, desarrollo web y consumo de API.",
      "Creación de contenido y nuevas páginas para la web de Divulgaciencia.",
    ],
    link: "https://observatorio-o2i.epn.edu.ec/",
    stack: [
      {
        tech: "WordPress",
        color: "black",
        icon: WordPressIcon,
      },
      {
        tech: "HTML",
        color: "black",
        icon: HTMLIcon,
      },
      {
        tech: "CSS",
        color: "black",
        icon: CSSIcon,
      },
      {
        tech: "JavaScript",
        color: "black",
        icon: JavaScriptIcon,
      },
    ],
  },
];
