import { techs } from "../techs.js";

export default class Home extends HTMLElement {
  constructor() {
    super();
    this.techs = techs;
  }

  connectedCallback() {
    this.innerHTML = `
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Nav</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen>
        <ion-list>
        ${this.techs
          .map(
            tech => `
            <ion-item button href="/${tech.title}">
              <ion-icon slot="start" name="logo-${tech.icon}" style="color: ${
              tech.color
            };"></ion-icon>
              <ion-label>
                <h3>${tech.title}</h3>
              </ion-label>
            </ion-item>
        `
          )
          .join("")}
        </ion-list>
      </ion-content>
    `;
  }
}

customElements.define("nav-home", Home);
