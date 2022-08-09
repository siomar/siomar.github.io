import styles from "./style.css";
import { create } from "../../utils/create";

class Header extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = styles;
   
    const header = create("header",{class: "header"});
    const headerContent = create("div",{class: "content header__content"});
    const children = document.createElement("slot");

    headerContent.appendChild(children);
    header.appendChild(headerContent);

    this.shadowRoot!.append(header, style);
  }
}

customElements.define("unova-header", Header, { extends: "header"});
