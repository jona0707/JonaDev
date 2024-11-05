import DownloadIcon from "../components/icons/DownloadIcon.astro";
import FileIcon from "../components/icons/FileIcon.astro";
import GitHubIcon from "../components/icons/GitHubIcon.astro";
import LinkedInIcon from "../components/icons/LinkedInIcon.astro";
import MailIcon from "../components/icons/MailIcon.astro";
import type { BadgePrimary } from "../types/badges";

export const REDES: BadgePrimary[] = [
  {
    text: "GitHub",
    color: "secondary",
    link: "https://github.com/jona0707",
    icon: GitHubIcon,
  },
  {
    text: "LinkedIn",
    color: "secondary",
    link: "https://www.linkedin.com/in/jonathan-puente-07p/",
    icon: LinkedInIcon,
  },
  {
    text: "Contáctame",
    color: "secondary",
    link: "mailto:jona07072000@gmail.com",
    icon: MailIcon,
  },
  {
    text: "Descargar CV",
    color: "secondary",
    link: "https://drive.google.com/file/d/10LtpaW-u1y4KxWhjwvuJPgHmIrQ2Asr3/view?usp=sharing",
    icon: FileIcon,
  },
];
