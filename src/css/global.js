import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './variables';

// eslint-disable-next-line no-unused-expressions
export const GlobalStyle = createGlobalStyle`
    /* latin-ext */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 500;
      src: local('Roboto Mono Medium'), local('RobotoMono-Medium'), url(https://fonts.gstatic.com/s/robotomono/v5/L0xkDF4xlVMF-BfR8bXMIjC4iGq_f7-pAVU_Lrg.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 500;
      src: local('Roboto Mono Medium'), local('RobotoMono-Medium'), url(https://fonts.gstatic.com/s/robotomono/v5/L0xkDF4xlVMF-BfR8bXMIjC4iGqxf7-pAVU_.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    * {
        box-sizing: border-box;
    }

    html {
        ${fonts.text}
        font-size: 14px;
        line-height: 1.6;

        @media (min-width: 500px) {
            font-size: 16px;
        }

        @media (min-width: 700px) {
            font-size: 18px;
        }
    }

    body {
        background-color: ${colors.bg};
        margin: 0;
        padding: 0;
    }

    h1, h2, h3 {
        ${fonts.heading}
    }

    h1 {
        font-size: 3rem;
        margin: 0 0 2.5rem;
        line-height: 1.2;
    }

    h2 {
        font-size: 1.5rem;
        margin: 2.5rem 0 1rem;
        line-height: 1.6;
    }

    h3 {
        font-size: 1rem;
        margin: 2.5rem 0 1rem;
        line-height: 1.6;
    }

    p {
        margin: 1rem 0;
    }

    a {
        text-decoration: none;
    }

    strong {
        font-weight: bold;
        color: ${colors.heading};
    }

    ::selection {
        background-color: rgba(0, 0, 0, .99);
        color: #fff;
    }
`;
