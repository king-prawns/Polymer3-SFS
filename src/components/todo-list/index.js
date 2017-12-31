import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import * as view from './template.html';
import api from '../api';

export class TodoList extends PolymerElement {
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
      todos: {
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
    api.get(`/todos?userId=${this.userId}`).then((todos) => {
      this.todos = todos;
    });
  }

  clickHandler() {
    window.location.hash = `#/user/${this.userId}`;
  }

  getCompleted(todos) {
    return todos.filter(t => t.completed).length;
  }
}

customElements.define('todo-list', TodoList);
