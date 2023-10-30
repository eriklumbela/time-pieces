function externalLinks() {
  for(let c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    let b = c[a]
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
  }
}

externalLinks()

// toggle
const toggleText = document.getElementById('toggle-text')
toggleText.addEventListener('click', function(){
  console.log('o'); 
  const placeOfInterest = document.getElementById('place-of-interest')
  const info = document.getElementById('info')
  if (placeOfInterest.style.display === 'none'){
    console.log('1');
    placeOfInterest.style.display = 'block'
    info.style.display = 'none'
    toggleText.innerText = 'ℹ︎'
  } else {
    console.log('2');

    placeOfInterest.style.display = 'none'
    info.style.display = 'block'
    toggleText.innerText = '⌘'
  }
})