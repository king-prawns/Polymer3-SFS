import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './template.html';
import '../select-lang';

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
