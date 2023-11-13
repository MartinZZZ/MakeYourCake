import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Container } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </Provider>
  )
}