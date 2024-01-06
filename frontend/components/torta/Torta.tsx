import { useDispatch } from 'react-redux';
import { setId, setName, setDescription, setPrice, setRestrictions } from '../../redux/features/cakeMenuSlice';
import { Box, Button, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material';
import Link from 'next/link';

type Props = {
  id: number 
  name: string 
  description: string 
  price: number
  restrictions: Array<string>
}


export const Torta = ({id, name, description, price, restrictions}: Props) => {
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    dispatch(setId(id))
    dispatch(setName(name))
    dispatch(setDescription(description))
    dispatch(setPrice(price))
    dispatch(setRestrictions(restrictions))
  }

  const BuyButton = ({id, name, description, price, restrictions}: Props) => {
    return (
      <Link 
        href={`/ponuka/${id}`}
      >
        <Button
          variant="contained" 
          endIcon={<ShoppingCartOutlined/>}
          onClick={handleBuyClick}
          sx={{ backgroundColor: 'deeppink', '&:hover': {
                backgroundColor: 'deeppink'}
              }}
        > Kúpiť
        </Button>
      </Link>
    )
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link 
        href={`/ponuka/${id}`}
        passHref 
        style={{textDecoration: 'none', color: 'black'}}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={`/static/images/cakes/${id}/0.png`}
            alt={`image for cake ${name}`}
            onClick={handleBuyClick}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        m={2}
      >
        <Typography m={1} variant='h6'>
          od {price}€
        </Typography>
        <BuyButton id={id} name={name} description={description} price={price} restrictions={restrictions}/>
      </Box>
    </Card>
  )
}
