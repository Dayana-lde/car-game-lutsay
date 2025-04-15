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
