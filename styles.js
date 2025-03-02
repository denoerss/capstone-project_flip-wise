import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

// Fonts
const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`
:root {
  // Primary Colors
  --black: #151515;
  --white:rgb(255, 255, 255);
  --light-grey:#cacaca;
  
  // Collection Colors
  --orange: #FF9C86;
  --pink: #fec9fa;
  --red: #f57173;
  --purple: #DA9EFF


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
