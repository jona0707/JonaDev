import AstroIcon from "../components/icons/AstroIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import FigmaIcon from "../components/software-icons/FigmaIcon.astro";
import GitHubIcon2 from "../components/software-icons/GitHubIcon2.astro";
import OfficeIcon from "../components/software-icons/OfficeIcon.astro";
import PostmanIcon from "../components/software-icons/PostmanIcon.astro";
import VSCIcon from "../components/software-icons/VSCIcon.astro";
import VSIcon from "../components/software-icons/VSIcon.astro";
import ArduinoIcon from "../components/tech-icons/ArduinoIcon.astro";
import BashIcon from "../components/tech-icons/BashIcon.astro";
import BootstrapIcon from "../components/tech-icons/BootstrapIcon.astro";
import CanvaIcon from "../components/tech-icons/CanvaIcon.astro";
import CIcon from "../components/tech-icons/CIcon.astro";
import CSharpIcon from "../components/tech-icons/CSharpIcon.astro";
import CSSIcon from "../components/tech-icons/CSSIcon.astro";
import ExpressIcon from "../components/tech-icons/ExpressIcon.astro";
import GitIcon from "../components/tech-icons/GitIcon.astro";
import HTMLIcon from "../components/tech-icons/HTMLIcon.astro";
import JavaIcon from "../components/tech-icons/JavaIcon.astro";
import JavaScriptIcon from "../components/tech-icons/JavaScriptIcon.astro";
import KotlinIcon from "../components/tech-icons/KotlinIcon.astro";
import MuiIcon from "../components/tech-icons/MuiIcon.astro";
import MongoDBIcon from "../components/tech-icons/MongoDBIcon.astro";
import MSQLServerIcon from "../components/tech-icons/MSQLServerIcon.astro";
import NodeIcon from "../components/tech-icons/NodeIcon.astro";
import NotionIcon from "../components/tech-icons/NotionIcon.astro";
import PythonIcon from "../components/tech-icons/PythonIcon.astro";
import ReactIcon from "../components/tech-icons/ReactIcon.astro";
import TypeScriptIcon from "../components/tech-icons/TypeScriptIcon.astro";
import WordPressIcon from "../components/tech-icons/WordPressIcon.astro";
import type { StackItem } from "../types/stack";
import type { Tech } from "../types/tech";

export const TECH: Tech[] = [
  {
    nivel: "pro",
    techs: [
      {
        tech: "JavaScript",
        color: "white",
        icon: JavaScriptIcon,
      },
      {
        tech: "React",
        color: "white",
        icon: ReactIcon,
      },
      {
        tech: "HTML5",
        color: "white",
        icon: HTMLIcon,
      },
      {
        tech: "CSS3",
        color: "white",
        icon: CSSIcon,
      },
      {
        tech: "C",
        color: "white",
        icon: CIcon,
      },
    ],
  },
  {
    nivel: "mid",
    techs: [
      {
        tech: "TypeScript",
        color: "white",
        icon: TypeScriptIcon,
      },
      {
        tech: "Express",
        color: "white",
        icon: ExpressIcon,
      },
      {
        tech: "Node",
        color: "white",
        icon: NodeIcon,
      },
      {
        tech: "Astro",
        color: "white",
        icon: AstroIcon,
      },
      {
        tech: "C#",
        color: "white",
        icon: CSharpIcon,
      },
      {
        tech: "Microsoft SQL Server",
        color: "white",
        icon: MSQLServerIcon,
      },
      {
        tech: "MongoDB",
        color: "white",
        icon: MongoDBIcon,
      },
      {
        tech: "Git",
        color: "white",
        icon: GitIcon,
      },
    ],
  },
  {
    nivel: "beg",
    techs: [
      {
        tech: "Java",
        color: "white",
        icon: JavaIcon,
      },
      {
        tech: "Kotlin",
        color: "white",
        icon: KotlinIcon,
      },
      {
        tech: "Python",
        color: "white",
        icon: PythonIcon,
      },
      {
        tech: "MaterialUI",
        color: "white",
        icon: MuiIcon,
      },
      {
        tech: "Tailwind",
        color: "white",
        icon: TailwindIcon,
      },
      {
        tech: "Bootstrap",
        color: "white",
        icon: BootstrapIcon,
      },
      {
        tech: "Bash",
        color: "white",
        icon: BashIcon,
      },
      {
        tech: "Arduino",
        color: "white",
        icon: ArduinoIcon,
      },
    ],
  },
];

export const SOFTWARE: StackItem[] = [
  {
    tech: "Visual Studio Code",
    color: "white",
    icon: VSCIcon,
  },
  {
    tech: "Visual Studio",
    color: "white",
    icon: VSIcon,
  },
  {
    tech: "GitHub",
    color: "white",
    icon: GitHubIcon2,
  },
  {
    tech: "WordPress",
    color: "white",
    icon: WordPressIcon,
  },
  {
    tech: "Notion",
    color: "white",
    icon: NotionIcon,
  },
  {
    tech: "Postman",
    color: "white",
    icon: PostmanIcon,
  },
  {
    tech: "Canva",
    color: "white",
    icon: CanvaIcon,
  },
  {
    tech: "Figma",
    color: "white",
    icon: FigmaIcon,
  },
  {
    tech: "Office",
    color: "white",
    icon: OfficeIcon,
  },
];

export const SOFT: string[] = [
  "Trabajo en equipo.",
  "Adaptación ágil a entornos de trabajo.",
  "Gestión de recursos.",
  "Comunicación efectiva.",
  "Solución de problemas.",
  "Creatividad.",
];
