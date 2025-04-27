import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#da458f",
    secondary: "#da34dd",
    background: "#fff",
    surface: "#f8f8f8",
    text: "#222",
    textLight: "#fff",
    cardBg: "rgba(58, 56, 65, 0.6)",
    cardGradient: "linear-gradient(135deg, #dd5afe 0%, #6366f1 100%)",
    headerBg: "#17161ab2",
    buttonGradient: "linear-gradient(91.47deg, #da458f -6%, #da34dd 113.05%)",
    buttonHover: "#005bb5",
    shadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
    overlay: "rgba(0, 0, 0, 0.7)",
    categoryBg: "rgba(49, 59, 69, 0.5)",
    price: "#fff",
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica Neue', Arial, 'sans-serif'",
    h1: "48px",
    h2: "32px",
    h3: "24px",
    h4: "18px",
    h5: "16px",
    h6: "14px",
    body: "16px",
    small: "12px",
    weightBold: 700,
    weightSemiBold: 600,
    weightMedium: 500,
    weightRegular: 400,
  },
};

export default theme;
