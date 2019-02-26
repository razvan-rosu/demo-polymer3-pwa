import {LitElement, html} from '@polymer/lit-element';

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

      .Footer-text {
        margin-top: 0;
        margin-bottom: 0;
      }
      
      .Footer-nav {
        margin-top: 5px;      
      }
      
      .Footer-button {
        display: inline-block;
        background: none;
        border: 1px solid #333;
        padding: 5px 10px;
      }
    </style>

    <footer class="Footer">      
      <p class="Footer-text"><slot></slot></p>
      <div class="Footer-nav">
        <button type="button" class="Footer-button" @click="${this._askForPermissions}">Ask for Permissions</button>
        <button type="button" class="Footer-button" @click="${this._displayNotification}">Notify</button>
      </div>
    </footer>
    `
  }

  _askForPermissions(e) {
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
    }
  }

  _displayNotification() {
    new Notification('This is a legendary notification!');
  }
}

customElements.define('custom-footer', CustomFooter);
