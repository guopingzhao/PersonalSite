export default class Canvas {
  constructor({canvas, width, height}){
    this.canvas = canvas ? canvas : document.createElement("canvas")
    if(width) this.canvas.width = width
    if(height) this.canvas.height = height
    this.ctx = canvas.getContent("2d")
  }
  clear(options){
    const [x0=0, y0=0, x1=this.canvas.width, y1=this.canvas.height] = options
    this.ctx.clearRect(x0, y0, x1, y1)
  }
  chart(paths=[], options={}){
    chart(this.ctx, paths, options)
  }
  text(textOptions, options){
    text(this.ctx, textOptions, options)
  }
  img(content,  options){
    img(this.ctx, content, options)
  }
  arc(arcOptions, options){
    arc(this.ctx, arcOptions, options)
  }
  rect(){

  }
  setStyle(options){
    setStyle(this.ctx, options)
  }
}

export function chart(ctx, paths = [], options = {}) {
  const {
    close,
    type = "stroke"
  } = options
  let pt = [...paths]
  setStyle(ctx, options)
  ctx.beginPath()
  ctx.moveTo(...pt.shift())
  for (let v of pt) {
    let l = v.length
    if (l === 2) {
      ctx.lineTo(...v)
    } else if (l === 4) {
      ctx.quadraticCurveTo(...v)
    } else if (l === 5) {
      ctx.arcTo(...v)
    } else {
      ctx.bezierCurveTo(...v)
    }
  }
  if (close) {
    ctx.closePath()
  }
  ctx[type]()
  ctx.save()
}

export function text(ctx, textOptions = {}, options = {}) {
  const {
    font,
    text,
    x, y,
    textAlign,
    textBaseline,
    maxWidth = ctx.measureText(text).width
  } = textOptions

  const {
    type = "fill"
  } = options

  if (font) ctx.font = font
  if (textAlign) ctx.textAlign = textAlign
  if (textBaseline) ctx.textBaseline = textBaseline

  setStyle(ctx, options, "fill")

  ctx[`${type}Text`](text, x, y, maxWidth)
  ctx.save()
}

export function img(ctx, imgOptions={}, options = {}) {
  const {
    x, y,
    content
  } = imgOptions
  ctx.save()
  setStyle(ctx, options)
  if (typeof content === "string") {
    let img = document.createElement("img")
    img.src = content
    img.onload = function () {
      ctx.drawImage(img, x, y)
      ctx.res()
    }
  } else {
    content.onload = function () {
      ctx.drawImage(content, x, y)
      ctx.save()
    }
  }
}

export function arc(ctx, arcOptions, options) {
  const {
    center,
    radius,
    radian
  } = arcOptions,
    {
    type = "stroke"
  } = options

  setStyle(ctx, options)

  ctx.beginPath()
  ctx.arc(...center, radius, ...radian)
  ctx[type]()
  ctx.save()
}

export function setStyle(ctx, options, defaultType) {
  const {
    repeat,
    shadow,
    gradient,
    lineCap,
    lineJoin,
    lineWidth,
    miterLimit,
    color = "#000",
    type = defaultType || "stroke"
  } = options

  if (lineCap) ctx.lineCap = lineCap
  if (lineJoin) ctx.lineJoin = lineJoin
  if (lineWidth) ctx.lineWidth = lineWidth
  if (miterLimit) ctx.miterLimit = miterLimit
  if (gradient) {
    const {
      type:gradientType = "linear",
      range = [0, 0, 0, 0],
      colors = [[0, "#000"]]
    } = gradient

    let grd = ctx[`create${gradientType.replace(/^(\w).*/, (a, b) => a.replace(/^\w/, b.toUpperCase()))}Gradient`](...range)

    for (let v of colors) {
      grd.addColorStop(...v)
    }
    ctx[`${type}Style`] = grd
  }

  if (repeat) {
    const {
      content,
      direction = "no-repeat"
    } = repeat
    let pat
    try {
      pat = ctx.createPattern(content, direction)
    } catch (error) {
      pat = color
    }
    ctx[`${type}Style`] = pat
  }

  if (!gradient && !repeat) {
    ctx[`${type}Style`] = color
  }

  if (shadow) {
    const {
      blur = 0,
      offsetX = 0,
      offsetY = 0,
      color = "#000"
    } = shadow
    ctx.shadowBlur = blur
    ctx.shadowOffsetX = offsetX
    ctx.shadowOffsetY = offsetY
    ctx.shadowColor = color
  }
}