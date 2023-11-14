import { Box, Button, Link, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Objednat() {
  const router = useRouter()
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
        pt={10}
      >
        <Box maxWidth="45%">
          <Button variant="contained" onClick={() => router.push('/galeria')}>
            <Typography align="center" variant="h1">
              Objednaj existujuci dizajn
            </Typography>
          </Button>
        </Box>
        <Box maxWidth="45%">
          <Button
            variant="contained"
            onClick={() => router.push('/objednat/novy-dizajn')}
          >
            <Typography align="center" variant="h1">
              Vytvor novy dizajn
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  )
}
