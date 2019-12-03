import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import FemaleDaily from './assets/icons/FemaleDaily'
import store from './redux/store'
import theme from './common/theme'

const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Abel');
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
    font-size: 17px;
    background-color: ${theme.colors.gray_light};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <React.Fragment>
          <GlobalStyled />
          <FemaleDaily />
        </React.Fragment>
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App
