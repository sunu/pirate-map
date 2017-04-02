import SimplexNoise from "simplex-noise"

var simplex = new SimplexNoise(),
  value2d = simplex.noise2D(5, 10)

var canvas = document.getElementsByTagName('canvas')[0]
canvas.width = 500
canvas.height = 500
var ctx = canvas.getContext('2d')
var image = ctx.createImageData(canvas.width, canvas.height)
var data = image.data

for (var x = 0; x < canvas.width; x++) {
  for (var y = 0; y < canvas.height; y++) {
    // convert from -1 to 1 range to 0 to 1 range
    // https://stackoverflow.com/q/929103/
    var value = (simplex.noise2D(x / 100, y / 100) + 1) / 2
    value *= 255
    var cell = (x + y * canvas.width) * 4

    if (value < 80) {
      // land
      data[cell] = 158
      data[cell + 1] = 158
      data[cell + 2] = 158
      data[cell + 3] = (255 - value) // alpha.
    } else {
      // water
      data[cell] = 0
      data[cell + 1] = 153
      data[cell + 2] = 255
      data[cell + 3] = value // alpha.
    }
    
  }
}

ctx.putImageData(image, 0, 0)