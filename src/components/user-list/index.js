import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import * as view from './template.html';
import api from '../api';

export class UserList extends PolymerElement {
  static get template() {
    return view;
  }

  static get properties() {
    return {
      i18n: {
        type: Object
      },
      users: {
        type: Array,
        value: []
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  fetchData() {
    api.get('/users').then((users) => {
      this.users = users;
    });
  }

  clickHandler(e) {
    window.location.hash = `#/user/${e.target.parentNode.dataset.id}`;
  }
}

customElements.define('user-list', UserList);
