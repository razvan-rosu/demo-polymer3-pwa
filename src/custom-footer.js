import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

/**
 * Footer component
 */
class CustomFooter extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
    <style>
      :host {
        position: relative;
        z-index: 1;
        display: block;
        padding: 10px;
        background-color: #FFF;
        -webkit-box-shadow: 0 0px 10px 0 rgba(0,0,0,0.47);
        -moz-box-shadow: 0 0px 10px 0 rgba(0,0,0,0.47);
        box-shadow: 0 0px 10px 0 rgba(0,0,0,0.47);
      }

      .Footer {
        text-align: center;
        color: #000;
      }

      .Footer p {
        margin-top: 0;
        margin-bottom: 0;
      }
    </style>

    <footer class="Footer">
      <p><slot></slot></p>
    </footer>
    `
  }
}

customElements.define('custom-footer', CustomFooter);
