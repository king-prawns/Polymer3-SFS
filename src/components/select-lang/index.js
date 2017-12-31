import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './template.html';

export class SelectLang extends PolymerElement {
  static get template() {
    return view;
  }

  static get properties() {
    return {
      i18n: {
        type: Object
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  changeLanguage(e) {
    this.dispatchEvent(
      new CustomEvent('lang-selected', {
        bubbles: true,
        composed: true,
        detail: {
          lang: e.target.dataset.lang
        }
      })
    );
  }
}

customElements.define('select-lang', SelectLang);
