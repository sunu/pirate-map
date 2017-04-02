export function tearCanvasBorders (canvas) {
  _tearBottom(canvas)
  _tearTop(canvas)
  _tearLeft(canvas)
  _tearRight(canvas)
}

function _tearBottom (canvas) {
  let ctx = canvas.getContext('2d')
  let lastX = 0, randX, randY
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(0, canvas.height)

  randY = (Math.floor(Math.random() * 3) + 95) / 100 * canvas.height
  ctx.lineTo(0, randY)

  while (lastX <= canvas.width) {
    randX = (Math.floor(Math.random() * 3)) / 100 * canvas.width
    randY = (Math.floor(Math.random() * 3) + 95) / 100 * canvas.height
    lastX = lastX + randX
    ctx.lineTo(lastX, randY)
  }
  ctx.lineTo(canvas.width, canvas.height)
  ctx.closePath()
  ctx.clip()
  ctx.beginPath()
  ctx.fillStyle = 'white'
  ctx.rect(0, 0, canvas.width, canvas.height)
  ctx.fill()
  ctx.restore()
}

function _tearTop (canvas) {
  let ctx = canvas.getContext('2d')
  let lastX = 0, randX, randY
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(0, 0)

  randY = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.height
  ctx.lineTo(0, randY)

  while (lastX <= canvas.width) {
    randX = (Math.floor(Math.random() * 3)) / 100 * canvas.width
    randY = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.height
    lastX = lastX + randX
    ctx.lineTo(lastX, randY)
  }
  ctx.lineTo(canvas.width, 0)
  ctx.closePath()
  ctx.clip()
  ctx.beginPath()
  ctx.fillStyle = 'white'
  ctx.rect(0, 0, canvas.width, canvas.height)
  ctx.fill()
  ctx.restore()
}

function _tearLeft (canvas) {
  let ctx = canvas.getContext('2d')
  let lastY = 0, randX, randY
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(0, 0)

  randX = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.width
  ctx.lineTo(randX, 0)

  while (lastY <= canvas.height) {
    randX = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.width
    randY = (Math.floor(Math.random() * 3)) / 100 * canvas.height
    lastY = lastY + randY
    ctx.lineTo(randX, lastY)
  }
  ctx.lineTo(0, canvas.height)
  ctx.closePath()
  ctx.clip()
  ctx.beginPath()
  ctx.fillStyle = 'white'
  ctx.rect(0, 0, canvas.width, canvas.height)
  ctx.fill()
  ctx.restore()
}

function _tearRight (canvas) {
  let ctx = canvas.getContext('2d')
  let lastY = 0, randX, randY
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(canvas.width, 0)

  randX = (Math.floor(Math.random() * 3) + 1) / 100 * canvas.width
  ctx.lineTo(randX, 0)

  while (lastY <= canvas.height) {
    randX = (Math.floor(Math.random() * 3) + 95) / 100 * canvas.width
    randY = (Math.floor(Math.random() * 3)) / 100 * canvas.height
    lastY = lastY + randY
    ctx.lineTo(randX, lastY)
  }
  ctx.lineTo(canvas.width, canvas.height)
  ctx.closePath()
  ctx.clip()
  ctx.beginPath()
  ctx.fillStyle = 'white'
  ctx.rect(0, 0, canvas.width, canvas.height)
  ctx.fill()
  ctx.restore()
}