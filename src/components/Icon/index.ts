import styles from "./style.css";
import { create } from "../../utils/create";

class Icon extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = styles;

    const children = document.createElement("slot");

    const box = create("div", { class: "icon" }, [children]);

    this.shadowRoot!.append(box, style);
  }
}

customElements.define("unova-icon", Icon);
