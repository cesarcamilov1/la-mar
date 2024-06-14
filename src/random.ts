export function random(): { xPosition: number; yPosition: number } {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  let xPosition = Math.random() * (screenWidth - 100);
  let yPosition = Math.random() * (screenHeight - 100);

  xPosition = Math.round(xPosition);
  yPosition = Math.round(yPosition);

  return { xPosition, yPosition };
}
