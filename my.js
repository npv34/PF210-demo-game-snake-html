const DEFAULT_X = 0;
const DEFAULT_Y = 2;
let x = DEFAULT_X;
let y = DEFAULT_Y;

let countFood = 0; 
let lenghtSnake = 1;
let moveKey = 'right';
let speed = 200;
let status = false;
let start = false;

let positionFood = [
    [0, 4],
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


function eat() {
    if(positionFood[countFood][0] == x && positionFood[countFood][1] == y) {
        countFood++;
        lenghtSnake++;
        status = true;
        let xFood = Math.floor(Math.random() * 10);
        let yFood = Math.floor(Math.random() * 10);
        let newFood = [xFood, yFood];
        positionFood.push(newFood);
        drawFood(positionFood[countFood][0], positionFood[countFood][1]);
    } else {
        status = false;
    }
    changeSpeed();
}

function changeSpeed() {
    if(countFood == 5 && status) {
        speed -= 100;
        
    }else if(countFood == 10 && status) {
        speed -= 100;
        
    } else if(countFood == 20 && status) {
        speed -= 200;
        
    }
}

function move(event) {
   let key = event.keyCode;
   switch(key) {
       case 39:
            moveKey = 'right'
            break;
       case 37:
            moveKey = 'left'
           break;
        case 40:
            moveKey = 'down'
           break;
        case 38:
            moveKey = 'top'
            break;
   }
}

function moveRight() {
    y = y + 1;
}

function moveLeft(){
    y = y - 1;
    
}

function moveUp() {
    x = x - 1;
}

function moveDown() {
    x = x + 1;
}

window.addEventListener('keyup', move);

function resetSnake() {
    if(x < 0) {
        x = 9;
    }

    if(x > 9) {
        x = 0;
    }

    if(y < 0) {
        y = 9;
    }

    if(y == 10) {
        y = 0;
    }
}

function play() {
    if(!start) {
        return;
    }
    clearSnake(x, y);
    switch(moveKey) {
        case 'right':
            moveRight();
            break;
        case 'left':
            moveLeft();
            break;
        case 'top':
            moveUp();
            break;
        default:
            moveDown();
            break;
    };
    resetSnake();
    drawSnake(x, y)
    eat();
    document.getElementById('speed').innerHTML = speed;
    document.getElementById('score').innerHTML = countFood;
}

let game = setInterval(play, speed);

function startGame() {
    start = true;
}

function stopGame() {
    start = false;
}
