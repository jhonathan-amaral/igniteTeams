import "styled-components";
import type theme from "../theme/index";

export type ThemeType = typeof theme;

//sempre devemos colocar o native quando formos declarar um tipo de tema
declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
