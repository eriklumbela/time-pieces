
const birthDate = Date.parse("18 dec 1985")
const birthDateElement = document.getElementById('birth-date')
birthDateElement.innerText = new Date(birthDate).toLocaleDateString()
const lifeExpectancyInYearsAccordingToDataCommons = 79.7

const lifeExpectancyYearsElement = document.getElementById('life-expectancy-years')
lifeExpectancyYearsElement.innerText = lifeExpectancyInYearsAccordingToDataCommons.toLocaleString()
const lifeExpectancyInMillisecondsAccordingToDataCommons = lifeExpectancyInYearsAccordingToDataCommons * 365.25 * 24 * 60 * 60 * 1000
const deathDateAccordingToDataCommons = birthDate + lifeExpectancyInMillisecondsAccordingToDataCommons

const todaysDate = new Date(Date.now()).toLocaleDateString()
const today = document.getElementById('today')
today.innerText = todaysDate.toLocaleString()

const millisecondsSpent = Date.now()-birthDate
const daysSpent = Math.round(millisecondsSpent / 1000 / 60 / 60 / 24)
const daysSpentElement = document.getElementById('days-spent')
daysSpentElement.innerText = Math.round(daysSpent).toLocaleString()

const expectedTotalLifeInMilliseconds = deathDateAccordingToDataCommons - birthDate
let lifeLeftInMilliseconds = expectedTotalLifeInMilliseconds - millisecondsSpent
const expectedDaysLeft = Math.round(lifeLeftInMilliseconds / 1000 / 60 / 60 / 24)
const lifeSpentExpectedFraction = millisecondsSpent/expectedTotalLifeInMilliseconds

const lifeSpentExpectedPercentage = (lifeSpentExpectedFraction*100)

const lifeLeftExpectedFraction = 1 - lifeSpentExpectedFraction
const lifeLeftExpectedPercentage = (lifeLeftExpectedFraction*100)

const lifeLeft = window.document.getElementById('life-left')
if (lifeLeft){
  lifeLeft.style.height = `${lifeLeftExpectedPercentage}%`
}
const lifeSpent = window.document.getElementById('life-spent')
if (lifeSpent){
  lifeSpent.style.height = `${lifeSpentExpectedPercentage}%`
}

const percentageSpent = document.getElementById('percentage-spent')
percentageSpent.innerText = `${round(lifeSpentExpectedPercentage, 2).toLocaleString()}%`
const percentageLeft = document.getElementById('percentage-left')
percentageLeft.innerText = `${round(lifeLeftExpectedPercentage, 2).toLocaleString()}%`
const daysLeft = document.getElementById('days-left')
daysLeft.innerText = expectedDaysLeft.toLocaleString()
const yearsLeft = document.getElementById('years-left')
yearsLeft.innerText = round(expectedDaysLeft / 365.25, 2).toLocaleString()

// life left in seconds
const interval = 1000

function setLifeLeftInSeconds() {
  lifeLeftInMilliseconds -= interval
  const secondsLeft = document.getElementById('seconds-left')
  secondsLeft.innerText = Math.floor(lifeLeftInMilliseconds / 1000).toLocaleString()
}
setInterval(setLifeLeftInSeconds, 1000);