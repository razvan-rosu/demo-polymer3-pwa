import {LitElement, html} from '@polymer/lit-element';
import {repeat} from 'lit-html/directives/repeat.js';
import './speaker-card.js';

/**
 * Speakers List Component
 */
class SpeakersList extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      speakers: Array
    };
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
        padding: 15px;
        background-color: rgb(239,223,65);
      }

      .Title {
        text-align: center;
        margin-top: 0px;
        margin-bottom: 5px;
      }

      .SpeakersList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        

        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
        margin-top: 0;
      }

      .SpeakersList-item {
        margin: 5px;
        width: calc(50% - 10px);
        flex-basis: calc(50% - 10px);
      }

      @media screen and (min-width: 480px) {      
        .SpeakersList-item {     
          width: calc(33% - 10px);
          flex-basis: calc(33% - 10px);
        }
      }

      @media screen and (min-width: 768px) {      
        .SpeakersList-item {     
          width: calc(20% - 10px);
          flex-basis: calc(20% - 10px);
        }
      }
    </style>

    <h2 class="Title">${this.title}</h2>
    <ul class="SpeakersList">
      ${repeat(this.speakers, i => html`
        <li class="SpeakersList-item">
          <speaker-card 
            id="${i.id}"
            name="${i.name}"
            phone="${i.phone}"
          ></speaker-card>
        </li>
      `)}
    </ul>
    `
  }
}

customElements.define('speakers-list', SpeakersList);
