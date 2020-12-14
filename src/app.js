import isEmail from 'validator/lib/isEmail';
import add from './add';

console.log(isEmail('hello@test.com'));
console.log(add(200, 180));

document.querySelector('h1').innerText = "Welcome!!"

if (module.hot) {
  module.hot.accept();
}