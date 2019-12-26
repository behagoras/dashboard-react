import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: ${(props) => props.theme.colors.text};
  }
  :root{
    --font-family: ${(props) => props.theme.fontFamily};

    --brand-color-text:${(props) => props.theme.colors.primary.text};
    --cta-color-text:${(props) => props.theme.colors.white.base};
    
    --brand-color:${(props) => props.theme.colors.primary.base};
    --success-color: ${(props) => props.theme.colors.success.base};
    --white-color: ${(props) => props.theme.colors.white.base};
    --info-color: ${(props) => props.theme.colors.info.base};
    --danger-color: ${(props) => props.theme.colors.danger.base};

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
