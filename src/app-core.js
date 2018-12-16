import {LitElement, html} from '@polymer/lit-element';
import './custom-header.js';
import './photographer-card-list.js';
import './photo-card-list.js';
import './custom-footer.js';

/**
 * App Core component
 */
class AppCore extends LitElement {
  constructor() {
    super();
    this.photographers = [];
    this.photos = [];
  }

  static get properties() {
    return {
      photographers: Array,
      photos: Array,
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
        headerLogo='{"logourl":"#","imageurl":"assets/manticore.png","imagealt":"Manticore logo","imagetitle":"Manticore"}'
        headerNav='[{"link":"http://google.com","label":"Google"},{"link":"#","label":"Yandex"},{"link":"#","label":"DuckDuckGo"}]'>
        <h1>Proof of Concept: Polymer 3 P.W.A.</h1>
      </custom-header>
    
      <main>
        <photographer-card-list
          title="Photographers:"
          .photographers="${this.photographers}"
        ></photographer-card-list>
    
        <photo-card-list
          title="Album:"
          .photos="${this.photos}"
        ></photo-card-list>
      </main>
    
      <custom-footer>Copyright &copy; Manticores 2018 - Răzvan Roșu</custom-footer>
    </div>
    `
  }

  firstUpdated() {
    // get photographers
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => {
        if (!r.ok) { throw Error(r.statusText); }
        return r;
      })
      .then((r) => r.json())
      .then((r) => {
        window.__PHOTOGRAPHERS__ = r;
        this.photographers = r;
      }).catch(function(error) {
        console.log("failed to load photographers", error);
      });

    // populate photos
    window.addEventListener("injectPhotos",(event) => {
      this.photos = window.__PHOTOS__;
    }, false);

    // Hide Loader when app is loaded
    const s = document.getElementById('loader').style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.1)<0?s.display="none":setTimeout(fade,70)})();
  }
}

customElements.define('app-core', AppCore);
