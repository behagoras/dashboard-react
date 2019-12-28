import colors from './colors';

const brandColor = colors.blue;
const successColor = colors.green;
const whiteColor = colors.sky;
const infoColor = colors.teal;
const dangerColor = colors.red;
const warningColor = colors.yellow;
const grayColor = colors.sky;
const unit = 8;
const fontFamily = '"San Francisco", Roboto, "Segoe UI" , Helvetica, Arial, sans-serif';
const iconSize = {
  minSize: '16px',
  defaultSize: '20px',
};

const light = {
  colors: {
    text: brandColor.darker,
    textDisabled: brandColor.light,
    primary: {
      ...brandColor,
      background: brandColor.base,
      gray: brandColor.text,
      color: brandColor.green,
      text: brandColor.darker,
    },
    info: {
      ...infoColor,
      gray: infoColor.text,
      color: infoColor.base,
      background: infoColor.base,
    },
    success: {
      ...successColor,
      gray: successColor.text,
      color: successColor.base,
      background: successColor.base,
    },
    danger: {
      ...dangerColor,
      gray: dangerColor.text,
      color: dangerColor.base,
      background: dangerColor.base,
    },
    warning: {
      ...warningColor,
      gray: warningColor.text,
      color: warningColor.base,
      background: warningColor.base,
    },
    background: {
      ...whiteColor,
      color: whiteColor.base,
      background: whiteColor.base,
    },
    white: {
      ...whiteColor,
      color: whiteColor.lighter,
      background: whiteColor.lighter,
      sky: whiteColor.base,
    },
    gray: {
      ...grayColor,
      color: grayColor.darker,
      background: grayColor.lighter,
    },

  },
  spacing: {
    none: `${unit * 0}px`,
    extraTight: `${unit * 0.5}px`,
    tight: `${unit * 1}px`,
    baseTight: `${unit * 1.5}px`,
    default: `${unit * 2}px`,
    loose: `${unit * 2.5}px`,
    extraLoose: `${unit * 4}px`,
  },
  fontSize: `${unit * 2}px`,
  fontFamily,
  iconSize,
};

console.log('light', light);

export default light;

