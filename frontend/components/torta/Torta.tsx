import { Button, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'

const InfoButton = (index) => {
  return (
    <Button
      onClick={() => console.log(`info o torte ${index+1}`)} //TODO
    > INFO
    </Button>
  )
}
export const Torta = (imgPath) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="400"
            image={imgPath}
            alt="cake"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Cake
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Cake info
            </Typography>
        </CardContent>
        <Button size="small">Info</Button>
        <Button size="small">Kúpiť</Button>
        </CardActionArea>
    </Card>
  )
}
