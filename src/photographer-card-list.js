import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';
import {repeat} from '../node_modules/lit-html/directives/repeat.js';

/**
 * Listing Component (photographers)
 */
class PhotographerCardList extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      users: {type: Array}
    };
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 15px;
        background-color: #FE7A22;
      }

      .Title {
        text-align: center;
        margin-top: 0px;
        margin-bottom: 5px;
      }

      .PhotographerCardList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
        margin-top: 0;
      }

      .PhotographerCardList-item {
        margin: 5px;
        width: calc(20% - 10px);
        flex-basis: calc(20% - 10px);
      }
    </style>

    <h2 class="Title">${this.title}</h2>
    <ul class="PhotographerCardList">
      ${repeat(JSON.parse(this.users), i => html`
        <li class="PhotographerCardList-item">
          <photographer-card 
            id="${i.id}"
            name="${i.name}"
            phone="${i.phone}"            
          ></photographer-card>
        </li>
      `)}
    </ul>
    `
  }
}

customElements.define('photographer-card-list', PhotographerCardList);
