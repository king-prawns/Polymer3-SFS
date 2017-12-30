import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './template.html';

export class MyElement extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String,
        value: 'Foobar'
      }
    };
  }

  static get template() {
    return view;
  }
}

customElements.define('my-element', MyElement);
