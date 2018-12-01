import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

/**
 * Listing Component (photographers)
 */
class PhotographerCard extends LitElement {
  constructor() {
    super();
    this.clickMethod = this.clickMethod.bind(this);
  }

  static get properties() {
    return {
      id: {type: Number},
      name: {type: String},
      phone: {type: String}
    };
  }

  clickMethod(number) {
    console.log(`clicked on: ${number}`);
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
      }

      .Photographer {
        background: #FFF;
        padding: 10px;
        border-radius: 5px;
      }

      .Photographer h3,
      .Photographer p {
        margin-top: 0;
        margin-bottom: 0;
      }

      .Photographer_c2a {
        display: block;
        margin-top: 10px;
        padding: 5px 10px;
        background: none;
        border-radius: 3px;
        border: 1px solid #333;
        cursor: pointer;
      }
    </style>
    
    <section class="Photographer">
      <h3>${this.name}</h3>
      <p>tel: <a href="tel:${this.phone}">${this.phone}</a></p>
      <div>
        <button class="Photographer_c2a" type="button" @click="${this.clickMethod.bind(null, this.id)}">View photo album (id: #${this.id})</button>
      </div>
    </section>
    `
  }
}

customElements.define('photographer-card', PhotographerCard);
