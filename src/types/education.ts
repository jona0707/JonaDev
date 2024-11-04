import type { StackItem } from "./stack";

export interface Education {
    date: string;
    field: string;
    institution: string;
    description: string[];
    stack: StackItem[];
}

export interface Complementary {
    certificate: string;
    year: number;
    image: string;
    academyTime: string;
    stack: StackItem[];
  }
  
  