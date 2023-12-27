import { Box } from '@mui/material'
import Draggable, { DraggableCore } from 'react-draggable'

export const Doplnky = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          backgroundColor: 'red',
          width: '2000px',
          height: '2000px',
          //   position: 'relative',
        }}
      >
        <Draggable
          bounds="parent"
          onDrag={(e, data) => {
            console.log(data)
          }}
        >
          <div
            style={{
              background: '#fff',
              border: '1px solid #999',
              borderRadius: '3px',
              width: '180px',
              height: '180px',
              margin: '10px',
              padding: '10px',
              float: 'left',
            }}
          >
            XD
          </div>
        </Draggable>
      </div>
    </div>
  )
}
