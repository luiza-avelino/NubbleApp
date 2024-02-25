import 'styled-components/native';

import theme from './src/theme/theme';

type Theme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
