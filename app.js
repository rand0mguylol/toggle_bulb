(function () {
  document.getElementById("bulb").addEventListener("click", (e) => {

    
    if(e.target.classList.contains("bulb-on")){ // If has class bulb-on, remove it and add bulb-off
      e.target.classList.remove("bulb-on")
      e.target.classList.add("bulb-off")
    }else if (e.target.classList.contains("bulb-off")){ // If has class bulb-ooff, remove it and add bulb-on
      e.target.classList.remove("bulb-off")
      e.target.classList.add("bulb-on")
    }
  })
})();

