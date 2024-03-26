import "./style.css";
import main from "./pages/main.html?raw";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = main;
