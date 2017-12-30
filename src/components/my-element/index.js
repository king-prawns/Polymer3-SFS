import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './template.html';

export class MyElement extends PolymerElement {
  static get template() {
    return view;
  }

  static get properties() {
    return {
      name: {
        type: String,
        value: 'Foobar'
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }
}

customElements.define('my-element', MyElement);
