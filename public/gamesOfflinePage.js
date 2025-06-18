// ================== GAME LOGIC ==================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 🦖 Load hình ảnh khủng long
const dinoImg = new Image();
dinoImg.src = './dino.png';

const dino = { x: 50, y: 220, width: 40, height: 40, velocityY: 0, gravity: 0.6 };
let isJumping = false;
let obstacles = [];
let score = 0;
let gameOver = false;

// 🚀 Xử lý nhảy
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !isJumping && !gameOver) {
        dino.velocityY = -12;
        isJumping = true;
    }
    if (e.code === 'Enter' && gameOver) restartGame();
});

// 🔄 Reset game khi thua
function restartGame() {
    dino.y = 220;
    dino.velocityY = 0;
    obstacles = [];
    score = 0;
    gameOver = false;
    updateGame();
}

function updateGame() {
    if (gameOver) {
        ctx.fillStyle = 'red';
        ctx.font = '30px Arial';
        ctx.fillText('GAME OVER! Nhấn Enter để chơi lại', 200, 150);
        return;
    }

    dino.velocityY += dino.gravity;
    dino.y += dino.velocityY;

    if (dino.y >= 220) {
        dino.y = 220;
        isJumping = false;
    }

    if (Math.random() < 0.015) {
        obstacles.push({ x: 800, y: 230, width: 30, height: 30 });
    }

    obstacles.forEach((obs, index) => {
        obs.x -= 6;
        if (obs.x + obs.width < 0) obstacles.splice(index, 1);

        if (
            dino.x < obs.x + obs.width &&
            dino.x + dino.width > obs.x &&
            dino.y < obs.y + obs.height &&
            dino.y + dino.height > obs.y
        ) {
            gameOver = true;
        }
    });

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f4f4f4';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    obstacles.forEach((obs) => {
        ctx.fillStyle = 'black';
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });

    ctx.fillStyle = 'blue';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score++, 10, 20);

    requestAnimationFrame(updateGame);
}

updateGame();

// ================== OFFLINE RECOVERY ==================
const savedURL = sessionStorage.getItem('previousURLBeforeOffline');

window.addEventListener('online', () => {
    if (savedURL && savedURL !== window.location.href) {
        window.location.href = savedURL;
    }
});

if (navigator.onLine && savedURL && savedURL !== window.location.href) {
    setTimeout(() => {
        window.location.href = savedURL;
    }, 1500);
}
