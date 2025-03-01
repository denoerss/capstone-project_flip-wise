import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

// Fonts
const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`
:root {
  // Primary Colors
  --black: #000000;
  --white: #ffffff;
  --light-grey:#cacaca;
  
  // Collection Colors

  // Font-Sizes
  // Font-Weights
};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${inter.style.fontFamily}, system-ui, sans-serif;
  }

  h1 {
    color: var(--black) ;
  }
`;
