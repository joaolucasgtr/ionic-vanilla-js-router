import { techs } from "../techs.js";

export default class Home extends HTMLElement {
  constructor() {
    super();
    this.techs = techs;
  }

  connectedCallback() {
    this.render();

    let router = document.querySelector("ion-router");
    router.addEventListener("ionRouteDidChange", (e) => {
      let { detail } = e;
      if (detail.from === "/new" && detail.to === "/") {
        this.techs = techs;
        this.render();
      }
    });
  }

  render() {
    this.innerHTML = `
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Nav</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button href="/new">
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
        <ion-list>
        ${this.techs
          .map(
            (tech) => `
            <ion-item button href="/${tech.title}">
              <ion-icon slot="start" name="logo-${tech.icon}" style="color: ${tech.color};"></ion-icon>
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
