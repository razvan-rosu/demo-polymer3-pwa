import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';
import {axios} from '@bundled-es-modules/axios';

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

    // GET photographers
    axios.get(`https://jsonplaceholder.typicode.com/albums/${number}/photos`)
      .then(function (response) {
        window.__ALBUMS__ = JSON.stringify(response.data);
        document.querySelector('photo-card-list').setAttribute('items', window.__ALBUMS__);
      })
      .catch(function (error) {
        console.log('failed to load photos', error);
      });
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
        height: 100%;
      }

      .Photographer {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
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
