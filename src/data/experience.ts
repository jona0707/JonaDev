import CSSIcon from "../components/tech-icons/CSSIcon.astro";
import HTMLIcon from "../components/tech-icons/HTMLIcon.astro";
import JavaScriptIcon from "../components/tech-icons/JavaScriptIcon.astro";
import WordPressIcon from "../components/tech-icons/WordPressIcon.astro";
import type { Experience } from "../types/experience";

export const EXPERIENCIE: Experience[] = [
  {
    title: "Desarrollador Web Ocasional",
    subtitle: "DIESLA",
    date: "abr 23 - Presente",
    description: [
      "Colaboración en el mantenimiento y desarrollo de páginas web utilizando diversas herramientas.",
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
      "Responsable del mantenimiento, creación y mejora de páginas web utilizando principalmente WordPress. Integración al equipo de O2I, participando activamente en el desarrollo web, implementación de plugins, consumo de API y otras tareas asignadas durante mi práctica profesional.",
      "Contribución significativa a la agregación de contenido y creación de nuevas páginas para la web de Divulgaciencia.",
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
