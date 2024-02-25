/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Text from './src/components/Text/Text';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text
          preset="paragraphMedium"
          bold
          italic
          style={{color: 'blue', marginTop: 150}}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
