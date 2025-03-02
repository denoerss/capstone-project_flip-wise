import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";
import Button from "./components/Button";

// Fonts
const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`
:root {
  /* Primary Colors */
  --black: #141414;
  --white: #ffffff;
  --light-grey:#e1e1e1;
  
  /* Collection Colors */
  --red: #f57173;
  --orange: #ff9c86;
  --yellow: #f2ffab;
  --green: #94bd94;
  --blue: #acd8ff;
  --pink: #fec9fa;
  --purple: #da9eff

  /* Font Weights */
};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${inter.style.fontFamily}, system-ui, sans-serif;
    color: var(--black);
    background-color: var(--white);
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 25px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
  }



  
`;
