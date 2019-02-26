import {LitElement, html} from '@polymer/lit-element';
import './custom-header.js';
import './speakers-list.js';
import './talks-list.js';
import './custom-footer.js';

/**
 * App Core component
 */
class AppCore extends LitElement {
  constructor() {
    super();
    this.speakers = [];
    this.talks = [];
  }

  static get properties() {
    return {
      speakers: Array,
      talks: Array,
    };
  }

  render() {
    return html`
    <style>
      :host {
        display: block;
      }
      
      .App {
        display: flex;
        height: 100vh;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: space-between;
        overflow: hidden;
        background-color: #323230;
      }
    
      main {
        display: block;
      }
    
      custom-header,
      custom-footer {
        flex: 0;
      }
    
      main {
        flex: 1;
        overflow-y: scroll;
      }
    </style>

    <div class="App">
      <custom-header
        headerLogo='{"logourl":"#","imageurl":"/src/assets/logo.png","imagealt":"BucharestJS logo","imagetitle":"B JS"}'>
        <h1>P.W.A. w/ LitHTML</h1>
      </custom-header>
    
      <main>
        <speakers-list
          title="Speakers:"
          .speakers="${this.speakers}"
        ></speakers-list>
    
        <talks-list
          title="Talks:"
          .talks="${this.talks}"
        ></talks-list>
      </main>
    
      <custom-footer>Copyright &copy; BucharestJS 2019 - Răzvan Roșu</custom-footer>
    </div>
    `
  }

  firstUpdated() {
    // get speakers
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => {
        if (!r.ok) { throw Error(r.statusText); }
        return r;
      })
      .then((r) => r.json())
      .then((r) => {
        window.__SPEAKERS__ = r;
        this.speakers = r;
      }).catch(function(error) {
        console.log("failed to load speakers", error);
      });

    // get talks
    window.addEventListener("injectTalks",() => {
      this.talks = window.__TALKS__;
    }, false);

    // Hide Loader when app is loaded
    const s = document.getElementById('loader').style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,70)})();
  }
}

customElements.define('app-core', AppCore);
