const introTextContainer = document.querySelector('.intro_text_container');
const introImgContainer = document.querySelector('.intro_img_container');
const boxContainer = document.querySelector('.boxContainer');
const want = document.querySelector('.githubTitle');
const ask = document.querySelector('.askval');
const solver = document.querySelector('.solver');
const solveBtn = document.querySelector('.solve');
let valA = document.querySelector('#a');
let valB = document.querySelector('#b');
let valC = document.querySelector('#c');
let valFx = document.querySelector('#fx');
let result = document.querySelector(".result");

const solveQuadraticEquation = () => {
  let a = valA.value;
  let b = valB.value;
  let c = valC.value;
  result.innerHTML=""

  a= eval(a)
  b= eval(b)
  c= eval(c)

  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
 
  if((a==0 && b==0 && c==0)||(a==0)){
    return
  }
  if (b > 0 && c > 0) {
    result.innerHTML = `The general equation of ${a}d<sup>2</sup>y/dx<sup>2</sup> + ${b}dy/dx + ${c}y is
        ${a}m<sup>2</sup>+ ${b}m + ${c}. This is done by letting y= e<sup>2m</sup>`;
  } else if (b > 0 && c < 0) {
    result.innerHTML = `The general equation of ${a}d<sup>2</sup>y/dx<sup>2</sup> + ${b}dy/dx  ${c}y is
        ${a}m<sup>2</sup> + ${b}m ${c}. This is done by letting y= e<sup>2m</sup>`;
  } else if (b < 0 && c > 0) {
    result.innerHTML = `The general equation of ${a}d<sup>2</sup>y/dx<sup>2</sup>  ${b}dy/dx + ${c}y is 
        ${a}m<sup>2</sup>  ${b}m + ${c}. This is done by letting y= e<sup>2m</sup>`;
  } else if (b < 0 && c < 0) {
    result.innerHTML = `The general form of ${a}d<sup>2</sup>y/dx<sup>2</sup>  ${b}dy/dx  ${c}y is 
        ${a}m<sup>2</sup> ${b}m ${c}. This is done by letting y= e<sup>2m</sup>`;
  }

  let quadraticSolutions = document.createElement("div");
  let rootFirst;
  let rootSecound;
  const determinant = (b * b) - (4 * a * c);
  let posDeterminant = (Math.sqrt(determinant) / 2*a);
  let negDeterminant = (Math.sqrt(-determinant) /2*a).toFixed(2);
  let partSol = (-b / (2 * a));
  if (determinant > 0) {
    rootFirst = (partSol + posDeterminant).toFixed(2);
    rootSecound = (partSol - posDeterminant).toFixed(2);
    quadraticSolutions.innerHTML = 
    `<p class="answ">Answer:</p>
    <p>The roots are ${rootFirst} and ${rootSecound} this is done by using the almighty formular</p> 
    <p>So we use the general solution c<sub>1</sub>e<sup>xm<sub>1</sub></sup> + c<sub>2</sub>e<sup>xm<sub>2</sub></sup> </p> 
    <p>Therefore the solution is <span class="equform">y = c<sub>1</sub>e<sup class="sup">${rootFirst}x</sup> + c<sub>2</sub>e<sup>${rootSecound}x</sup></span></p>`;
  } else if (determinant === 0) {
    rootFirst = rootSecound = (partSol + posDeterminant).toFixed(2);
    quadraticSolutions.innerHTML =
    `<p class="answ">Answer:</p>
    <p>The roots are ${rootFirst} and ${rootSecound} this is done by using the almighty formular</p> 
    <p>So we use the general solution c<sub>1</sub>e<sup>xm<sub>1</sub></sup> + c<sub>2</sub>xe<sup>xm<sub>2</sub></sup> </p> 
    <p>Therefore the solution is <span class="equform">y = c<sub>1</sub>e<sup class="sup">${rootFirst}x</sup> + c<sub>2</sub>xe<sup>${rootSecound}x</sup></span></p>`;

  } else if(determinant < 0){
    rootFirst = `${partSol}+${(negDeterminant + 'i')}`
    rootSecound = `${partSol}-${(negDeterminant + 'i')}` 
    quadraticSolutions.innerHTML =  
    `<p class="answ">Answer:</p>
    <p>The roots are ${rootFirst} and ${rootSecound} by using the almighty formular</p>
    <p>Then we get our α real part of our complex equation which is ${partSol.toFixed(2)} and β the imaginary part which is ${negDeterminant}</p>
    <p>Then apply the general solution y = e<sup>αx</sup>[c<sub>1</sub>cos(β) + c<sub>2</sub>sin(β)]</p>
    <p>Therefore the equation is <span class="equform">y = e<sup class="sup">${partSol.toFixed(2)}x</sup>[c<sub>1</sub>cos(${negDeterminant}x) + c<sub>2</sub>sin(${negDeterminant}x)] </span></p>`
  }
  result.append(quadraticSolutions)
  console.log(rootFirst, rootSecound);
};

window.addEventListener('change', ()=>{
  console.log(valA.value)
  console.log(valB.value)
  console.log(valC.value)
  console.log(valFx.value)
})


for(let i = 0;  i < 365; i++ ){
  const list = [
      0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
      205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
      211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
      133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218, 259, 55, 56, 96, 
      97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259, 260, 261, 301, 302, 17, 18, 19, 
      58, 59, 60, 61, 99, 100, 102, 103, 140, 141, 144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266,
      304, 305, 306, 24, 25, 65, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230, 270, 271, 311, 312, 67,
      108, 149, 150, 191, 232, 192, 233, 274, 234, 275, 316, 194, 235, 276, 154, 195, 236, 73, 114, 155,
      33, 34, 74, 75, 115, 116, 156, 157, 197, 198, 238, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
      79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282, 283, 284, 285, 
      323, 324, 325, 326        
  ];

  const element = document.createElement('div');
  element.classList = list.includes(i) ? "box active" : "box";
  boxContainer.appendChild(element);
}

window.addEventListener("scroll", ()=>{
  let offsetY = window.scrollY;
  introTextContainer.style.transform=`translateY(${offsetY * 0.4}px)`
  introImgContainer.style.transform=`translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
  solver.style.transform = `translateY(calc(97vh - ${offsetY}px))`
  solver.style.backgroundPositionY = `${offsetY * 0.5}px`
})

document.querySelector(".solve").addEventListener("click", solveQuadraticEquation);

