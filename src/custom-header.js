import {LitElement, html} from '@polymer/lit-element';
import './logo-component.js';
import './installer-component.js';

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
        padding-right: 20px;
        background-color: rgb(239,223,65);
        -webkit-box-shadow: 0 0px 10px 0 rgba(0,0,0,0.47);
        -moz-box-shadow: 0 0px 10px 0 rgba(0,0,0,0.47);
        box-shadow: 0 0px 10px 0 rgba(0,0,0,0.47);
      }

      .CustomHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        text-align: left;
      }
      
      logo-component {height: 75px;}
      
      .Title {display: none;}
        
      @media screen and (min-width: 768px) {    
        logo-component {height: 150px;}
         
        .Title {display: block;}       
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
      <installer-component></installer-component>        
    </header>
    `
  }
}

customElements.define('custom-header', CustomHeader);
