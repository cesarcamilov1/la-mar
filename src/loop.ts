import { random } from "./random.ts";

let hearts: HTMLElement[] = [];

function generatorHearts(fatherElement: HTMLElement) {
  let { xPosition, yPosition } = random();

  let heart = document.createElement("div");
  heart.setAttribute("class", "heart");

  let styleHeart = heart.style;

  styleHeart.left = xPosition.toString() + "px";
  styleHeart.top = yPosition.toString() + "px";

  fatherElement.appendChild(heart);
  hearts.push(heart);
}

function deleteHearts(fatherElement: HTMLElement) {
  hearts.map((heart) => {
    fatherElement.removeChild(heart);
    hearts.splice(1, 1);
  });
}

export function LoopHearts(fatherElement: HTMLElement) {
  try {
    let nIntervId = setInterval(() => generatorHearts(fatherElement), 1000);
    setInterval(() => deleteHearts(fatherElement), 3000);

    setTimeout(() => clearInterval(nIntervId), 60000);
  } catch (error) {
    console.error(error);
  }
}
