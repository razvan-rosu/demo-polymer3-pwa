import {LitElement, html} from '@polymer/lit-element';

/**
 * Logo component
 */
class LogoComponent extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      logourl: {type: String},
      imageurl: {type: String},
      imagealt: {type: String},
      imagetitle: {type: String}
    };
  }

  render() {
    return html`
    <style>
      :host {
        display: inline-block;
      }

      .LogoComponent {
        display: block;
        height: 100%;
      }

      .LogoComponent-image {
        display: block;   
        max-height: 100%;   
      }
    </style>

    <a class="LogoComponent" href=${this.logourl}>
      <img class="LogoComponent-image" src=${this.imageurl} alt=${this.imagealt} title=${this.imagetitle}>
    </a>
    `
  }
}

customElements.define('logo-component', LogoComponent);
