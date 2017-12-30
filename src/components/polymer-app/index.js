import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import { Router } from 'director/build/director';
import * as view from './template.html';
import * as i18n from '../../translate/en.json';
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
        value: i18n
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
}

customElements.define('polymer-app', PolymerApp);
