import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { Router } from 'director/build/director';
import * as view from './template.html';
import * as IT from '../../translate/it.json';
import * as EN from '../../translate/en.json';
import '../my-header';
import '../top-nav';
import '../router-view';

export class PolymerApp extends PolymerElement {
  static get template() {
    return view;
  }

  static get properties() {
    return {
      i18n: {
        type: Object,
        value: EN
      },
      page: {
        type: String,
        value: {
          current: 'users',
          param: null
        }
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.initRouter();
  }

  initRouter() {
    const routes = {
      '/users': () => this.handleRoutes('users'),
      '/user/:id': id => this.handleRoutes('user', id),
      '/user/:id/todos': id => this.handleRoutes('todos', id),
      '/posts': () => this.handleRoutes('posts')
    };
    const router = Router(routes);
    router.init(['/users']);
  }

  handleRoutes(c, p) {
    this.page = Object.assign(
      {},
      {
        current: c,
        param: p
      }
    );
  }

  onlangSelected(e) {
    e.stopPropagation();
    this.i18n = Object.assign({}, e.detail.lang === 'it' ? IT : EN);
  }
}

customElements.define('polymer-app', PolymerApp);
