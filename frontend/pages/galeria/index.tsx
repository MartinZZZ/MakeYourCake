import { Box, Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Button } from '@mui/material'

const InfoButton = (index) => {
  return (
    <Button
      onClick={() => console.log(`info o torte ${(index+1)}`)} //TODO
    > INFO
    </Button>
  )
}

export default function Galeria() {
  return (
    <Box my={5}>
      <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(7)).map((_, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={`/static/images/cake${index+1}.png`}
                alt="cake"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cake {index+1}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cake info
              </Typography>
            </CardContent>
            <InfoButton index={index}></InfoButton>
            <Button size="small">Kúpiť</Button>
          </Card>
        </Grid>
      ))}
      </Grid>
    </Box>
  )
}
