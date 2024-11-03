import type { StackItem } from "./stack";

export interface Experience {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  link?: string;
  stack: StackItem[];
}
