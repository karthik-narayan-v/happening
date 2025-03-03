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
      primary600: '#7E2CCF',
      primary100: '#EEE6F9',
      primary300: '#F9F5FD',
      secondary600: '#5F6368',
      white: '#ffffff',
      white100: '#FBFBFB',
      gray50: '#E5E5E5',
      gray100: '#D9D9D9',
      gray200: '#A3A3A3',
      gray300: '#3C3C3C',
      black: '#000000',
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
