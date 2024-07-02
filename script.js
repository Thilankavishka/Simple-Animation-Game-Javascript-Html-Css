var attacker = document.getElementById("attacker");
idleImageNumber = 1;
idleAnimationNumber = 0;
function idleanimation() {
  idleImageNumber = idleImageNumber + 1;
  if (idleImageNumber == 10) {
    idleImageNumber = 0;
  }
  attacker.src = "Resources/idle (" + idleImageNumber + ").png";
}

function idleAnimationStart() {
  idleAnimationNumber = setInterval(idleanimation, 200);
}
//...........................................................Run Animation and move background...............................................................
runimagenumber = 1;
runanimationnumber = 0;
function runanimation() {
  runimagenumber = runimagenumber + 1;
  if (runimagenumber == 10) {
    runimagenumber = 0;
  }
  attacker.src = "Resources/Run (" + runimagenumber + ").png";
}

function runanimationstart() {
  runanimationnumber = setInterval(runanimation, 100);
  clearInterval(idleAnimationNumber);
}

//...........................................................Jump Animation.......................................................................

jumimagenumber = 1;
jumanimationnumber = 0;
attackermargintop = 400;
function jumpanimation() {
  jumimagenumber = jumimagenumber + 1;
  if (jumimagenumber <= 5) {
    attackermargintop = attackermargintop - 40;
    attacker.style.marginTop = attackermargintop + "px";
  }

  if (jumimagenumber >= 7) {
    attackermargintop = attackermargintop + 40;
    attacker.style.marginTop = attackermargintop + "px";
  }

  if (jumimagenumber == 10) {
    jumimagenumber = 1;
    clearInterval(jumanimationnumber);
    jumanimationnumber = 0;
    runimagenumber = 0;
    runanimationstart();
  }
  attacker.src = "Resources/Jump (" + jumimagenumber + ").png";
}
function jumpanimationstart() {
  clearInterval(idleAnimationNumber);
  runimagenumber = 0;
  clearInterval(runanimationnumber);
  jumanimationnumber = setInterval(jumpanimation, 100);
}

function keycheck(event) {
  //alert(event.which);
  //enter = 13;

  var keycode = event.which;
  if (keycode == 13) {
    if (runanimationnumber == 0) {
      runanimationstart();
    }
    if (movebackgroundAnimatioId == 0) {
      movebackgroundAnimatioId = setInterval(movebackground, 100);
    }
  }

  if (keycode == 32) {
    if (jumanimationnumber == 0) {
      jumpanimationstart();
    }
    if (movebackgroundAnimatioId == 0) {
      movebackgroundAnimatioId = setInterval(movebackground, 100);
    }
  }
}
backgroundPositionX = 0;
movebackgroundAnimatioId = 0;
function movebackground() {
  backgroundPositionX = backgroundPositionX - 40;
  document.getElementById("background").style.backgroundPositionX =
    backgroundPositionX + "px";
}
