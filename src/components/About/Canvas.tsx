import useCanvas from "../../hooks/useCanvas"
import { CanvasProps } from "../../types"



const Canvas = ({ draw } : CanvasProps)  => {
  const {canvasRef}= useCanvas(draw)
  
  
  return (
    <canvas ref={canvasRef} > </canvas>
  )
}

export default Canvas
