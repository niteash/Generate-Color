let btn = document.querySelector("button");
let h1 = document.querySelector('h1');
let mydiv = document.querySelector('div');



btn.addEventListener('click', ()=>{
    let randomColor = genrateColor()
    h1.innerText = randomColor;
   mydiv.style.backgroundColor = randomColor;

 
})

function genrateColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`

    return color
}