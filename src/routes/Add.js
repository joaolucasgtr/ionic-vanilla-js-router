import { techs } from "../techs.js";

export default class Add extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" id="back"></ion-back-button>
          </ion-buttons>
          <ion-title>Add new tech</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content fullscreen class="ion-padding">
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input id="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Icon</ion-label>
        <ion-input id="icon"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea id="description"></ion-textarea>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Color</ion-label>
        <ion-input id="color"></ion-input>
      </ion-item>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button id="add-button">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      
      </ion-content>
    `;

    document.getElementById("add-button").addEventListener("click", () => {
      let title = document.getElementById('title').value;
      let icon = document.getElementById('icon').value;
      let description = document.getElementById('description').value;
      let color = document.getElementById('color').value;

      techs.push({ title, icon, description, color });
      
      let router = document.querySelector('ion-router');
      router.push('/');
    });
  }
}

customElements.define("nav-add", Add);
