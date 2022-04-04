import React from 'react'
import ReactDOM from 'react-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import Router from './layouts/Router'
import './index.css'
import reportWebVitals from './reportWebVitals'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const velas = {
  fontFamily: 'Velas',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('Velas'), 
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const theme = createTheme({
  typography: {
    fontFamily: 'Velas',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [velas],
      },
    },
  },
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router />
      </Web3ReactProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
