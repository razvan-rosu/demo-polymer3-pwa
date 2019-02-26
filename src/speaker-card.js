import {LitElement, html} from '@polymer/lit-element';

/**
 * Speaker Card Component
 */
class SpeakerCard extends LitElement {
  constructor() {
    super();
    this._clickMethod = this._clickMethod.bind(this);
  }

  static get properties() {
    return {
      id: {type: Number},
      name: {type: String},
      phone: {type: String}
    };
  }

  _clickMethod(number) {
    // GET Talks
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
      .then((r) => {
        if (!r.ok) { throw Error(r.statusText); }
        return r;
      })
      .then((r) => r.json())
      .then((r) => {
        window.__TALKS__ = r;
      })
      .then(() => {
        // Dispatch the event.
        const event = new CustomEvent('injectTalks', { bubbles: true, composed: true });
        window.dispatchEvent(event);
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

      .Speaker {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        background: #FFF;
        padding: 10px;
        border-radius: 5px;
      }

      .Speaker a {
        text-decoration: none;
        color: #323230;
      }
  
      .Speaker h3,
      .Speaker p {
        margin-top: 0;
        margin-bottom: 0;
      }

      .Speaker_c2a {
        display: block;
        margin-top: 10px;
        padding: 5px 10px;
        background: none;
        border-radius: 3px;
        border: 1px solid #333;
        cursor: pointer;
      }
    </style>
    
    <section class="Speaker">
      <h3>${this.name}</h3>
      <p>tel: <a href="tel:${this.phone}">${this.phone}</a></p>
      <div>
        <button class="Speaker_c2a" type="button" @click="${this._clickMethod.bind(null, this.id)}">View talks (id: #${this.id})</button>
      </div>
    </section>
    `
  }
}

customElements.define('speaker-card', SpeakerCard);
