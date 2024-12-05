import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bgWhite: string;
      gray: string;
      primary: string;
      secundary: string;
      emphasis: string;
      textLigth: string;
      textDark: string;
    };
    gradient: {
      primary: string;
    };
    shadows: {
      shadowSm: string;
      shadowMd: string;
      shadowLg: string;
    };
    font: {
      inter: string;
    };
  }
}
