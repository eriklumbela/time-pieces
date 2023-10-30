// identifiers
const classYearsToIceAge = 'years-to-ice-age'
const classYearsLifeExpectancy = 'years-life-expectancy'
const classLifetimesToIceAge = 'lifetimes-to-ice-age'

// data
const optionsYearsToIceAge = [ 50_000, 15_000, 50_000, 60_000, 75_000, 150_000, 250_000 ]
const optionsYearsLifeExpectancy = [ 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87 ]

let yearsToIceAge, yearsLifeExpectancy, numberOfLifetimes

// set content functions
function setElementsOfClassToRandomValueOfArray(className, options){
  const elements = document.getElementsByClassName(className)
  const choice = options[Math.floor(Math.random()*options.length)]
  if (className === classYearsToIceAge) yearsToIceAge = choice
  if (className === classYearsLifeExpectancy) yearsLifeExpectancy = choice

  for (let element of elements) {
    element.innerText = choice.toLocaleString()
  }
}

function setLifetimesToIceAge(){
  numberOfLifetimes = yearsToIceAge / yearsLifeExpectancy
  const lifetimesElements = document.getElementsByClassName(classLifetimesToIceAge)
  for (let element of lifetimesElements) {
    element.innerText = Math.round(numberOfLifetimes)    
  }
}

function setLifetimeIcons(){
  const lifetimeIconsElement = document.getElementById('lifetime-icons')
  let lifeTimeElementInnerText = ''
  for( let i=Math.round(numberOfLifetimes/10); i--; ) {
    const random_boolean = Math.random() < 0.5
    const menWomen = random_boolean? 'men' : 'women'
    imgElement = `<img class="lifetime-symbol" src="/assets/toilets-${menWomen}-symbol-sign-aiga.png" alt="another n lifetimes">`
    lifeTimeElementInnerText += `<span class="image-container">${imgElement}</span>`
  }
  lifetimeIconsElement.innerHTML = lifeTimeElementInnerText
}

function setNumbers(){
  setElementsOfClassToRandomValueOfArray(classYearsToIceAge, optionsYearsToIceAge)
  setElementsOfClassToRandomValueOfArray(classYearsLifeExpectancy, optionsYearsLifeExpectancy)
  setLifetimesToIceAge()
  setLifetimeIcons()
}

setNumbers()
const refreshButton = document.getElementById("refresh")
refreshButton.addEventListener('click', setNumbers)