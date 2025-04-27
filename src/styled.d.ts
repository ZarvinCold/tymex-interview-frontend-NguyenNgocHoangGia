// import original module declarations
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      text: string;
      textLight: string;
      cardBg: string;
      cardGradient: string;
      headerBg: string;
      buttonGradient: string;
      buttonHover: string;
      shadow: string;
      overlay: string;
      categoryBg: string;
      price: string;
    };
    typography: {
      fontFamily: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body: string;
      small: string;
      weightBold: number | string;
      weightSemiBold: number | string;
      weightMedium: number | string;
      weightRegular: number | string;
    };
  }
}