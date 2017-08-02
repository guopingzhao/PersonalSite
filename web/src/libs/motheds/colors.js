import { generateIntNumber } from "./maths"

export function generateRandomColors(colors = {}, a = 1) {
  let { r = {}, g = {}, b = {} } = colors,
    { rl = 0, rg = 255 } = r,
    { gl = 0, gg = 255 } = g,
    { bl = 0, bg = 255 } = b
  return `rgba(${generateIntNumber(rg, rl)},${generateIntNumber(gg, gl)},${generateIntNumber(bg, bl)},${a})`
}

