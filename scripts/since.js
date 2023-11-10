
function randomDateGenerator(start, end, startHour, endHour) {
  const date = new Date(+start + Math.random() * (end - start));
  const hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

function setCircleColors(){
  const randomColors = randomColor({count: 4})
  const circleBackground = document.getElementById('circle-background')
  circleBackground.setAttribute('fill', randomColors[0])
  const circleForeground = document.getElementById('circle-foreground')
  circleForeground.setAttribute('fill', randomColors[1])

}


const randomDateElement = document.getElementById('random-date')
function setRandomDate(){
  let randomDate = randomDateGenerator(new Date(1, 0, 1).setFullYear(0), new Date(3000, 11, 31), 0, 23)

  randomDateElement.innerText = randomDate.toLocaleString()
}

setRandomDate()

setInterval(() => {
  setRandomDate()
  setCircleColors()
}, 60000);
setCircleColors()
