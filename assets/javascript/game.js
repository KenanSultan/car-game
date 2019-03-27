var a = 0

function tusha_basildi(e){
    if(e.keyCode === 100){
        a -= 20
        var resim = document.querySelector(".resim")
        resim.style.left = a + "px"
        console.log(a)
        if(a<-800){
            a = 0;
        }
    }
}

console.log()

onkeypress = tusha_basildi