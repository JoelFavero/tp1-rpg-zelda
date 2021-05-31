const buttons = document.querySelectorAll("button");

// Todos deberían ser CONST
var enemyHP = 1000;
var playerHP = 900;
var enemyShild = 0;
var enemyShildCount = 0;
var playerShild = 0;
var playerMana = 200;
var playerFinal = 0;
var updateButtonsCount = 1;
var noteSound;

var tutorialCount = 0;

start();

function reset() {
  tutorialCount = 1;
  enemyHP = 1000;
  playerHP = 900;
  enemyShild = 0;
  enemyShildCount = 0;
  playerShild = 0;
  playerMana = 200;
  playerFinal = 0;
  updateButtonsCount = 1;
  // Se puede usar template literal: `HP: ${playerHP}/900`
  document.getElementById("playerHP").innerHTML = "HP: " + playerHP + "/900";
  document.getElementById("playerMana").innerHTML =
    "Mana: " + playerMana + "/200"; // `HP: ${playerMana}/200`
  document.getElementById("enemyHP").innerHTML = "HP: " + enemyHP + "/1000"; // `HP: ${enemyHP}/1000`
  document.getElementById("SwordAttack").classList.remove("disabled");
  document.getElementById("ShildGuard").classList.remove("disabled");
  document.getElementById("ManaAttack").classList.remove("disabled");
  document.getElementById("FinalAttack").classList.remove("disabled");
  UnShowPicture(document.getElementById("zelda"));
  UnShowPicture(document.getElementById("ganondorf"));
  start();
}

function start() {
  showPicture("img/zelda.png", "zelda", "156px");
  showPicture("img/ganondorf.png", "ganondorf", "156px");
  // () => {}*
  setTimeout(function () {
    // Usar triple igual ===
    // Más info: https://es.stackoverflow.com/a/402
    if (tutorialCount == 0) {
      alert(
        "Defeat ganondorf to win, hyrule depends of you, remember that your special attacks can evade enemy shields"
      );
    }
  }, 200);
}

function updateButton() {
  //permite que los botones recuperen las propiedades de disabled

  // ===*
  if (updateButtonsCount == 1) {
    document.getElementById("SwordAttack").classList.add("disabled");
    document.getElementById("ShildGuard").classList.add("disabled");
    document.getElementById("ManaAttack").classList.add("disabled");
    document.getElementById("FinalAttack").classList.add("disabled");
    updateButtonsCount = 0;
  } else {
    document.getElementById("SwordAttack").classList.remove("disabled");
    document.getElementById("ShildGuard").classList.remove("disabled");
    if (playerMana > 0) {
      document.getElementById("ManaAttack").classList.remove("disabled");
    }
    if (playerFinal == 0) {
      document.getElementById("FinalAttack").classList.remove("disabled");
    }
    updateButtonsCount = 1;
  }
  return;
}

buttons.forEach((button) => button.addEventListener("click", player));

function player(event) {
  //logica jugador

  playerShild = 0; // Shield*

  const buttonMy = event.currentTarget;
  const buttonID = buttonMy.id;

  switch (buttonID) {
    case "SwordAttack":
      if (enemyShild == 0) {
        enemyHP = enemyHP - 100;
        document.getElementById("enemyHP").innerHTML =
          "HP: " + enemyHP + "/1000"; // `HP: ${enemyHP}/1000`

        showPicture("img/normalAttack.png", "attackGanondorf");
        noteSound = document.getElementById("swordAttackWAV");

        noteSound.pause();
        noteSound.currentTime = 0;
        noteSound.volume = 0.2;
        noteSound.play();

        // () => {}
        setTimeout(function () {
          UnShowPicture(document.getElementById("attackGanondorf"));
        }, 600);
      }
      break;

    case "ShildGuard":
      playerShild = 1;
      showPicture("img/shild.png", "attackZelda");
      noteSound = document.getElementById("shildWAV");

      noteSound.pause();
      noteSound.currentTime = 0;
      noteSound.volume = 0.2;
      noteSound.play();
      setTimeout(function () {
        UnShowPicture(document.getElementById("attackZelda"));
      }, 600);

      break;

    case "ManaAttack":
      if (playerMana > 0) {
        playerMana = playerMana - 100;
        document.getElementById("playerMana").innerHTML =
          "Mana: " + playerMana + "/200";
        enemyHP = enemyHP - 100;
        document.getElementById("enemyHP").innerHTML =
          "HP: " + enemyHP + "/1000";
        document.getElementById("ManaAttack").classList.add("disabled");

        showPicture("img/manaAttack.png", "attackGanondorf");

        noteSound = document.getElementById("manaAttackWAV");

        noteSound.pause();
        noteSound.currentTime = 0;
        noteSound.volume = 0.2;
        noteSound.play();

        setTimeout(function () {
          UnShowPicture(document.getElementById("attackGanondorf"));
        }, 600);
      }
      break;

    case "FinalAttack":
      if (playerFinal == 0) {
        enemyHP = enemyHP - 200;
        document.getElementById("enemyHP").innerHTML =
          "HP: " + enemyHP + "/1000";
        playerFinal = 1;
        document.getElementById("FinalAttack").classList.add("disabled");

        showPicture("img/finalAttack.png", "attackGanondorf");
        noteSound = document.getElementById("manaAttackWAV");

        noteSound.pause();
        noteSound.currentTime = 0;
        noteSound.volume = 0.2;
        noteSound.play();

        setTimeout(function () {
          UnShowPicture(document.getElementById("attackGanondorf"));
        }, 600);
      }
      break;
  }

  if (enemyHP <= 0) {
    alert("you win ganondorf lose");
    reset();
  } else {
    enemy();
  }
}

