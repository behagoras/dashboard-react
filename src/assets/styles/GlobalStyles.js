import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: ${(props) => props.theme.colors.text};
  }
  a,body,div,html {
    font-size: ${(props) => props.theme.fontSize};
  }
  *{
    margin:0;
    padding:0;
  }
  
  h2{
    font-size: ${(props) => props.theme.fontSize};
    margin-bottom: 4px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default GlobalStyle;
