const DEFAULT_X = 0;
const DEFAULT_Y = 2;
let x = DEFAULT_X;
let y = DEFAULT_Y;

let countFood = 0; 
let lenghtSnake = 1;

let positionFood = [
    [0, 4],
    [1, 4],
    [4, 5]
]

function drawGameboard() {
    let html = '';
    for(let i = 0; i < 10; i++) {
        html += '<tr>';
        for(let j = 0; j < 10; j++) {
            html += '<td id='+i+'-'+j+'>';
            html += '</td>';
        }
        html += '</tr>';
    }
    document.getElementById('game-board').innerHTML = html;
}

drawGameboard();

function drawSnake(x, y) {
    document.getElementById(x +'-'+y).style.backgroundColor = 'red'
}

function clearSnake(x, y) {
    document.getElementById(x +'-'+y).style.backgroundColor = 'white'
}

function drawFood(x, y) {
    document.getElementById(x +'-'+y).style.backgroundColor = 'blue'
}

drawSnake(x, y);
drawFood(positionFood[0][0], positionFood[0][1]);

function eat() {
    if(positionFood[countFood][0] == x && positionFood[countFood][1] == y) {
        countFood++;
        lenghtSnake++;
        drawFood(positionFood[countFood][0], positionFood[countFood][1]);
    }
}

function move(event) {
   let key = event.keyCode;
   switch(key) {
       case 39:
            moveRight();
            break;
       case 37:
           moveLeft();
           break;
        case 40:
           moveDown();
           break;
        case 38:
            moveUp();
            break;
   }
   eat()
}

function moveRight() {
    clearSnake(x, y);
    y = y + 1;
    drawSnake(x, y)
}

function moveLeft(){
    clearSnake(x, y);
    y = y - 1;
    drawSnake(x, y)
}

function moveUp() {
    clearSnake(x, y);
    x = x - 1;
    drawSnake(x, y)
}

function moveDown() {
    clearSnake(x, y);
    x = x + 1;
    drawSnake(x, y)
}

window.addEventListener('keyup', move)

