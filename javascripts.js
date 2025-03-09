document.addEventListener('DOMContentLoaded', () => {
  BackgroundMove()
  // ChangePhoto()
  // Draggable()
})

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
// НЕ РАБОТАЕТ
// function ChangePhoto() {
//   const photos = [
//     'images/element.svg',
//     'images/element3.svg',
//     'images/element4.svg'
//   ]
//   let currentIndex = 0

//   const photoElement = document.querySelector('.elementphoto1')
//   currentIndex = (currentIndex + 1) % photos.length
//   photoElement.style.opacity = 0
//   setTimeout(() => {
//     photoElement.src = photos[currentIndex]

//     photoElement.style.opacity = 1
//   }, 500)
//   photoElement.addEventListener('click', ChangePhoto)
// }

// НЕ РАБОТАЕТ
// function Draggable() {
//   // Make the DIV element draggable:
//   dragElement(document.getElementById('silhouette5'))

//   function dragElement(elmnt) {
//     let pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0
//     if (document.getElementById(elmnt.id + 'header')) {
//       // if present, the header is where you move the DIV from:
//       document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown
//     } else {
//       // otherwise, move the DIV from anywhere inside the DIV:
//       elmnt.onmousedown = dragMouseDown
//     }

//     function dragMouseDown(e) {
//       e = e || window.event
//       e.preventDefault()
//       // get the mouse cursor position at startup:
//       pos3 = e.clientX
//       pos4 = e.clientY
//       document.onmouseup = closeDragElement
//       // call a function whenever the cursor moves:
//       document.onmousemove = elementDrag
//     }

//     function elementDrag(e) {
//       e = e || window.event
//       e.preventDefault()
//       // calculate the new cursor position:
//       pos1 = pos3 - e.clientX
//       pos2 = pos4 - e.clientY
//       pos3 = e.clientX
//       pos4 = e.clientY
//       // set the element's new position:
//       elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
//       elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
//     }

//     function closeDragElement() {
//       // stop moving when mouse button is released:
//       document.onmouseup = null
//       document.onmousemove = null
//     }
//   }
// }

// НЕ РАБОТАЕТ
// const canvas = document.getElementById('canvas')
// const ctx = canvas.getContext('2d')

// // Устанавливаем размеры канваса
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// // Переменные для рисования
// let drawing = false

// // Начало рисования
// canvas.addEventListener('mousedown', () => {
//   drawing = true
//   ctx.beginPath() // Начинаем новый путь
// })

// // Конец рисования
// canvas.addEventListener('mouseup', () => {
//   drawing = false
//   ctx.closePath() // Закрываем путь
// })

// // Рисуем линии
// canvas.addEventListener('mousemove', (event) => {
//   if (!drawing) return

//   const x = event.clientX
//   const y = event.clientY

//   ctx.lineWidth = 5 // Толщина линии
//   ctx.lineCap = 'round' // Закругление концов линий
//   ctx.strokeStyle = '#740606' // Цвет линии (черный)

//   ctx.lineTo(x, y) // Рисуем линию до текущего положения курсора
//   ctx.stroke() // Отрисовка линии
//   ctx.beginPath() // Начинаем новый путь для следующего сегмента
//   ctx.moveTo(x, y) // Перемещаемся к текущему положению курсора
// })

// // Изменяем размеры канваса при изменении размеров окна
// window.addEventListener('resize', () => {
//   canvas.width = window.innerWidth
//   canvas.height = window.innerHeight
// })
