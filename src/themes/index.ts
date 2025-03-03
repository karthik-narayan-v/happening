import {createConfig} from '@gluestack-ui/themed';
export const defaultTheme = createConfig({
  tokens: {
    fonts: {
      Poppins: {
        normal: 'Poppins-Regular',
      },
      Inter: {
        normal: 'Inter-Regular',
      },
    },
    colors: {
      primary600: '#7E2CCF',
      primary300: '#F9F5FD',
      white: '#ffffff',
    },
  },
  aliases: undefined,
});

export type DefaultThemeType = typeof defaultTheme;
