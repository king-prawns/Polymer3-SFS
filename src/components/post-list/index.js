import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import * as view from './template.html';
import api from '../api';

export class PostList extends PolymerElement {
  static get template() {
    return view;
  }

  static get properties() {
    return {
      i18n: {
        type: Object
      },
      posts: {
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
    api.get('/posts').then((posts) => {
      this.posts = posts;
    });
  }

  clickHandler(e) {
    window.location.hash = `#/user/${e.target.dataset.id}`;
  }
}

customElements.define('post-list', PostList);