function enemy() {
  updateButton();
  setTimeout(function () {
    enemyShild = 0;

    // const enemyAttack = Math.random()
    // Podría crearse acá esta constante, así no se repite adentro de cada if

    if (enemyShildCount < 2) {
      var enemyAttack = Math.random();

      if (enemyAttack >= 0.5) {
        if (playerShild == 0) {
          //normal attack
          playerHP = playerHP - 100; // playerHP -= 100
          document.getElementById("playerHP").innerHTML =
            "HP: " + playerHP + "/900";
          document.getElementById("enemyLastAttack").innerHTML =
            "Last Action: " + "Normal Attack";
          showPicture("img/enemyAttack.png", "attackZelda");
          noteSound = document.getElementById("swordAttackWAV");

          noteSound.pause();
          noteSound.currentTime = 0;
          noteSound.volume = 0.2;
          noteSound.play();

          setTimeout(function () {
            UnShowPicture(document.getElementById("attackZelda"));
          }, 600);
        } else {
          //miss
          document.getElementById("enemyLastAttack").innerHTML =
            "Last Action: " + " Attack miss";
        }
      } else {
        //shild
        enemyShild = 1;
        enemyShildCount++;

        document.getElementById("enemyLastAttack").innerHTML =
          "Last Action: " + "Shild";
        showPicture("img/shild.png", "attackGanondorf");
        noteSound = document.getElementById("shildWAV");

        noteSound.pause();
        noteSound.currentTime = 0;
        noteSound.volume = 0.2;
        noteSound.play();

        setTimeout(function () {
          UnShowPicture(document.getElementById("attackGanondorf"));
        }, 600);
      }
    } else {
      enemyShildCount = 0;
      var enemyAttack = Math.random();

      if (enemyAttack >= 0.5) {
        //revenge
        playerHP = playerHP - 200;
        document.getElementById("playerHP").innerHTML =
          "HP: " + playerHP + "/900";
        document.getElementById("enemyLastAttack").innerHTML =
          "Last Action: " + "Revenge";
        showPicture("img/specialEnemyAttack.png", "attackZelda");

        noteSound = document.getElementById("manaAttackWAV");

        noteSound.pause();
        noteSound.currentTime = 0;
        noteSound.volume = 0.2;
        noteSound.play();

        setTimeout(function () {
          UnShowPicture(document.getElementById("attackZelda"));
        }, 600);
      } else {
        //normal attack

        if (playerShild == 0) {
          playerHP = playerHP - 100;
          document.getElementById("playerHP").innerHTML =
            "HP: " + playerHP + "/900";
          document.getElementById("enemyLastAttack").innerHTML =
            "Last Action: " + "Normal Attack";
          showPicture("img/enemyAttack.png", "attackZelda");
          noteSound = document.getElementById("swordAttackWAV");

          noteSound.pause();
          noteSound.currentTime = 0;
          noteSound.volume = 0.2;
          noteSound.play();

          setTimeout(function () {
            UnShowPicture(document.getElementById("attackZelda"));
          }, 600);
        } else {
          //miss
          document.getElementById("enemyLastAttack").innerHTML =
            "Last Action: " + "Revenge Attack miss";
        }
      }
    }

    if (playerHP <= 0) {
      alert("you lose ganondorf win");
      reset();
    } else {
      setTimeout(function () {
        updateButton();
      }, 600);
    }
  }, 700);
}

function showPicture(pic, select, size = "auto") {
  document.getElementById(select).style.visibility = "visible";

  let image = new Image();
  image.src = pic;
  const SceneDiv = document.querySelector("." + select); // `.${select}`
  image.style.width = size;
  SceneDiv.appendChild(image);
}

function UnShowPicture(pic) {
  var picture = document.getElementById(pic.id);
  var c = document.getElementById(pic.id).childNodes.length;
  console.log(picture); // Borrar log

  if (picture.childNodes[c - 1] != null) {
    picture.removeChild(picture.childNodes[c - 1]);
  }
}
