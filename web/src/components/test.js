import React, { PureComponent } from "react"
import { chart, text, img, arc, setStyle } from "libs/util/canvas"

export default class Canvas extends PureComponent {
  render() {
    return (
      <div>
        <canvas height="900" width="900" ref={(ele) => this.canvas = ele}></canvas>
      </div>
    )
  }
  componentDidMount() {
    this.ctx = this.canvas.getContext("2d")
    this.drawArc()
  }
  drawArc() {
    const len = 2 * Math.PI / 360
    arc(this.ctx, {
      center: [200, 200],
      radius: 70,
      radian: [0, 2 * Math.PI]
    }, {
        lineWidth: 2,
        color: "rgba(18, 44, 79, .3)",
        type: "stroke"
      })

    arc(this.ctx, {
      center: [200, 200],
      radius: 47,
      radian: [0, 2 * Math.PI]
    }, {
        lineWidth: 16,
        color: "#44bde1",
        type: "stroke"
      })

    arc(this.ctx, {
      center: [200, 200],
      radius: 47,
      radian: [0, 2 * Math.PI]
    }, {
        lineWidth: 3,
        color: "#3398c4",
        type: "stroke"
      })

    for (let i = 0; i < 36; i += 2) {
      arc(this.ctx, {
        center: [200, 200],
        radius: 47,
        radian: [len * i * 10, len * (i + 1) * 10]
      }, {
          lineWidth: 2,
          color: "#122c4f",
          type: "stroke",
          lineCap: "round"
        })
    }

    img(this.ctx, {
      x: 0, y:0,
      content: "../images/grid.png"
    })
    // for (let i = 0; i < 46; i += 2) {
    //   arc(this.ctx, {
    //     center: [200, 200],
    //     radius: 56,
    //     radian: [len * 360 / 46 * i, len * 360 / 46 * (i + 1)]
    //   }, {
    //       lineWidth: 16,
    //       color: "#15355f",
    //       type: "stroke",
    //       lineCap: "butt"
    //     })
    // }
  }
}