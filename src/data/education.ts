import NetworkIcon from "../components/icons/NetworkIcon.astro";
import CiscoIcon from "../components/software-icons/CiscoIcon.astro";
import GitHubIcon2 from "../components/software-icons/GitHubIcon2.astro";
import CIcon from "../components/tech-icons/CIcon.astro";
import CSharpIcon from "../components/tech-icons/CSharpIcon.astro";
import ExpressIcon from "../components/tech-icons/ExpressIcon.astro";
import GitIcon from "../components/tech-icons/GitIcon.astro";
import JavaIcon from "../components/tech-icons/JavaIcon.astro";
import JavaScriptIcon from "../components/tech-icons/JavaScriptIcon.astro";
import KotlinIcon from "../components/tech-icons/KotlinIcon.astro";
import MongoDBIcon from "../components/tech-icons/MongoDBIcon.astro";
import MSQLServerIcon from "../components/tech-icons/MSQLServerIcon.astro";
import NodeIcon from "../components/tech-icons/NodeIcon.astro";
import PythonIcon from "../components/tech-icons/PythonIcon.astro";
import ReactIcon from "../components/tech-icons/ReactIcon.astro";
import TypeScriptIcon from "../components/tech-icons/TypeScriptIcon.astro";
import type { Education } from "../types/education";
import type { Complementary } from "../types/education";

export const EDUCATION: Education[] = [
  {
    date: "oct 18 - ene 25",
    field: "Ingeniería en Tecnologías de la Información",
    institution: "Escuela Politécnica Nacional ",
    description: [
      "Becado por Excelencia Académica.",
      "Certificado por nota sobresaliente en el Examen de Fin de Carrera.",
      "Puntaje total en Trabajo de Integración Curricular para ser Ingeniero."
    ],
    stack: [
      {
        tech: "JavaScript",
        color: "black",
        icon: JavaScriptIcon,
      },
      {
        tech: "C#",
        color: "black",
        icon: CSharpIcon,
      },
      {
        tech: "C",
        color: "black",
        icon: CIcon,
      },
      {
        tech: "React",
        color: "black",
        icon: ReactIcon,
      },
      {
        tech: "Java",
        color: "black",
        icon: JavaIcon,
      },
      {
        tech: "Kotlin",
        color: "black",
        icon: KotlinIcon,
      },
      {
        tech: "Python",
        color: "black",
        icon: PythonIcon,
      },
      {
        tech: "Express",
        color: "black",
        icon: ExpressIcon,
      },
      {
        tech: "Node",
        color: "black",
        icon: NodeIcon,
      },
      {
        tech: "MongoDB",
        color: "black",
        icon: MongoDBIcon,
      },
      {
        tech: "M. SQL Server",
        color: "black",
        icon: MSQLServerIcon,
      },
    ],
  },
];

export const COMPLEMENTARY: Complementary[] = [
  {
    certificate: "Ruta de aprendizaje de TypeScript",
    year: 2024,
    image: "/images/certificates/PLATZI_TypeScript.webp",
    academyTime: "Platzi -  10 horas",
    stack: [
      {
        tech: "TypeScript",
        color: "black",
        icon: TypeScriptIcon,
      },
    ],
  },
  {
    certificate: "Curso profesional de Git y GitHub",
    year: 2024,
    image: "/images/certificates/PLATZI_GityGitHub.webp",
    academyTime: "Platzi -  6 horas",
    stack: [
      {
        tech: "Git",
        color: "black",
        icon: GitIcon,
      },
      {
        tech: "GitHub",
        color: "black",
        icon: GitHubIcon2,
      },
    ],
  },
  {
    certificate:
      "CCNAv7: Fundamentos de Conmutación, Enrutamiento y Redes Inalámbricas",
    year: 2022,
    image: "/images/certificates/CCNA2.webp",
    academyTime: "Cisco/Fcepro - 70 horas",
    stack: [
      {
        tech: "Cisco",
        color: "black",
        icon: CiscoIcon,
      },
      {
        tech: "Redes",
        color: "black",
        icon: NetworkIcon,
      },
    ],
  },
  {
    certificate: "CCNAv7: Introducción a las redes",
    year: 2022,
    image: "/images/certificates/CCNA1.webp",
    academyTime: "Cisco/Fcepro - 70 horas",
    stack: [
      {
        tech: "Cisco",
        color: "black",
        icon: CiscoIcon,
      },
      {
        tech: "Redes",
        color: "black",
        icon: NetworkIcon,
      },
    ],
  },
];
