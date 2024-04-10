var startbtn=document.querySelector(".start")
var pausebtn=document.querySelector(".pause")
var retsetbtn=document.querySelector(".reset")

let hr=min=sec=msec=0,intervel

startbtn.addEventListener("click",()=>{
    intervel=setInterval(()=>{
        msec++
  if(msec==100){
    sec++
    msec=0
  }
  if(sec==60){
    min++
    sec=0
  }if(min==60){
    hr++
    min=0
  }
update()   
    },10)
   
})


pausebtn.addEventListener("click",()=>{
    clearInterval(intervel)
})



retsetbtn.addEventListener("click",()=>{
   
    hr=min=sec=msec=0
   
    update()
})






function update(){
     hrs=hr<10?"0"+hr:hr
     mins=min<10?"0"+min:min
     secs=sec<10?"0"+sec:sec
     msecs=msec<10?"0"+msec:msec

    document.getElementById("hrs").innerHTML=hrs
    document.getElementById("min").innerHTML=mins
    document.getElementById("sec").innerHTML=secs
    document.getElementById("msec").innerHTML=msecs
}

