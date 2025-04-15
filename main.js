//переменные
const canvas = document.getElementById("canvas"); 
	const ctx = canvas.getContext("2d"); // 2D контекст для рисования

	let lives = 5; 
	let okLeft = false; // Флаг для движения влево
	let okRight = false; // Флаг для движения вправо
	let stop = false; 
	let myReq; // Для хранения запроса на обновление кадра
	let enemySpeed = 3; 

	let startTime = null; 
	let timeAlive = 0; 
	let score = localStorage.getItem("score") || 0; 

	const restartBtn = document.querySelector("#restartBtn");

// Загружаем изображения для игры
	const line = new Image();
	line.src = "line.png"; // Линия на дороге
	line.X = 180;
	line.Y = -140;

	const line2 = new Image();
	line2.src = "line.png"; // Вторая линия на дороге
	line2.X = 180;
	line2.Y = 160;

	const road = new Image();
	road.src = "asphalt.png"; // Дорога

	const myCar = new Image();
	myCar.src = "car.red.png"; // Машинка
	myCar.X = 50;
	myCar.Y = 450;

	const enemyCar1 = new Image();
	enemyCar1.src = "enemy1.png"; // Первая вражеская машинка
	enemyCar1.X = 50;
	enemyCar1.Y = -150;

	const enemyCar2 = new Image();
	enemyCar2.src = "car.yellow.png"; // Вторая вражеская машинка
	enemyCar2.X = 250;
	enemyCar2.Y = -450;

// для рисования дороги
	function drawRect() {
		ctx.drawImage(road, 0, 0, canvas.width, canvas.height); // Рисуем дорогу
	}

	// отображение количества жизней
	function drawLives() {
		ctx.font = "20px Arial"; 
		ctx.fillStyle = "White"; 
		ctx.fillText("Lives: " + lives, 275, 48); // Отображаем количество жизней
	}

// отображение счета и времени
	function drawScore() {
		ctx.font = "20px Arial"; 
		ctx.fillStyle = "White"; 
		ctx.fillText("Score: " + score, 275, 80); 
		ctx.fillText("Time: " + timeAlive, 275, 110); 
	}

	// рисование линий на дороге
	function drawLines() {
		ctx.drawImage(line, line.X, line.Y); 
		line.Y += 3; // Двигаем линию вниз
		if (line.Y > 500) line.Y = -140; // Если линия вышла за пределы экрана, перемещаем её обратно наверх

		ctx.drawImage(line2, line2.X, line2.Y);
		line2.Y += 3; 
		if (line2.Y > 500) line2.Y = -140; 
	}
// кнопка перезапуска игры
	restartBtn.addEventListener("click", () => {
		lives = 5; 
		timeAlive = 0; 
		startTime = null; 
		stop = false; 

		// Скрываем надпись "Game Over"
		document.getElementById("gameOverText").style.display = "none";

		render(); // Перезапускаем рендеринг игры
	});

	// остановка игры
	function stopGame() {
		cancelAnimationFrame(myReq); // Отменяем анимацию
		document.getElementById("gameOverText").style.display = "block"; 
		document.getElementById("gameOver").innerHTML = "score: " + score + "s"; 
		document.getElementById("gameOver").style.display = "block"; 

		restartBtn.style.display = "block"; // Показываем кнопку перезапуска игры

		if (parseFloat(timeAlive) > parseFloat(score)) {
			score = timeAlive; // Обновляем лучший результат
			localStorage.setItem("score", score); // Сохраняем лучший результат в localStorage
		}
		stop = true; // Устанавливаем флаг для остановки игры
	}
