/* ================================================================= */
/* from https://www.youtube.com/watch?v=f5ZswIE_SgY&t=79s */
/* ================================================================= */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
// used for testing purposes only
console.log("width of canvas: ", canvas.width);
// 
canvas.height = window.innerHeight; // changed from canvas.height = window.innerHeight * 1.2;
// used for testing purposes only
console.log("height of canvas: ", canvas.height);
//

// if we want to have some type of gradient coloring
// use option 1 or
// let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// gradient.addColorStop(0, 'red');
// gradient.addColorStop(0.2, 'yellow');
// gradient.addColorStop(0.4, 'green');
// gradient.addColorStop(0.6, 'cyan');
// gradient.addColorStop(0.8, 'blue');
// gradient.addColorStop(1, 'magenta');
// use option 2
let gradient = ctx.createRadialGradient(
  canvas.width / 2,
  canvas.height / 2,
  100,
  canvas.width / 2,
  canvas.height / 2,
  canvas.width / 2
);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'cyan');
gradient.addColorStop(1, 'magenta');
// 

// to draw(create) and manage individual characters(objects) that make up the rain effect
class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        this.characters = '!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾｡~｢｣､･ｦｧｨｩｪｫｬｭｮｯﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ日ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσςΤτΥυΦφΧχΨψΩω';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
    }
    draw(context){
        this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length));
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        // Math.random() > 0.98 will slowdown each line of the animation
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98){
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

// the entire wrapper for the rain effect; to create, update, and draw all the symbols
class Effect {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 15;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();
        // used for testing purposes only
        console.log(this.symbols);
        // 
    }
    #initialize(){
        for(let i = 0; i < this.columns; i++){
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }
    resize(width, height){
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();
    }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / fps;
let timer = 0;


function animate(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.textAlign = 'center';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // ctx.fillStyle = '#0aff0a'; // use this line if you just want green color fonts
        ctx.fillStyle = gradient; // use this line if you want ot use gradient coloring
        ctx.font = effect.fontSize + "px monospace";
        effect.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0;
    } else {
        timer += deltaTime;
    }
    requestAnimationFrame(animate);
    // requestAnimationFrame autogenerates a timestamp
}

animate(0);

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.resize(canvas.width, canvas.height);
    // if you want the radial gradient colouring to be responsive. If not then comment it out the below lines
    gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      100,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.5, "cyan");
    gradient.addColorStop(1, "magenta");
    // 
})