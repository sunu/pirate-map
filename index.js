import SimplexNoise from "simplex-noise"

var simplex = new SimplexNoise(),
  value2d = simplex.noise2D(5, 10)

var canvas = document.getElementsByTagName('canvas')[0]
canvas.width = 1000
canvas.height = 600
var ctx = canvas.getContext('2d')
var image = ctx.createImageData(canvas.width, canvas.height)
var data = image.data


let generateNoise = (x, y) => {
  let nx = x / canvas.width - 0.5
  let ny = y / canvas.height - 0.5

  // mix things up with varied frquencies and octaves
  let frequency = 1.5
  let value = (
    1* simplex.noise2D(frequency * nx, frequency * ny) +
    0.5 * simplex.noise2D(2 * frequency * nx, 2 * frequency * ny) +
    0.25 * simplex.noise2D(4 * frequency * nx, 4 * frequency * ny) +
    0.125 * simplex.noise2D(8 * frequency * nx, 8 * frequency * ny)
  )
  value = Math.pow(value, 2)

  // Higher values at center
  let distance = Math.hypot(canvas.width / 2 - x, canvas.height / 2 - y) / 255
  // calibration constants, came of with these by playing around
  // roughly regulate island size
  let a = 0.5
  let b = 0.6
  let c = 0.6
  value = (value + a) * (1 - b * Math.pow(distance, c))
  value *= 255
  return value
}

for (var x = 0; x < canvas.width; x++) {
  for (var y = 0; y < canvas.height; y++) {
    var value = generateNoise(x, y)
    var cell = (x + y * canvas.width) * 4

    if (value > 80) {
      // land
      data[cell] = 160
      data[cell + 1] = 140
      data[cell + 2] = 120
      data[cell + 3] = value // alpha.
    } else if (value > 70) {
      // shallow waters
      data[cell] = 0
      data[cell + 1] = 153
      data[cell + 2] = 255
      data[cell + 3] = (255 - value) / 1.05 // alpha.
    } else {
      // deep waters
      data[cell] = 0
      data[cell + 1] = 153
      data[cell + 2] = 255
      data[cell + 3] = 255 - value // alpha.
    }
  }
}

ctx.putImageData(image, 0, 0)