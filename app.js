(function () {
  document.getElementById("bulb").addEventListener("click", (e) => {
    if(e.target.classList.contains("bulb-on")){
      e.target.classList.remove("bulb-on")
      e.target.classList.add("bulb-off")
    }else if (e.target.classList.contains("bulb-off")){
      e.target.classList.remove("bulb-off")
      e.target.classList.add("bulb-on")
    }
  })
})();

