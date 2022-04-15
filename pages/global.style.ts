import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    color: #fff;
    background-color: #12141B;
    font-family: 'SofiaPro';
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    &::-webkit-scrollbar {
        width: 7px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #f5f5f5;
        border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #716e6e;
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #333;
    }
  }

  a {
    color: #fff;
    transition: all ease-in-out 0.2s;
  }
  
  @font-face {
    font-family: 'SofiaPro-Bold';
    src: url("/fonts/SofiaProBold.ttf");
  }

  @font-face {
    font-family: 'SofiaPro-Light';
    src: url("/fonts/SofiaProLight.ttf");
  }

  @font-face {
    font-family: 'SofiaPro-Medium';
    src: url("/fonts/SofiaProMedium.ttf");
  }

  @font-face {
    font-family: 'SofiaPro';
    src: url("/fonts/SofiaProRegular.ttf");
  }

  @font-face {
    font-family: 'SofiaPro-SemiBold';
    src: url("/fonts/SofiaProSemiBold.ttf");
  }
`;
