function playSound(audioSelector) {
  const element = document.querySelector(audioSelector);

  if (element && element.localName === "audio") {
    element.play();
  } else {
    console.log(`Element ${audioSelector} not found or invalid selector`);
  }
}
const keyboardKeyList = document.querySelectorAll(".keyboardKey");

for (let i = 0; i < keyboardKeyList.length; i++) {
  const keyboardKey = keyboardKeyList[i];
  const instrument = keyboardKey.classList[1];
  const idAudio = `#sound_${instrument}`;

  keyboardKey.onclick = function () {
    playSound(idAudio);
  };

  keyboardKey.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      keyboardKey.classList.add("active");
    }
  };

  keyboardKey.onkeyup = function () {
    keyboardKey.classList.remove("active");
  };
}
