import type { StackItem } from "./stack";

export interface Project {
    title: string;
    subtitle: string;
    description: string;
    stack: StackItem[];
    image: string;
    production?: string;
    code?: string;
    presentation?: string;
  }
  