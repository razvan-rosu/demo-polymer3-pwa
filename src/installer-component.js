import {LitElement, html} from '@polymer/lit-element';

/**
 * Install Button component
 */
class InstallerComponent extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
    };
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
      }
      
      .InstallerComponent {
        display:inline-block;
        padding:0 10px;
        text-align:center;
        text-transform:uppercase;      
        font-weight: bold;
        line-height:30px;
        text-decoration:none;
        color: #323230;
        background-color:#FFF;
        border: 1px solid #323230;
        white-space:nowrap;
        -webkit-transition:all 0.2s ease-in-out;
        -o-transition:all 0.2s ease-in-out;
        transition:all 0.2s ease-in-out;
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        vertical-align:middle;
        cursor:pointer;
        -ms-touch-action:manipulation;
        touch-action:manipulation;
        outline:0
      }
      
      .InstallerComponent:hover {  
        color: #333;               
        background-color: #FE7A22;
      }
      
      .InstallerComponent[disabled] {
        pointer-events:none;
        cursor:not-allowed;
        -webkit-box-shadow:0 0 0 rgba(0, 0, 0, 0);
        box-shadow:0 0 0 rgba(0,0,0,0);
        opacity:0.30;
        filter:alpha(opacity=30)
      }  
    </style>

    <button type="button" disabled id="Install" class="InstallerComponent">Install</button>
    `
  }

  firstUpdated(_changedProperties) {
    let btnAdd = this.shadowRoot.getElementById('Install');
    var deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can add to home screen
      btnAdd.removeAttribute('disabled');
      console.log('Install button has been enabled!');
    });

    btnAdd.addEventListener('click', (e) => {
      // hide our user interface that shows our A2HS button
      btnAdd.setAttribute('disabled', 'true');
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
  }
}

customElements.define('installer-component', InstallerComponent);
