function toggleNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  home.addEventListener("click", ()=>{
    document.body.style.background = "#f1f1f1";
    toggleNav();
})


red.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "red";
    toggleNav();
})

orange.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "orange";
    toggleNav();
})

yellow.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "yellow";
    toggleNav();
})

green.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "green";
    toggleNav();
})

blue.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "blue";
    toggleNav();
})

purple.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "purple";
    toggleNav();
})

//Dit kan vast korter...