import Home from "./routes/Home.js";
import Details from "./routes/Details.js";
import Add from "./routes/Add.js";

class AppRoot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-app>
        <ion-router>
          <ion-route url="/" component="nav-home"></ion-route>
          <ion-route url="/:tech_title" component="nav-details"></ion-route>
          <ion-route url="/new" component="nav-add"></ion-route>
        </ion-router>
        <ion-nav><ion-nav>
      </ion-app>`;
  }
}

export { Home, Details, Add };

customElements.define("app-root", AppRoot);
