import { useEffect, useRef } from "react";
import { CanvasProps } from "../types";

let flowfield
let flowfieldAnimation : number
const useCanvas = (draw : CanvasProps["draw"]) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    canvas.width = window.innerWidth /2
    canvas.height = window.innerHeight /2
    // console.log(canvas.width,canvas.height)
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        cancelAnimationFrame(flowfieldAnimation)
      }
      if (window.innerWidth == 769) {
        cancelAnimationFrame(flowfieldAnimation)
        flowfield = new FlowFielEffect(context,canvas.width, canvas.height)
        flowfield.animate(0)
      }
    })
    flowfield = new FlowFielEffect(context, canvas.width, canvas.height)
    flowfield.animate(0)
  }, [draw])
  
  return { canvasRef }
}

export default useCanvas


class FlowFielEffect {
  #ctx
  #width
  #height
  angle
  lastTime
  interval
  timer
  cellSize
  gradient:  CanvasGradient | string
  radius
  vr
  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.#ctx = ctx
    this.#ctx.lineWidth = 1
    this.#width = width
    this.#height = height
    this.angle = 0
    this.lastTime = 0   //
    this.interval = 1000/60   //
    this.timer = 0
    this.cellSize = 12
    this.gradient = ""
    this.#createGradient()
    this.#ctx.strokeStyle = this.gradient 
    this.radius = 1
    this.vr = 0.03
  }
  #createGradient(){
    this.gradient = this.#ctx.createLinearGradient(0,0,this.#width,this.#height) as CanvasGradient
    this.gradient.addColorStop(0.1,"#ff5c33")
    this.gradient.addColorStop(0.2,"#ff66b3")
    this.gradient.addColorStop(0.4,"#ccccff")
    this.gradient.addColorStop(0.6,"#b3ffff")
    this.gradient.addColorStop(0.8,"#80ff80")
    this.gradient.addColorStop(0.9,"#ffff33")
  }
  #drawLine(x: number, y: number, angle : number) {

    this.#ctx.beginPath()
    this.#ctx.moveTo(x, y)
    this.#ctx.lineTo(x+Math.cos(angle)*30, y+Math.sin(angle)*30 )
    this.#ctx.stroke()
  }

  animate(timeStamp: number) {
    const deltaTime = timeStamp - this.lastTime
    this.lastTime = timeStamp
    if (this.timer > this.interval) {
      this.#ctx.clearRect(0, 0, this.#width, this.#height)
      this.radius += this.vr
      if (this.radius > 10 || this.radius < -10) this.vr *= -1
      for (let y = 0; y<this.#height; y+= this.cellSize){
        for (let x = 0; x< this.#width; x+= this.cellSize) {
          const angle = (Math.cos(x* 0.01) + Math.sin(y*0.01) ) * this.radius

          this.#drawLine(x, y,angle)
        }
      }
      this.timer = 0
    } else {
      this.timer += deltaTime
    }
    flowfieldAnimation= requestAnimationFrame(this.animate.bind(this))
  }
}