import React from 'react'
import SampleImg from '../../../assets/images/sampleImg.jpg'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { useStyles } from '../Style'

function Canvas() {
  const classes = useStyles()

  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className={classes.canvasDiv}>
            <TransformComponent
              wrapperStyle={{ width: '100%', height: '700px' }}
            >
              <img src={SampleImg} alt="test" />
            </TransformComponent>
            <div className={classes.div2}>
              <button className={classes.iconBtn2} onClick={() => zoomIn()}>
                +
              </button>
              <button className={classes.iconBtn2} onClick={() => zoomOut()}>
                -
              </button>
              <button
                className={classes.iconBtn2}
                onClick={() => resetTransform()}
              >
                x
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </TransformWrapper>
  )
}

export default Canvas
