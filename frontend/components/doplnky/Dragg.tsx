import { Box, Button } from '@mui/material'
import { useState } from 'react'
import Emoji from 'react-emojis'
import Draggable from 'react-draggable'
import { Torta } from '../Torta'
import { ItemToString } from '../kosik/KosikItems'
import { CakeType } from '../../redux/features/cake-slice'
import { AppDispatch, useAppSelector } from '../../redux/store'
import { useDispatch } from 'react-redux'
import {
  PositionWithId,
  removeDecoration,
  updateDecorationPosition,
} from '../../redux/features/decorations-slice'

export const Dragg = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const cake = useAppSelector((state) => state.cakeReducer)
  const decorations = useAppSelector(
    (state) => state.decorationsReducer.decorations
  )
  const dispatch = useDispatch<AppDispatch>()

  const updatePosition = (postionWithId: PositionWithId) => {
    dispatch(updateDecorationPosition(postionWithId))
  }

  /**
   * Image ukladat do localStoragu az pri ulozeni do kosika
   * V zhrnuti prepouzit tento komponent
   */

  return (
    <>
      <Box
        id="draggArea"
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          mb: 4,
        }}
      >
        <Box sx={{ m: 2 }}>
          <Torta />
        </Box>
        {decorations.map(({ x, y, image, id }) => (
          <Draggable
            onMouseDown={() => setSelectedId(id)}
            onStop={(_, data) => updatePosition({ x: data.x, y: data.y, id })}
            position={{ x, y }}
            bounds="parent"
          >
            <div
              style={{
                border:
                  selectedId === id
                    ? 'solid #b20e66 2px'
                    : 'solid transparent 2px',
                cursor: 'move',
                zIndex: 100,
                position: 'absolute',
                width: 'fit-content',
              }}
            >
              <Emoji emoji={image} size={50} />
            </div>
          </Draggable>
        ))}
      </Box>
      <Button
        variant="contained"
        disabled={selectedId === null}
        onClick={() => {
          dispatch(removeDecoration(selectedId))
          setSelectedId(null)
        }}
      >
        Vymazat vybraný doplnok
      </Button>
    </>
  )
}
