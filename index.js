import SimplexNoise from "simplex-noise"

import * as utils from "./utils"

class PirateMap {
  constructor () {
    var canvas = document.getElementsByTagName('canvas')[0]
    canvas.width = 1000
    canvas.height = 600
    this.canvas = canvas
    this.simplex = new SimplexNoise()
    this.drawMap()
  }

  /* Draw a compass on the canvas */
  drawCompass () {
    let ctx = this.canvas.getContext('2d')
    let compassWidth = this.canvas.width / 5
    let compassHeight = this.canvas.height / 5
    ctx.fillStyle = "#58B8EB"
    ctx.fillStyle = "#F00"

    // draw outer circle
    ctx.beginPath()
    ctx.fillStyle = "#0FDDF5"
    ctx.arc(compassWidth/2, this.canvas.height-compassHeight/2, 22, 0, 36, false)
    ctx.fill()

    // draw inner circle
    ctx.beginPath()
    ctx.fillStyle = "#AFEEF9"
    ctx.arc(compassWidth/2, this.canvas.height - compassHeight/2, 20, 0, 36, false)
    ctx.fill()

    // lower niddle
    ctx.beginPath()
    ctx.moveTo(compassWidth/2, this.canvas.height)
    ctx.lineTo(compassWidth/2 - 5, this.canvas.height - compassHeight/2)
    ctx.lineTo(compassWidth/2, this.canvas.height - compassHeight/2)
    ctx.lineTo(compassWidth/2, this.canvas.height)
    ctx.fillStyle = "#DAE1EF"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(compassWidth/2, this.canvas.height)
    ctx.lineTo(compassWidth/2 + 5, this.canvas.height - compassHeight/2)
    ctx.lineTo(compassWidth/2, this.canvas.height - compassHeight/2)
    ctx.lineTo(compassWidth/2, this.canvas.height)
    ctx.fillStyle = "#91AEDC"
    ctx.fill()

    // upper niddle
    ctx.beginPath()
    ctx.moveTo(compassWidth/2, this.canvas.height - compassHeight)
    ctx.lineTo(compassWidth/2 - 5, this.canvas.height - compassHeight/2)
    ctx.lineTo(compassWidth/2, this.canvas.height - compassHeight/2)
    ctx.lineTo(compassWidth/2, this.canvas.height - compassHeight)
    ctx.fillStyle = "#FF532B"
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(compassWidth/2, this.canvas.height - compassHeight)
    ctx.lineTo(compassWidth/2 + 5, this.canvas.height - compassHeight/2)
    ctx.lineTo(compassWidth/2, this.canvas.height - compassHeight/2)
    ctx.lineTo(compassWidth/2, this.canvas.height -compassHeight)
    ctx.fillStyle = "#DC052C"
    ctx.fill()
  }

  /* Generate alpha value based on co-ordinate of pixel
  using simplex noise */
  generateNoise (x, y) {
    let nx = x / this.canvas.width - 0.5
    let ny = y / this.canvas.height - 0.5

    // mix things up with varied frquencies and octaves
    let frequency = 1.5
    let value = (
      1* this.simplex.noise2D(frequency * nx, frequency * ny) +
      0.5 * this.simplex.noise2D(2 * frequency * nx, 2 * frequency * ny) +
      0.25 * this.simplex.noise2D(4 * frequency * nx, 4 * frequency * ny) +
      0.125 * this.simplex.noise2D(8 * frequency * nx, 8 * frequency * ny)
    )
    value = Math.pow(value, 2)

    // Higher values at center
    let distance = Math.hypot(this.canvas.width / 2 - x, this.canvas.height / 2 - y) / 255
    // calibration constants, came of with these by playing around
    // roughly regulate island size
    let a = 0.5
    let b = 0.6
    let c = 0.6
    value = (value + a) * (1 - b * Math.pow(distance, c))
    value *= 255
    return value
  }

  drawWaterNames () {
    let totalPoints = this.waters.length
    let sectionLength = Math.floor(totalPoints / 3)
    let bayOne = utils.getRandomSample(this.waters.slice(totalPoints - sectionLength, totalPoints).filter((val) => {
      return (val[0] < this.canvas.width - 200) && (val[1] > 100)
    }))
    let ctx = this.canvas.getContext('2d')
    ctx.font = '30px "Tangerine"'
    ctx.fillStyle = "#000"
    ctx.fillText(bayOne[2] + " of " + utils.getRandomName(), bayOne[0], bayOne[1]);
    let bayTwo = utils.getRandomSample(this.waters.slice(0, sectionLength).filter((val) => {
      return (val[0] > 150) && (val[1] > 100)
    }))
    ctx.font = '30px "Tangerine"'
    ctx.fillStyle = "#000"
    ctx.fillText(bayTwo[2] + " of " + utils.getRandomName(), bayTwo[0], bayTwo[1]);
  }

