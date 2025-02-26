import {createConfig} from '@gluestack-ui/themed';
export const defaultTheme = createConfig({
  tokens: {
    colors: {
      primary600: '#7E2CCF',
      white: '#ffffff',
    },
  },
  aliases: undefined,
});

export type DefaultThemeType = typeof defaultTheme;
