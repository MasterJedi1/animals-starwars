document.getElementById("drop0").addEventListener("mouseleave", mouseLeave0);
document.getElementById("drop1").addEventListener("mouseleave", mouseLeave1);
document.getElementById("drop3").addEventListener("onclick", mouseEnter2);
document.getElementById("drop3").addEventListener("mouseleave", mouseLeave2);
document.getElementById("drop4").addEventListener("onclick", mouseEnter3);
document.getElementById("drop4").addEventListener("mouseleave", mouseLeave3);

let b_m = document.getElementById("acc");
let dr = document.getElementById("drop0_1");
b_m.addEventListener("click", () => {
  if (getComputedStyle(dr).display != "none") {
    mouseLeave0();
  }
  else {
    leaveall();
    document.getElementById("drop0_1").style.display = "block";
    document.getElementById("drop0_1").style.borderRadius = "10px";
    document.getElementById("acc").innerHTML = "Accueil <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
  }
})
let b_msw = document.getElementById("sw");
let drmsw = document.getElementById("drop1_1");
b_msw.addEventListener("click", () => {
  if (getComputedStyle(drmsw).display != "none") {
    mouseLeave1();
  }
  else {

    leaveall();
    document.getElementById("drop1_1").style.display = "block";
    document.getElementById("drop1_1").style.borderRadius = "10px";
    document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
  }
})
function mouseLeave0() {
  leaveall();
  document.getElementById("acc").innerHTML = "Accueil <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
}

//Menu drop 2
function mouseEnter1() {
  leaveall();
  document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
  document.getElementById("drop1_1").style.display = "block";
  document.getElementById("drop1_1").style.borderRadius = "10px";
  replace_footer();
}
function mouseLeave1() {
  leaveall();
  document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  replace_footer();
}
function mouseEnter2() {
  leaveall();
  document.getElementById("mamif").innerHTML = "Animaux<img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
  replace_footer();
}
function mouseLeave2() {
  leaveall();
  document.getElementById("mamif").innerHTML = "Animaux <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  replace_footer();
}
function mouseEnter3() {
  leaveall();
  document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
  replace_footer();
}
function mouseLeave3() {
  leaveall();
  document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  replace_footer();
}
function mouseEnter4() {
  leaveall();
  document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='icons/round_keyboard_arrow_left_black_18dp.png'>";
  replace_footer();
}
function mouseLeave4() {
  leaveall();
  document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  replace_footer();
}
//LEAVE ALL
function leaveall() {
  document.getElementById("drop0_1").style.display = "none";
  document.getElementById("drop1_1").style.display = "none";
  document.getElementById("acc").innerHTML = "Accueil <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  document.getElementById("sw").innerHTML = "Star Wars <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  document.getElementById("mamif").innerHTML = "Animaux <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  document.getElementById("gamertime").innerHTML = "A vous de jouer <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
  document.getElementById("whoru").innerHTML = "Qui sommes-nous <img width='20px' src='icons/round_keyboard_arrow_down_black_18dp.png'>";
}

function replace_footer() {
  document.getElementById("Footer").style.bottom = "27px";
  document.getElementById("allrights").style.bottom = "0";
  document.getElementById("Footer").style.transition = "all 1s ease-out;";
  document.getElementById("allrights").style.transition = "all 1s ease-out;";
}
window.onload = leaveall();
