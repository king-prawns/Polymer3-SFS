import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import * as view from './template.html';
import CustomWidget from '../../widget/customWidget';
import api from '../api';

export class UserDetail extends PolymerElement {
  static get template() {
    return view;
  }

  static get properties() {
    return {
      i18n: {
        type: Object
      },
      userId: {
        type: Number
      },
      user: {
        type: Object,
        value: {}
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  fetchData() {
    api.get(`/users/${this.userId}`).then((user) => {
      this.user = user;
    });
  }

  clickHandler(e) {
    window.location.hash = `#/user/${e.target.dataset.id}/todos`;
  }

  updateHandler() {
    const usr = Object.assign(this.user, {
      name: this.shadowRoot.querySelector('#name').value,
      email: this.shadowRoot.querySelector('#email').value,
      username: this.shadowRoot.querySelector('#username').value,
      phone: this.shadowRoot.querySelector('#phone').value
    });
    api.put(`/users/${this.userId}`, usr);
  }

  sayHandler() {
    const firstName = this.shadowRoot.querySelector('#name').value;
    const lastName = this.shadowRoot.querySelector('#username').value;
    CustomWidget.fullName(firstName, lastName);
  }
}

customElements.define('user-detail', UserDetail);
