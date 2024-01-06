// import { useState } from 'react';
// import { AppDispatch, useAppSelector } from '../../redux/store';
// import { useDispatch } from 'react-redux';
// import { setDescription, setId, setName, setPrice } from '../../redux/features/cake-info';
import { Box, Button, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import { ShoppingCartOutlined } from '@mui/icons-material';
import Link from 'next/link';

type Props = {
    id: number
    name: string
    description: string
    price: number
}

export const Torta = ({id, name, description, price}: Props) => {
    // const selectedId = useAppSelector((state) => state.cakeInfoReducer.id)
    // const selectedName = useAppSelector((state) => state.cakeInfoReducer.name)
    // const selectedDescription = useAppSelector((state) => state.cakeInfoReducer.description)
    // const selectedPrice = useAppSelector((state) => state.cakeInfoReducer.price)
    // const dispatch = useDispatch<AppDispatch>()
    // const handleIdChange = (id: number, name: string, description: string, price: number) => {
    //   dispatch(setId(id))
    //   dispatch(setName(name))
    //   dispatch(setDescription(description))
    //   dispatch(setPrice(price))
    // }

    const BuyButton = ({id, name, description, price}: Props) => {
        return (
            <Link
                // href={`/ponuka/${id}`}
                href={{
                    pathname: '/ponuka/[id]',
                    query: {id: id, name: name, description: description, price: price}
                }}
                passHref
                // onClick={() => handleIdChange(id, name, description, price)}
            >
                <Button
                    variant="contained"
                    endIcon={<ShoppingCartOutlined/>}
                    sx={{backgroundColor: 'deeppink', '&:hover': {
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
                // href={`/ponuka/${id}`}
                href={{
                    pathname: '/ponuka/[id]',
                    query: {id: id, name: name, description: description, price: price}
                }}
                passHref
                style={{textDecoration: 'none', color: 'black'}}
                // onClick={() =>  handleIdChange(id, name, description, price)}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={`/static/images/cakes/${id}/0.png`}
                        alt={`image for cake ${name}`}
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
                <BuyButton id={id} name={name} description={description} price={price}/>
            </Box>
        </Card>
    )
}
