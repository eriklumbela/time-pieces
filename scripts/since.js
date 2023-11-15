
function randomDateGenerator(start, end, startHour, endHour) {
  const date = new Date(+start + Math.random() * (end - start));
  const hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

function setCircleColor(){
  const circleForeground = document.getElementById('circle-foreground')
  circleForeground.setAttribute('fill', randomColor())
}


const randomDateElement = document.getElementById('random-date')
function setRandomDate(){
  let randomDate = randomDateGenerator(new Date(1, 0, 1).setFullYear(0), new Date(3000, 11, 31), 0, 23)

  randomDateElement.innerText = randomDate.toLocaleString()
}

setRandomDate()
setCircleColor()
