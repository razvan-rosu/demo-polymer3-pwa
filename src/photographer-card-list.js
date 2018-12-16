import {LitElement, html} from '@polymer/lit-element';
import {repeat} from 'lit-html/directives/repeat.js';
import './photo-card.js';

/**
 * Listing Component (photographers)
 */
class PhotographerCardList extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      photographers: Array
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
        width: calc(50% - 10px);
        flex-basis: calc(50% - 10px);
      }

      @media screen and (min-width: 480px) {      
        .PhotographerCardList-item {     
          width: calc(33% - 10px);
          flex-basis: calc(33% - 10px);
        }
      }

      @media screen and (min-width: 768px) {      
        .PhotographerCardList-item {     
          width: calc(20% - 10px);
          flex-basis: calc(20% - 10px);
        }
      }
    </style>

    <h2 class="Title">${this.title}</h2>
    <ul class="PhotographerCardList">
      ${repeat(this.photographers, i => html`
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
