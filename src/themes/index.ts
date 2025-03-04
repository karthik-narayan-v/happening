import {createConfig} from '@gluestack-ui/themed';
export const defaultTheme = createConfig({
  tokens: {
    fonts: {
      Poppins: 'Poppins-Regular',
      Inter: {
        normal: 'Inter-Regular',
      },
    },
    colors: {
      primary700: '#E8DFF4',
      primary600: '#7E2CCF',
      primary100: '#EEE6F9',
      primary300: '#F9F5FD',
      secondary800: '#E6E6E6',
      secondary700: '#F1E6FF',
      secondary600: '#5F6368',
      secondary500: '#757575',
      secondary400: '#7A7A7A',
      white: '#ffffff',
      white100: '#FBFBFB',
      gray50: '#E5E5E5',
      gray100: '#D9D9D9',
      gray200: '#A3A3A3',
      gray300: '#3C3C3C',
      warmGray400: '#757575',
      coolGray100: '#D9D9D9',
      black: '#000000',
      orange600: '#FF935B',
    },
  },
  components: {
    variants: {
      variant1: {
        fontFamily: 'Poppins-Regular',
        fontWeight: 400,
        lineHeight: 24,
        fontSize: 16,
      },
    },
  },
  aliases: undefined,
});

export type DefaultThemeType = typeof defaultTheme;
