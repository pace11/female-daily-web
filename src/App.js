import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { StoreProvider } from 'easy-peasy'
import store from './redux/store'
import theme from './common/theme'
import Routes from './routes'

const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    background-color: ${theme.colors.white};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <React.Fragment>
          <GlobalStyled />
          <Routes />
        </React.Fragment>
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App
