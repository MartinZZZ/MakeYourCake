import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Container, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { customTheme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Bungee&family=Julius+Sans+One&display=swap" rel="stylesheet"></link>
        <ThemeProvider theme={customTheme}>
          <Container>
            <Header />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
