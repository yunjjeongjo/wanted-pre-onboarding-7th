import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg_white: string;
      bg_gray: string;
      graph_blue: string;
      graph_green: string;
      graph_purple: string;
      gray_50: string;
      gray_100: string;
      gray_300: string;
      gray_800: string;
      primary_blue: string;
      secondary_blue: string;
      secondary_red: string;
    };
  }
}
