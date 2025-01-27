const startButton = document.getElementById("start-btn");
const board = document.getElementById("board");
const buttonsContainer = document.getElementById("buttons-container");
const audioElement = document.getElementById("audio");

let names = ["Valentin", "Ewan", "Naël", "Eden", "Aléïs", "Thibault", "Ayden", "Elisa", "Lana", "Manohé", "Nousseyba", "Maiwenn", "Erine", "Samuel", "Diégo", "Eden", "Lyna", "Nolan", "Paul", "Nelya", "Lorenza", "Lucas"];
let usedNames = [];
let currentPosition = 0;
let currentName = "";

// Création du drapeau et du joueur
const flag = document.createElement("div");
flag.id = "flag"; // Attribuer un ID pour le drapeau

const player = document.createElement("div");
player.classList.add("player"); // Ajouter la classe 'player' pour le style du joueur 

function createBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 22; i++) {
    const cell = document.createElement("div");
    board.appendChild(cell);
  }
  board.appendChild(flag); // Ajoute le drapeau à la fin
}

function startGame() {
  currentPosition = 0;
  usedNames = [];
  currentName = "";
  createBoard();
  buttonsContainer.innerHTML = "";
  startButton.style.display = "none";
  board.appendChild(player); // Ajoute le joueur au tableau
  movePlayerTo(0); // Place le joueur au départ
  generateButtons();
  generateQuestion();
}

function generateQuestion() {
  if (usedNames.length === 22) {
    audioElement.src = `../../../assets/audio/jeu/ExoFini.mp3`;
    audioElement.play();
    startButton.style.display = "block";
    return;
  }


  const randomIndex = Math.floor(Math.random() * names.length);
  currentName = names[randomIndex];
  usedNames.push(currentName);
  names.splice(randomIndex, 1);

  audioElement.src = `../../../assets/audio/prenom/${currentName}.mp3`;
  audioElement.play();
}

function generateButtons() {
  buttonsContainer.innerHTML = "";
  [...usedNames, ...names].forEach((name) => {
    const button = document.createElement("button");
    button.textContent = name;
    button.disabled = usedNames.includes(name);
    button.addEventListener("click", () => handleButtonClick(button, name));
    buttonsContainer.appendChild(button);
  });
}

function handleButtonClick(button, name) {
  if (name === currentName) {
    button.disabled = true;
    movePlayer();
    generateQuestion();
  } else {
    audioElement.src = `../../../assets/audio/jeu/ReponseFausse.mp3`;
    audioElement.play();
  }
}

function movePlayer() {
  currentPosition++;
  movePlayerTo(currentPosition);
}

function movePlayerTo(position) {
  const cell = board.children[position];
  player.style.left = `${cell.offsetLeft + 5}px`;
  player.style.top = `${cell.offsetTop + 5}px`;
}

startButton.addEventListener("click", startGame);
