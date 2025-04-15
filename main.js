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
