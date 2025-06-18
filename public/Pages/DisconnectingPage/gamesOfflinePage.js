// ================== GAME LOGIC ==================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 🦫 Load hình
const dinoImg = new Image();
dinoImg.src = '../../assets/images/dino.png';

const dino = { x: 50, y: 220, width: 80, height: 80, velocityY: 0, gravity: 0.6 };
let isJumping = false;
let obstacles = [];
let score = 0;
let gameOver = false;

// 🚀 Nhảy & chơi lại
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !isJumping && !gameOver) {
        dino.velocityY = -12;
        isJumping = true;
    }
    if (e.code === 'Enter' && gameOver) restartGame();
});

// 🔁 Reset game
function restartGame() {
    dino.y = 220;
    dino.velocityY = 0;
    obstacles = [];
    score = 0;
    gameOver = false;
    updateGame();
}

// 🎮 Vòng lặp game
function updateGame() {
    if (gameOver) {
        ctx.fillStyle = 'red';
        ctx.font = '30px Arial';
        ctx.fillText('GAME OVER! Nhấn Enter để chơi lại', 160, 150);
        return;
    }

    dino.velocityY += dino.gravity;
    dino.y += dino.velocityY;

    if (dino.y >= 220) {
        dino.y = 220;
        isJumping = false;
    }

    // 🧱 Sinh obstacle
    if (Math.random() < 0.015) {
        obstacles.push({ x: 800, y: 230, width: 30, height: 50, counted: false });
    }

    // 🔍 Cập nhật obstacle + kiểm tra va chạm
    obstacles.forEach((obs, index) => {
        obs.x -= 6;
        if (obs.x + obs.width < 0) obstacles.splice(index, 1);

        // ✅ Cộng điểm nếu obstacle đã đi qua dino
        if (!obs.counted && obs.x + obs.width < dino.x) {
            obs.counted = true;
            score++;
        }

        // 💥 Va chạm
        const hitbox = {
            x: dino.x + 15,
            y: dino.y + 20,
            width: dino.width - 30,
            height: dino.height - 25,
        };

        if (
            hitbox.x < obs.x + obs.width &&
            hitbox.x + hitbox.width > obs.x &&
            hitbox.y < obs.y + obs.height &&
            hitbox.y + hitbox.height > obs.y
        ) {
            gameOver = true;
        }
    });

    // 🎨 Vẽ màn hình
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
    ctx.fillText('Score: ' + score, 10, 25);

    requestAnimationFrame(updateGame);
}

updateGame();
