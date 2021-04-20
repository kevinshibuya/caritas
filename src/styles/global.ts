import { createGlobalStyle } from 'styled-components';

import background from '../assets/logo-hands-light.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --main-blue: #4e77e7;
    --impactful-pink: #ff5d7e;
    --background-white: #ffffff;
    --background-grey: #f5f5f5;
    --text-navy: #2c3242;
    --text-grey: #717681;
    --mint: #bde0e8;
    --light-mint: #eaf5f8;

    --cause-head: 1.5rem;
    --cause-sub-head: 1.3rem;
    --section-head: 1.2rem;
    --body-text: 1rem;
    --tiny-labels: 0.8rem;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    letter-spacing: 0.02rem;
    color: var(--text-navy);
  }

  button {
    cursor: pointer;
  }

  div.App {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: right;
    background-position-x: -20px;
    padding: 0px 2rem;

    
    @media (max-width: 600px) {
      padding: 0px 1rem;
    }
  }
`;
