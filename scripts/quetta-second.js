const dot = document.getElementById("dot")
    setInterval(() => {
      if (dot.style.visibility === 'hidden'){
        dot.style.visibility = 'visible'
      } else {
        dot.style.visibility = 'hidden'
      }
    }, 1000);