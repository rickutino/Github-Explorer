import { createGlobalStyle } from 'styled-components';

import githubImg from '../assets/github_img.svg';

export default createGlobalStyle`
  :root {
  --text-black: #3a3a3a;
  --color-primary: #04d361;
  --white: #fff;
  --second-text-white: #a8a8b3;
  --color-text-strong: #3D3D4D;
  --icon-color: #cbcbd6;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubImg}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1rem Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1.25rem 2.5rem;
  }

  button {
    cursor: pointer;
  }
`;
