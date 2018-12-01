import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

/**
 * Photo Card
 */
class PhotoCard extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      id: {type: Number},
      albumId: {type: Number},
      title: {type: String},
      thumbnailUrl: {type: String},
      url: {type: String}
    };
  }

  render() {
    return html`
    <style>
      :host {
         display: block;
      }

      .Card {
        box-sizing: border-box;
        height: 100%;
        padding: 15px;
        background-color: #FFF;
        border: 1px solid #000;
      }

      .Card_content {

      }

      .Card_title {
        flex: 0;
        margin-top: 0;
        margin-bottom: 0;
        display: -webkit-box;
        height: 42px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: center;
        overflow: hidden;
      }

      .Card_image {
        flex: 0;
        margin-top: 15px;
        display: block;
        width: 100%;
      }

      .Card_albumId {
        margin-top: 0;
        margin-bottom: 0;
        text-align: right;
        color: #ccc;
      }

      .Card_actionbar {
        margin-top: 15px;
        text-align: center;
      }

      .Button--c2a {
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid #333;
        border-radius: 3px;
        text-decoration: none;
        color: #333;
      }
    </style>

    <article class="Card">
      <section class="Card_content">
        <h3 class="Card_title">${this.title}</h3>
        <h4 class="Card_albumId">Album ID: #${this.albumId}</h4>
        <img src="${this.thumbnailUrl}" class="Card_image" alt="album cover">
        <div class="Card_actionbar">
           <a href="${this.url}" target="_blank" class="Button--c2a">See bigger photo</a>
        </div>
      </section>
    </article>
    `
  }
}

customElements.define('photo-card', PhotoCard);
