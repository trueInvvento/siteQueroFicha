/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    primary: '#5C4EE5',
    secondary: '#FF4081',
    success: '#2E7D32',
    warning: '#ED6C02',
    error: '#D32F2F',
    info: '#0288D1',
    text: '#212121',
    background: '#FFFFFF',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    icon: '#212121',
  },
  dark: {
    primary: '#7F6DF2',
    secondary: '#FF80AB',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#FF5252',
    info: '#29B6F6',
    text: '#FFFFFF',
    background: '#121212',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    icon: '#FFFFFF',
  },
} as const;

export const colors = {
  primary: {
    light: '#7F6DF2',
    main: '#5C4EE5',
    dark: '#4A3DB7',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#FF80AB',
    main: '#FF4081',
    dark: '#C51162',
    contrastText: '#FFFFFF',
  },
  success: {
    light: '#4CAF50',
    main: '#2E7D32',
    dark: '#1B5E20',
    contrastText: '#FFFFFF',
  },
  warning: {
    light: '#FF9800',
    main: '#ED6C02',
    dark: '#E65100',
    contrastText: '#FFFFFF',
  },
  error: {
    light: '#FF5252',
    main: '#D32F2F',
    dark: '#C62828',
    contrastText: '#FFFFFF',
  },
  info: {
    light: '#29B6F6',
    main: '#0288D1',
    dark: '#01579B',
    contrastText: '#FFFFFF',
  },
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#9E9E9E',
  },
  background: {
    default: '#FFFFFF',
    paper: '#F5F5F5',
    dark: '#121212',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
} as const;
