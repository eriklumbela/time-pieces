function externalLinks() {
  for(let c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    let b = c[a]
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}

function addGoogleAnalyticsTagToHead() {
  const googleAnalyticsId = 'G-8YDT8C2D5Z'
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
  const script2 = document.createElement('script')
  script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleAnalyticsId}');`
  document.getElementsByTagName('head')[0].appendChild(script)
  document.getElementsByTagName('head')[0].appendChild(script2)
}

const titleEnding = ' (time pieces) | erik lumbela'
function addDescriptionAppendNameAndSeriesToTitle() {
  // add document title as page description
  const meta = document.createElement('meta')
  meta.name = 'description'
  meta.content = `'${document.title}' is an art work by erik lumbela. It is part of the time pieces series.`
  document.getElementsByTagName('head')[0].appendChild(meta)

  if (!document.title.includes('erik lumbela')){
    document.title += titleEnding
  }
}

function htmlToElement(html) {
  var template = document.createElement('template')
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild
}

function round(number, decimals){
  return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

const text = 'text'
const visual = 'visual'
function insertToggle(){
  if (!document.getElementById('toggle-text') && document.getElementById('visual') && document.getElementById('text')){
    if (document.getElementById('visual')){
      const titleControls = document.getElementById('title-controls')
      titleControls.append(' ')
      titleControls.append(htmlToElement(`<span id="toggle-text"></span>`))
      const toggle = document.getElementById('toggle-text')
      toggle.innerText = text
    } else {

    }
  }
}

const works = [
  "time-of-my-life.html", 
  "clock.html",
  "the-next-ice-age.html",
  "to-the-moon.html",
  "quetta-second.html",
  "since.html",
  "the-longest-rally.html",
  "medium-slow-implosion.html",
]

function addControlsToWorksPages(){
  const text = document.getElementById('text')
  const visual = document.getElementById('visual')
  const container = document.getElementById('container')
  if (text || visual){
    const controlsContainer =htmlToElement(`<div id="controls-container"></div`)
    const navigationControls =htmlToElement(`<div id="navigation-controls"></div`)
    const titleControls =htmlToElement(`<div id="title-controls"></div`)
    const backElement = htmlToElement(`<a id="back"><</a>`)
    let title = document.title
    title = title.replace(titleEnding, '').trim()
    const titleElement = htmlToElement(`<span id="title-control">${title}</span>`)
    const forwardElement = htmlToElement(`<a id="forward">></a>`)
    navigationControls.append(backElement)
    const pagesThatRequireRefreshButton = ['the next ice age', 'since', 'clock']
    if (pagesThatRequireRefreshButton.includes(title)){
      const refreshElement = htmlToElement(`<a id="refresh-work" href>↻</a>`)
      navigationControls.append(refreshElement)
    }
    navigationControls.append(forwardElement)
    titleControls.append(titleElement)
    controlsContainer.append(titleControls)
    controlsContainer.append(navigationControls)
    container.prepend(controlsContainer)
    
    const authorElement = htmlToElement(`<div id="author"><a href="https://www.eriklumbela.com">↖︎ erik lumbela </a></div>`)
    container.append(authorElement)
  }
}

function navigateToNextWork(next){
  const url = document.URL
  const currentPage = url.substring(url.lastIndexOf('/')+1)
  let currentPageIndexInWorks = works.indexOf(currentPage)
  if (currentPageIndexInWorks == 'undefined') {
    location.href = '/'
  } 

    let newIndex = next? (currentPageIndexInWorks + 1) % works.length : (currentPageIndexInWorks - 1) % works.length
    if (newIndex < 0) newIndex = works.length -1
    const newPage = works[newIndex]
    location.href = `/works/${newPage}`

}

// execute
addControlsToWorksPages()
insertToggle()
externalLinks()
addGoogleAnalyticsTagToHead()
addDescriptionAppendNameAndSeriesToTitle()

// toggle
if (document.getElementById('toggle-text')){
  const toggleText = document.getElementById('toggle-text')
  toggleText.addEventListener('click', function(){
    const visualElement = document.getElementById('visual')
    const textElement = document.getElementById('text')
    if (visualElement.style.display === 'none'){
      visualElement.style.display = 'block'
      textElement.style.display = 'none'
      toggleText.innerText = text
    } else {visualElement.style.display = 'none'
      textElement.style.display = 'block'
      toggleText.innerText = visual
    }
    scroll(0, 0)
  })
}

// controls
const forward = document.getElementById('forward')
if (forward){
  forward.addEventListener('click', () => {navigateToNextWork(true)})
}
const back = document.getElementById('back')
if (back) {
  back.addEventListener('click', () => {navigateToNextWork(false)})
}

// determine what element to show on load (visual or text)
if (document.getElementById('visual')){
  document.getElementById('visual').style.display = 'block'
  if (document.getElementById('text')){
    document.getElementById('text').style.display = 'none'
  }
} else {
  if(document.getElementById('text')){
    document.getElementById('text').style.display = 'block'
  }
}