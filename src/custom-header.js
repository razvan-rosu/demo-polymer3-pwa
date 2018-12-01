import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

/**
 * Header Component (Logo + Navigation)
 */
class CustomHeader extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      headerLogo: {type: Object},
      headerNav: {type: Array}
    };
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
        position: relative;
        z-index: 1;
        padding-left: 20px;
        padding-right: 40px;
        -webkit-box-shadow: 0 0px 10px 0 rgba(0,0,0,0.47);
        -moz-box-shadow: 0 0px 10px 0 rgba(0,0,0,0.47);
        box-shadow: 0 0px 10px 0 rgba(0,0,0,0.47);
      }

      .CustomHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    </style>

    <header class="CustomHeader">
      <logo-component
        logourl=${JSON.parse(this.headerLogo).logourl}
        imageurl=${JSON.parse(this.headerLogo).imageurl}
        imagealt=${JSON.parse(this.headerLogo).imagealt}
        imagetitle=${JSON.parse(this.headerLogo).imagetitle}
      ></logo-component>
      <div><slot></slot></div>
      <navigation-component .items=${this.headerNav}></navigation-component>
    </header>
    `
  }
}

customElements.define('custom-header', CustomHeader);
