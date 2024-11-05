import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface StackItem {
  tech: string;
  color: string;
  icon: AstroComponentFactory;
}