  /* Guide our pirates to the treasure */
  drawPath () {
    let totalPoints = this.lands.length
    let sectionLength = Math.floor(totalPoints / 5)
    let treasure = this.lands[
      utils.getRandomInt(totalPoints - sectionLength, totalPoints)
    ]
    let ctx = this.canvas.getContext('2d')
    ctx.beginPath()
    ctx.strokeStyle = "#FF532B"
    ctx.lineWidth = 5
    ctx.moveTo(treasure[0] - 10, treasure[1] - 10)
    ctx.lineTo(treasure[0] + 10, treasure[1] + 10)
    ctx.stroke()
    ctx.moveTo(treasure[0] + 10, treasure[1] - 10)
    ctx.lineTo(treasure[0] - 10, treasure[1] + 10)
    ctx.stroke()

    let path = []
    let start = 0
    while (start < totalPoints - sectionLength) {
      let point = this.lands[utils.getRandomInt(start, start + sectionLength)]
      path.push(point)
      ctx.font = '30px "Tangerine"'
      ctx.fillStyle = "#000"
      ctx.fillText(point[2] + " of " + utils.getRandomName(), point[0]-10, point[1]-10);
      start = start + sectionLength
    }
    path.push(treasure)

    ctx.setLineDash([10, 10])
    ctx.beginPath()
    // draw a smooth curve through all the points in path
    // from http://stackoverflow.com/a/7058606
    // move to the first point
    ctx.moveTo(path[0][0], path[0][1])
    for (var i = 1; i < path.length - 2; i++) {
      var xc = (path[i][0] + path[i + 1][0]) / 2
      var yc = (path[i][1] + path[i + 1][1]) / 2
      ctx.quadraticCurveTo(path[i][0], path[i][1], xc, yc)
    }
     // curve through the last two path
     ctx.quadraticCurveTo(path[i][0], path[i][1], path[i+1][0] ,path[i+1][1])
     ctx.stroke()
  }

  /* Get the wheels running. Make shit happen. */
  drawMap () {
    let ctx = this.canvas.getContext('2d')
    var image = ctx.createImageData(this.canvas.width, this.canvas.height)
    var data = image.data
    this.lands = []
    this.waters = []
    for (var x = 0; x < this.canvas.width; x++) {
      for (var y = 0; y < this.canvas.height; y++) {
        var value = this.generateNoise(x, y)
        var cell = (x + y * this.canvas.width) * 4

        if (value > 200) {
          // mountains
          data[cell] = 54
          data[cell + 1] = 68
          data[cell + 2] = 50
          data[cell + 3] = value // alpha.
          this.lands.push([x, y, "Mountains"])
        } else if (value > 150) {
          // jungle
          data[cell] = 54
          data[cell + 1] = 68
          data[cell + 2] = 53
          data[cell + 3] = value
          this.lands.push([x, y, "Jungles"])
        } else if (value > 80) {
          // land
          data[cell] = 54
          data[cell + 1] = 68
          data[cell + 2] = 53
          data[cell + 3] = value
          this.lands.push([x, y, "Plains"])
        } else if (value > 70) {
          // shallow waters
          data[cell] = 0
          data[cell + 1] = 113
          data[cell + 2] = 185
          data[cell + 3] = (255 - value) / 1.05
        } else {
          // deep waters
          data[cell] = 0
          data[cell + 1] = 113
          data[cell + 2] = 185
          data[cell + 3] = 255 - value
          this.waters.push([x, y, "Bay"])
        }
      }
    }
    ctx.putImageData(image, 0, 0)
    this.drawCompass()
    this.drawPath()
    this.drawWaterNames()
    utils.tearCanvasBorders(this.canvas)
  }
}

window.WebFont.load({
  google: {
    families: ['Tangerine']
  },
  active: () => {
    new PirateMap()
  }
});

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  let canvas = document.getElementsByTagName('canvas')[0]
  let ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  new PirateMap()
})

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  let canvas = document.getElementsByTagName('canvas')[0]
  let ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  document.getElementsByTagName('h1')[0].innerHTML = "The hidden treasure of Captain " + utils.getRandomName()
  new PirateMap()
})

document.getElementsByTagName('h1')[0].innerHTML = "The hidden treasure of Captain " + utils.getRandomName()