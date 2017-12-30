import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './template.html';
import '../my-element';

export class PolymerApp extends PolymerElement {
  static get properties() {
    return {};
  }

  static get template() {
    return view;
  }
}

customElements.define('polymer-app', PolymerApp);
