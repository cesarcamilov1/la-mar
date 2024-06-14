import "./style.css";

import { addListenerToButton } from "./randomButton";
import { changePage } from "./confirm";

addListenerToButton(document.querySelector<HTMLButtonElement>("#no")!);
document.querySelector("#si")?.addEventListener("click", () => changePage());
