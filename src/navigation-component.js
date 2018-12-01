import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';
import {repeat} from '../node_modules/lit-html/directives/repeat.js';

/**
 * Navigation Component
 */
class NavigationComponent extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      items: {type: Array},
    };
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
        background-color: #FFF;
      }

      .NavigationComponent {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        margin-bottom: 0;
        margin-top: 0;
        padding-left: 0;
        border: 1px solid #333;
      }

      .NavigationComponent-item:not(:last-child) {
         border-right: 1px solid #333;
      }

      .NavigationComponent-link {
        display: block;
        padding: 10px 5px;
        text-decoration: none;
        color: #333;
      }

      .NavigationComponent-link:hover {
        color: #fff;
        background-color: #333;
      }
    </style>

    <ul class="NavigationComponent">
      ${repeat(JSON.parse(this.items), i => html`
        <li class="NavigationComponent-item">
          <a class="NavigationComponent-link" href=${i.link}>
             ${i.label}
          </a>
        </li>
      `)}
    </ul>
    `
  }
}

customElements.define('navigation-component', NavigationComponent);
