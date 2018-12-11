import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

/**
 * Footer component
 */
class CustomFooter extends LitElement {
  constructor() {
    super();
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
      <div class="Footer-buttons">
        <button type="button" @click="${this._AskForPermissions}">Ask for Permissions</button>
        <button type="button">Notify demo</button>
      </div>
    </footer>
    `
  }

  _AskForPermissions(e) {
    // If Notifications API is supported
    if ('Notification' in window) {
      Notification.requestPermission(function(result) {
        console.log('User chose:', result);
        if (result !== 'granted') {
          console.log('User has refused permissions!')
        } else {
          console.log('User granted permissions!')
        }
      });
    } else {
      alert('Browser does not support the Notification API');
    };
  }
}

customElements.define('custom-footer', CustomFooter);
