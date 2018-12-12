import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';
import './logo-component.js';
import './navigation-component.js';

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
        text-align: center;
      }
      
      logo-component {
        height: 75px;
      }
      
      .Title, navigation-component {display: none;}
      
      @media screen and (min-width: 768px) {     
        logo-component {
          height: 150px;
        }
          
        .CustomHeader {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          text-align: left;
        }
        
        .Title, navigation-component {display: block;}
      }     
    </style>

    <header class="CustomHeader">
      <logo-component
        logourl=${JSON.parse(this.headerLogo).logourl}
        imageurl=${JSON.parse(this.headerLogo).imageurl}
        imagealt=${JSON.parse(this.headerLogo).imagealt}
        imagetitle=${JSON.parse(this.headerLogo).imagetitle}
      ></logo-component>
      <div class="Title"><slot></slot></div>
      <navigation-component .items=${this.headerNav}></navigation-component>
    </header>
    `
  }
}

customElements.define('custom-header', CustomHeader);
