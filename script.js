function greet(){
   const notify = document.createElement("h1");
//    notify.innerHTML = "Get 20% extra discount by subscribing"
   const nf =  document.querySelector(".notification")
    nf.style.visibility="visible"
   return nf.innerHTML= "Get 20% extra discount by subscribing ✅  ❌ ";

  }
  setTimeout(greet, 5000);


const sd= document.querySelector(".notification")

sd.addEventListener("click", e => { 
   sd.style.visibility = "hidden"
})