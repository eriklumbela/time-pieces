
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}    

const daySecondsPast = getSecondsToday()

function fromCircleToClock(timeUnitInSeconds, circleId){
  const targetElementId = '#' + circleId

  // set colors
  const hourColors = randomColor({count: 4})
  $(`#fill-zero-${circleId}`).attr('stop-color', hourColors[0])
  $(`#fill-hundred-${circleId}`).attr('stop-color', hourColors[1])
  $(`#stroke-zero-${circleId}`).attr('stop-color', hourColors[2])
  $(`#stroke-hundred-${circleId}`).attr('stop-color', hourColors[3])
  if (Math.random()>0.5){
    $(targetElementId).attr('fill', `url(#fill-gradient-${circleId})`)
  } else {
    $(targetElementId).attr('fill', `${hourColors[0]}`)
  }
  if (Math.random()>0.5){
    $(targetElementId).attr('stroke', `url(#stroke-gradient-${circleId})`)
  } else {
    $(targetElementId).attr('stroke', `${hourColors[2]}`)
  }

  // set animation
  const remainderInSeconds = (daySecondsPast % timeUnitInSeconds)
  const fractionOfRemainderAndTimeUnit = remainderInSeconds/timeUnitInSeconds
  $(targetElementId).html(`
        <animate id="animation${timeUnitInSeconds}"
          attributeName="stroke-dasharray"
          from="${fractionOfRemainderAndTimeUnit*629} 629"
          to="629 629"
          dur="${(1-fractionOfRemainderAndTimeUnit)*timeUnitInSeconds}s"
          fill="freeze"
        />
        <animate
          attributeName="stroke-dasharray"
          begin="animation${timeUnitInSeconds}.end"
          from="0 629"
          to="629 629"
          dur="${timeUnitInSeconds}s"
          repeatCount="indefinite"
        />`)
}

fromCircleToClock(12*3600, '12-hour-circle')
fromCircleToClock(3600, 'hour-circle')
fromCircleToClock(60, 'minute-circle')