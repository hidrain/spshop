import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
        black: string;
        white: string;
    };
    size: {
        primary: string;
        secondary: string;
        tetriary: string;
    };
    weight: {
        bold: string;
        normal: string;
    };
    lineHeight: {
        primary: string;
        secondary: string;
        tetriary: string;
    };
  }
}