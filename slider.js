let images = Array.from(document.querySelectorAll(".img"))
let left = document.querySelector(".right")
let right = document.querySelector(".left")

let index = 0
function reset(){
    for(let i =0;i < images.length;i++){
    images[i].classList.remove("active")
    images[i].classList.remove("next")
    images[i].classList.remove("next1")
    images[i].classList.remove("prev")
    images[i].classList.remove("prev1")

    images[index].classList.add("active")
    
}
}
// reset()

left.addEventListener("click",prev)
right.addEventListener("click",next)


function prev (){
if(index == 0){
    index = images.length-1
}
else{
    index --
}

    if(index == 0){
        reset()
        images[index].classList.add("active")
        images[index+1].classList.add("next")
        images[index +2].classList.add("next1")
        images[index+3].classList.add("prev")
        images[index+4].classList.add("prev1")
    }
else if (index == 1){
        reset()
          images[index].classList.add("active")
        images[index+1].classList.add("next")
        images[index +2].classList.add("next1")
        images[index+3].classList.add("prev1")
        images[index-1].classList.add("prev")
   }
else if  (index ==2){
        reset()
        images[index].classList.add("active")
        images[index+1].classList.add("next")
        images[index +2].classList.add("next1")
        images[index-1].classList.add("prev")
        images[index-2].classList.add("prev1")
       }
else if(index==3){
        reset()
         images[index].classList.add("active")
        images[index+1].classList.add("next")
        images[index -1].classList.add("prev")
        images[index-2].classList.add("prev1")
        images[index-3].classList.add("next1")
  }
else if(index == 4){
        reset()
        images[index].classList.add("active")
        images[index-1].classList.add("prev")
        images[index -2].classList.add("prev1")
        images[index-3].classList.add("next1")
        images[index-4].classList.add("next")
}


}

function next(){
    if(index == images.length-1){
        index= 0
    }
    else{
        index ++
    }
        if(index == 0){
        reset()
        images[index].classList.add("active")
        images[index+1].classList.add("next")
        images[index +2].classList.add("next1")
        images[index+3].classList.add("prev")
        images[index+4].classList.add("prev1")
    }
else if (index == 1){
        reset()
          images[index].classList.add("active")
        images[index+1].classList.add("next")
        images[index +2].classList.add("next1")
        images[index+3].classList.add("prev1")
        images[index-1].classList.add("prev")
   }
else if  (index ==2){
        reset()
        images[index].classList.add("active")
        images[index+1].classList.add("next")
        images[index +2].classList.add("next1")
        images[index-1].classList.add("prev")
        images[index-2].classList.add("prev1")
       }
else if(index==3){
        reset()
         images[index].classList.add("active")
        images[index+1].classList.add("next")
        images[index -1].classList.add("prev")
        images[index-2].classList.add("prev1")
        images[index-3].classList.add("next1")
  }
else if(index == 4){
        reset()
        images[index].classList.add("active")
        images[index-1].classList.add("prev")
        images[index -2].classList.add("prev1")
        images[index-3].classList.add("next1")
        images[index-4].classList.add("next")
}



}

setInterval(()=>{
    next()
},3000)