import { random } from "./random";

function movePosition(element: HTMLButtonElement) {
  let { xPosition, yPosition } = random();

  const setPosition = (x: number, y: number) => {
    const style = element.style;

    style.position = "absolute";
    style.left = `${x}px`;
    style.top = `${y}px`;
  };

  setPosition(xPosition, yPosition);
}

export function addListenerToButton(element: HTMLButtonElement) {
  element.addEventListener("mouseenter", () => movePosition(element));
}
