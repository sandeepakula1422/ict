let r=document.getElementById('r');
let yel=document.getElementById('y');
let gre=document.getElementById('g');
let re=document.getElementById('R');
let yell=document.getElementById('Y');
let gree=document.getElementById('G');
function red(){
r.style.backgroundColor="red";
yel.style.backgroundColor="black";
gre.style.backgroundColor="black";
re.style.background="red";
yell.style.background="grey";
gree.style.background="grey";
}
function yellow(){
    r.style.backgroundColor="black";
    yel.style.background="yellow";
    gre.style.background="black";
    re.style.background="grey";
    yell.style.background="yellow";
    gree.style.background="grey";


}
function green(){
    r.style.background="black";
    yel.style.background="black";
    gre.style.background="green";
     re.style.background="grey";
    yell.style.background="grey";
    gree.style.background="green";
}