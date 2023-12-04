import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Container } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Bungee&family=Julius+Sans+One&display=swap" rel="stylesheet"></link>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </Provider>
  )
}
