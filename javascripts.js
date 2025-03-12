document.addEventListener('DOMContentLoaded', () => {
  BackgroundMove()

  Draggable1()
  Draggable2()
  Draggable3()
  Draggable4()
  Draggable5()
})

// ПЕРВЫЙ ЭКРАН
function BackgroundMove() {
  document.querySelector('.hint1').addEventListener('click', () => {
    const leftBox = document.querySelector('.image1')
    const rightBox = document.querySelector('.image2')
    const firstText = document.querySelector('.text1')
    const Hint = document.querySelector('.hint1')

    leftBox.style.transform = 'translateX(-25vw)'
    rightBox.style.transform = 'translateX(25vw)'
    firstText.style.opacity = '0'
    Hint.style.opacity = '0'
  })
}

// ВТОРОЙ ЭКРАН
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.elementphoto')

  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      if (index < images.length - 1) {
        const nextImage = images[index + 1]

        const imageRect = image.getBoundingClientRect()
        const nextImageRect = nextImage.getBoundingClientRect()

        const deltaX = nextImageRect.left - imageRect.left
        const deltaY = nextImageRect.top - imageRect.top

        image.style.transform = `translate(${deltaX}px, ${deltaY}px)`
        nextImage.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`

        setTimeout(() => {
          image.parentNode.insertBefore(nextImage, image)

          image.style.transform = ''
          nextImage.style.transform = ''
        }, 500)
      }
    })
  })
})
// ТРЕТИЙ ЭКРАН
function Draggable1() {
  dragElement(document.getElementById('silhouette5'))

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0
    if (document.getElementById(elmnt.id + 'header')) {
      document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown
    } else {
      elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
      e = e || window.event
      e.preventDefault()

      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement

      document.onmousemove = elementDrag
    }

    function elementDrag(e) {
      e = e || window.event
      e.preventDefault()

      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY

      elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
    }

    function closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}

function Draggable2() {
  dragElement(document.getElementById('silhouette1'))

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0
    if (document.getElementById(elmnt.id + 'header')) {
      document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown
    } else {
      elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
      e = e || window.event
      e.preventDefault()

      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement

      document.onmousemove = elementDrag
    }

    function elementDrag(e) {
      e = e || window.event
      e.preventDefault()

      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY

      elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
    }

    function closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}
function Draggable3() {
  dragElement(document.getElementById('silhouette2'))

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0
    if (document.getElementById(elmnt.id + 'header')) {
      document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown
    } else {
      elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
      e = e || window.event
      e.preventDefault()

      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement

      document.onmousemove = elementDrag
    }

    function elementDrag(e) {
      e = e || window.event
      e.preventDefault()

      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY

      elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
    }

    function closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}
function Draggable4() {
  dragElement(document.getElementById('silhouette3'))

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0
    if (document.getElementById(elmnt.id + 'header')) {
      document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown
    } else {
      elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
      e = e || window.event
      e.preventDefault()

      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement

      document.onmousemove = elementDrag
    }

    function elementDrag(e) {
      e = e || window.event
      e.preventDefault()

      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY

      elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
    }

    function closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}

function Draggable5() {
  dragElement(document.getElementById('silhouette4'))

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0
    if (document.getElementById(elmnt.id + 'header')) {
      document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown
    } else {
      elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
      e = e || window.event
      e.preventDefault()

      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement

      document.onmousemove = elementDrag
    }

    function elementDrag(e) {
      e = e || window.event
      e.preventDefault()

      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY

      elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
    }

    function closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}

// ЧЕТВЕРТЫЙ ЭКРАН
// function initCanvas() {
//   let canvas = document.getElementById('canvas')
//   let ctx = canvas.getContext('2d')

//   function getMousePos(canvas, evt) {
//     let rect = canvas.getBoundingClientRect()
//     return {
//       x: evt.clientX - rect.left,
//       y: evt.clientY - rect.top
//     }
//   }

//   function mouseMove(evt) {
//     let mousePos = getMousePos(canvas, evt)
//     ctx.lineTo(mousePos.x, mousePos.y)
//     ctx.stroke()
//   }

//   canvas.addEventListener('mousedown', function (evt) {
//     let mousePos = getMousePos(canvas, evt)
//     ctx.beginPath()
//     ctx.moveTo(mousePos.x, mousePos.y)
//     evt.preventDefault()
//     canvas.addEventListener('mousemove', mouseMove, false)
//   })

//   canvas.addEventListener(
//     'mouseup',
//     function () {
//       canvas.removeEventListener('mousemove', mouseMove, false)
//     },
//     false
//   )

//   document.getElementById('clear').addEventListener(
//     'click',
//     function () {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//     },
//     false
//   )
// }

// ПОДВАЛ
document.addEventListener('DOMContentLoaded', () => {
  const mainObject = document.getElementById('hintbase1')
  const secondaryObject = document.getElementById('anna')

  mainObject.addEventListener('click', () => {
    mainObject.style.opacity = '0'
    mainObject.style.pointerEvents = 'none'

    secondaryObject.style.opacity = '1'
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const mainObject = document.getElementById('hintbase2')
  const secondaryObject = document.getElementById('kate')

  mainObject.addEventListener('click', () => {
    mainObject.style.opacity = '0'
    mainObject.style.pointerEvents = 'none'

    secondaryObject.style.opacity = '1'
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const mainObject = document.getElementById('hintbase3')
  const secondaryObject = document.getElementById('kamila')

  mainObject.addEventListener('click', () => {
    mainObject.style.opacity = '0'
    mainObject.style.pointerEvents = 'none'

    secondaryObject.style.opacity = '1'
  })
})
