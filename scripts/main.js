function externalLinks() {
  for(let c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    let b = c[a]
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}

function appendNameToTitle() {
  if (!document.title.includes('erik lumbela')){
    document.title += ' | erik lumbela'
  }
}

function htmlToElement(html) {
  var template = document.createElement('template')
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild
}

function insertBreadCrump(){
  if (!document.getElementById('breadcrump')){
    const container = document.getElementById('text')
    if (container){
      const breadCrump = htmlToElement(`<p id="breadcrump" class="right">/<a href="/" title="series: time pieces">time pieces</a></p>`)
      container.prepend(breadCrump)
    }
  }
}

const about = '...'
function insertToggle(){
  if (!document.getElementById('toggle') && document.getElementById('visual') && document.getElementById('text')){
    if (document.getElementById('visual')){
      const container = document.getElementById('container')
      const toggle = htmlToElement(`<div id="toggle"><p id="toggle-text">${about}</p></div>`)
      container.append(toggle)
    }
  }
}

// execute

insertBreadCrump()
insertToggle()
externalLinks()
appendNameToTitle()

// toggle
if (document.getElementById('toggle-text')){
  const toggleText = document.getElementById('toggle-text')
  toggleText.addEventListener('click', function(){
    const placeOfInterest = document.getElementById('visual')
    const text = document.getElementById('text')
    if (placeOfInterest.style.display === 'none'){
      placeOfInterest.style.display = 'block'
      text.style.display = 'none'
      toggleText.innerText = about
    } else {placeOfInterest.style.display = 'none'
      text.style.display = 'block'
      toggleText.innerText = '⌘'
    }
    scroll(0, 0)
  })
}