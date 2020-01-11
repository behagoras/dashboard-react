import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: Roboto, Helvetica, Arial, sans-serif;
    background:var(--white-color);
    color: ${(props) => props.theme.colors.text};
  }
  :root{
    --font-family: ${(props) => props.theme.fontFamily};
    --font-size: ${(props) => props.theme.fontSize};

    --brand-color-text:${(props) => props.theme.colors.primary.text};
    --text-color:var(--brand-color-text);

    --cta-color-text:${(props) => props.theme.colors.white.base};
    
    --brand-color:${(props) => props.theme.colors.primary.base};
    --success-color: ${(props) => props.theme.colors.success.base};
    --white-color: ${(props) => props.theme.colors.white.color};
    --sky-color: ${(props) => props.theme.colors.white.base};
    --gray-color: ${(props) => props.theme.colors.gray.base};
    --info-color: ${(props) => props.theme.colors.info.base};
    --danger-color: ${(props) => props.theme.colors.danger.base};



    --color-brand-ultralight: #d8e9fe;
    --color-brand-light: #72b3fd;
    --color-brand: #0361e4;
    --color-brand-contrast: #0043c6;
    --color-grey-ultralight: #f7f8f9;
    --color-grey-light: #f1f2f4;
    --color-grey-disabled: #e1e4e8;
    --color-grey: #c9ced6;
    --color-grey-secundary: #b0b7c3;
    --color-grey-contrast: #8a94a6;
    --color-dark-ultralight: #b2baf2;
    --color-dark-light: #767eb6;
    --color-dark: #262e66;
    --color-dark-contrast: #00063e;
    --color-danger-ultralight: #fbefef;
    --color-danger-light: #f8a9a9;
    --color-danger: #ee5757;
    --color-danger-contrast: #b21b1b;
    --color-success-ultralight: #dcfff8;
    --color-success-light: #74fbd0;
    --color-success: #35c798;
    --color-success-contrast: #007748;
    --color-warning-ultralight: #fff5df;
    --color-warning-light: #fce1a6;
    --color-warning: #fdc240;
    --color-warning-contrast: #c18600;
    --color-black: #000;
    --color-white: #fff;

  }
  a,body,div,html {
    font-size: ${(props) => props.theme.fontSize};
  }

  a:link {
    color: var(--brand-color-text);
    text-decoration:none;
  }
  *{
    margin:0;
    padding:0;
  }
  
  h2{
    font-size: var(--font-size);
    margin-bottom: 4px;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default GlobalStyle;
