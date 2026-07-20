setTimeout(()=>{

document.getElementById("loading").style.display="none";

},1800);

function mulai(){

document.getElementById("content").style.display="block";

document.getElementById("music").play();

window.scrollTo({

top:500,

behavior:"smooth"

});

}
