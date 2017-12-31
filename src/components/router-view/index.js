import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';
import * as view from './template.html';
import '../user-list';

export class RouterView extends PolymerElement {
  static get template() {
    return view;
  }

  static get properties() {
    return {
      i18n: {
        type: Object
      },
      page: {
        type: Object
      }
    };
  }

  isCurrent(p, c) {
    return p === c;
  }
}

customElements.define('router-view', RouterView);
