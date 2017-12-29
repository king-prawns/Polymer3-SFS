import helloTpl from './helloWorld.hbs';

export default function hello() {
  console.log(webpackGlobal.env());
  document.getElementById('container').innerHTML = helloTpl({
    firstName: 'Hello',
    lastName: 'World'
  });
}
