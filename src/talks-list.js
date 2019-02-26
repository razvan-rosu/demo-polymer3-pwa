import {LitElement, html} from '@polymer/lit-element';
import {repeat} from 'lit-html/directives/repeat.js';
import './talk-card.js';

/**
 * Talks List Component
 */
class TalksList extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      title: {type: String},
      talks: {type: Array},
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px;
          background-color: #323230;
        }

        .Title {
          text-align: center;
          margin-top: 0;
          margin-bottom: 0;
          color: #FFF;
        }

        .TalksList {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 0;
          margin-top: 0;
        }
  
        .TalksList-item {
          margin: 10px;
          width: calc(100% - 20px);
          flex-basis: calc(100% - 20px);
        }
        
        @media screen and (min-width: 480px) {      
          .TalksList-item {        
            width: calc(33% - 20px);
            flex-basis: calc(33% - 20px);
          }
        }
        
        @media screen and (min-width: 768px) {      
          .TalksList-item {        
            width: calc(25% - 20px);
            flex-basis: calc(25% - 20px);
          }
        }
        
        talk-card {
          height: 100%;
          background-color: #f00;       
        }
      </style>
  
      <h2 class="Title">${this.title}</h2>
      <ul class="TalksList">
        ${repeat((this.talks), i => html`
          <li class="TalksList-item">
            <talk-card id="${i.id}" userId="${i.userId}" title="${i.title}" body="${i.body}"></talk-card>
          </li>
        `)}
      </ul>
    `
  }
}

customElements.define('talks-list', TalksList);
