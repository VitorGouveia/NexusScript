import "styled-components";

import { Theme } from "@/styles/theme";

export type Theme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
