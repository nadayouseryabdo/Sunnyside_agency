let x = document.getElementById('lemo');
let y = document.getElementById('plemo');
let z = document.getElementById('lere');
let w = document.getElementById('plere');


function myf(){
    if (y.style.display == "none") {
        y.style.display = "block";
      } else  {
        y.style.display = "none";
      }
    }
x.onclick =myf;
function myf2(){
    if (w.style.display == "none") {
        w.style.display = "block";
      } else{
        w.style.display = "none";
      }
}
z.onclick =myf2;