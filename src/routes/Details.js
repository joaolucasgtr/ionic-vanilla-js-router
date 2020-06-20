import { techs } from "../techs.js";

export default class Detail extends HTMLElement {
  connectedCallback() {
    let tech = techs.find(t => t.title === this.tech_title);

    this.innerHTML = `
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>${tech.title}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen class="ion-padding">
        <ion-icon name="logo-${tech.icon}" style="color: ${
      tech.color
    };" size="large"></ion-icon>
        <p>${tech.description}</p>
      </ion-content>
    `;
  }
}

customElements.define("nav-details", Detail);
