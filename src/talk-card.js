import {LitElement, html} from '@polymer/lit-element';

/**
 * Talk Card Component
 */
class TalkCard extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      id: {type: Number},
      userId: {type: Number},
      title: {type: String},
      body: {type: String}
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

      .Card_id {
        margin-top: 5px;
        margin-bottom: 0;
        text-align: right;
        color: #ccc;
      }
      
      .Card_content {
        margin-top: 5px;
        margin-bottom: 0;
      }
    </style>

    <article class="Card">
      <div>
        <h3 class="Card_title">${this.title}</h3>
        <h4 class="Card_id">Talk ID: #${this.id}</h4>                                     
      </div>
      <p class="Card_content">${this.body}</p>
    </article>
    `
  }
}

customElements.define('talk-card', TalkCard);
