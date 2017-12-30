import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './template.html';

export class TopNav extends PolymerElement {
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
}

customElements.define('top-nav', TopNav);
