function externalLinks() {
  for(let c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    let b = c[a]
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}

const titleEnding = ' | erik lumbela'
function appendNameToTitle() {
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

const about = '...'
function insertToggle(){
  if (!document.getElementById('toggle-text') && document.getElementById('visual') && document.getElementById('text')){
    if (document.getElementById('visual')){
      const titleControls = document.getElementById('title-controls')
      titleControls.append(' ')
      titleControls.append(htmlToElement(`<span id="toggle-text"></span>`))
      const toggle = document.getElementById('toggle-text')
      toggle.innerText = about
    } else {

    }
  }
}

const works = [
  "time-of-my-life.html", 
  "the-next-ice-age.html",
  "to-the-moon.html",
  "quetta.html",
  "since.html",
  "one-hour-invisibly-slow-implosion.html",
  "one-quarter-hour-medium-slow-implosion.html",
  "one-minute-medium-implosion.html",
  "one-second-faster-implosion.html",
  "one-quarter-second-fast-implosion.html",
  "one-hundred-milliseconds-stroboscopic-fast-implosion.html"
]


function addControlsToWorksPages(){
  const text = document.getElementById('text')
  const visual = document.getElementById('visual')
  const container = document.getElementById('container')
  if (text || visual){
    const controlsContainer =htmlToElement(`<div id="controls-container"></div`)
    const navigationControls =htmlToElement(`<div id="navigation-controls"></div`)
    const titleControls =htmlToElement(`<div id="title-controls"></div`)
    const backElement = htmlToElement(`<span id="back"><</span>`)
    const upElement = htmlToElement(`<a id="up" href="/">↖︎</a>`)
    let title = document.title
    title = title.replace(titleEnding, '').trim()
    const titleElement = htmlToElement(`<span id="title-control">${title}</span>`)
    const forwardElement = htmlToElement(`<span id="forward">></span>`)
    navigationControls.append(backElement)
    navigationControls.append('')
    navigationControls.append(upElement)
    navigationControls.append('')
    navigationControls.append(forwardElement)
    titleControls.append(titleElement)
    controlsContainer.append(titleControls)
    controlsContainer.append(navigationControls)
    container.prepend(controlsContainer)

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
appendNameToTitle()

// toggle
if (document.getElementById('toggle-text')){
  const toggleText = document.getElementById('toggle-text')
  toggleText.addEventListener('click', function(){
    const visual = document.getElementById('visual')
    const text = document.getElementById('text')
    if (visual.style.display === 'none'){
      visual.style.display = 'block'
      text.style.display = 'none'
      toggleText.innerText = about
    } else {visual.style.display = 'none'
      text.style.display = 'block'
      toggleText.innerText = '⌘'
    }
    scroll(0, 0)
  })
}

// controls
const forward = document.getElementById('forward')
forward.addEventListener('click', () => {navigateToNextWork(true)})
const back = document.getElementById('back')
back.addEventListener('click', () => {navigateToNextWork(false)})