import {Box} from '@mui/material'
import {Cream, Frosting} from '../types/cake'
import {useAppSelector} from '../redux/store'

const creamColor: Record<Cream | 'none', string> = {
    white: 'white',
    yellow: 'yellow',
    brown: '#422503',
    red: 'red',
    none: '#D9D9D9',
}

const frostingColor: Record<Frosting | 'none', string> = {
    chocolate: 'brown',
    vanilla: 'yellow',
    none: '#C3C3C0',
}


export const Torta = (cream: string = null, frosting: string = null) => {
    let selectedCream = useAppSelector((state) => state.cakeReducer.cream)
    let selectedFrosting = useAppSelector((state) => state.cakeReducer.frosting)

    if (cream.length >= 1 && frosting.length >= 1) {
        selectedCream = cream
        selectedFrosting = frosting
    }

    return (
        <>
            <Box
                sx={{
                    backgroundColor: frostingColor[selectedFrosting ?? 'none'],
                    width: '100%',
                    height: '10vh',
                    borderRadius: '50%',
                    mb: '-5vh',
                    zIndex: 3,
                    border: 'solid 1px black',
                }}
            />
            <Box
                sx={{
                    backgroundColor: creamColor[selectedCream ?? 'none'],
                    width: '100%',
                    height: '15vh',
                    border: 'solid 1px black',
                    borderBottomColor: 'transparent',
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    backgroundColor: creamColor[selectedCream ?? 'none'],
                    width: '100%',
                    height: '10vh',
                    borderRadius: '50%',
                    mt: '-5vh',
                    border: 'solid 1px black',
                }}
            />
        </>
    )
}
