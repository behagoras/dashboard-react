import colors from './colors';

const brandColor = colors.blue;
const successColor = colors.green;
// const brandColor = '#0361e4';
const whiteColor = colors.white;
const infoColor = '';
// const successColor = '';
const dangerColor = '';
const warningColor = '';
const roseColor = '';
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
      color: brandColor.green,
      text: brandColor.darker,
    },
    info: {
      color: infoColor,
      background: infoColor,
      text: whiteColor,
    },
    success: {
      ...successColor,
      color: successColor.base,
      background: successColor.base,
    },
    danger: {
      color: dangerColor,
      background: dangerColor,
      text: whiteColor,
    },
    warning: {
      color: warningColor,
      background: warningColor,
      text: whiteColor,
    },
    rose: {
      color: roseColor,
      background: roseColor,
      text: whiteColor,
    },
    background: {
      ...whiteColor,
      color: whiteColor.base,
      background: whiteColor.base,
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

export default light;

