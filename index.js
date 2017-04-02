import SimplexNoise from "simplex-noise"

var simplex = new SimplexNoise(),
  value2d = simplex.noise2D(5, 10)

var canvas = document.getElementsByTagName('canvas')[0]
canvas.width = 1000
canvas.height = 600
var ctx = canvas.getContext('2d')
var image = ctx.createImageData(canvas.width, canvas.height)
var data = image.data

let generateNoise = (nx, ny, frequency) => {
  // mix things up with varied frquencies and octaves
  let value = (
    1* simplex.noise2D(frequency * nx, frequency * ny) +
    0.5 * simplex.noise2D(2 * frequency * nx, 2 * frequency * ny) +
    0.25 * simplex.noise2D(4 * frequency * nx, 4 * frequency * ny) +
    0.125 * simplex.noise2D(8 * frequency * nx, 8 * frequency * ny)
  )
  // convert from -1 to 1 range to 0 to 1 range
  // https://stackoverflow.com/q/929103/
  value = (value + 1) / 2
  value *= 255
  return value
}

for (var x = 0; x < canvas.width; x++) {
  for (var y = 0; y < canvas.height; y++) {
    let nx = x/canvas.width - 0.5
    let ny = y/canvas.height - 0.5
    let frequency = 1.5
    var value = generateNoise(nx, ny, frequency)
    var cell = (x + y * canvas.width) * 4

    if (value < 120) {
      // land
      data[cell] = 160
      data[cell + 1] = 140
      data[cell + 2] = 120
      data[cell + 3] = 255 - value // alpha.
    } else if (value < 150) {
      // shallow waters
      data[cell] = 0
      data[cell + 1] = 153
      data[cell + 2] = 255
      data[cell + 3] = (value + 255) / 2.5 // alpha.
    } else {
      // deep waters
      data[cell] = 0
      data[cell + 1] = 153
      data[cell + 2] = 255
      data[cell + 3] = (value + 255) / 2.3// alpha.
    }
  }
}

ctx.putImageData(image, 0, 0)