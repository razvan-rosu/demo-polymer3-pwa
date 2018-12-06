import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';
import {repeat} from '../node_modules/lit-html/directives/repeat.js';

/**
 * Listing component (photo cards)
 */
class PhotoCardList extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      title: {type: String},
      items: {type: Array},
    };
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 10px;
        background-color: #333;
      }

      .Title {
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
        color: #FFF;
      }

      .PhotoCardList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
        margin-top: 0;
      }

      .PhotoCardList-item {
        margin: 10px;
        width: calc(50% - 20px);
        flex-basis: calc(50% - 20px);
      }

      @media screen and (min-width: 480px) {      
        .PhotoCardList-item {        
          width: calc(33% - 20px);
          flex-basis: calc(33% - 20px);
        }
      }
      
      @media screen and (min-width: 768px) {      
        .PhotoCardList-item {        
          width: calc(25% - 20px);
          flex-basis: calc(25% - 20px);
        }
      }
    </style>

    <h2 class="Title">${this.title}</h2>
    <ul class="PhotoCardList">
      ${repeat(JSON.parse(this.items), i => html`
        <li class="PhotoCardList-item">
          <photo-card id="${i.id}" albumId="${i.albumId}" title="${i.title}" url="${i.url}" thumbnailUrl="${i.thumbnailUrl}"></photo-card>
        </li>
      `)}
    </ul>
    `
  }
}

customElements.define('photo-card-list', PhotoCardList);
