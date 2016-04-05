import angular from 'angular';

// console.log(angular);

const testing = 'testing 123';

// {
//   let newTest = '2'
//   console.log(newTest)
// }
var test = document.getElementById('root');
console.log(test); 

const title = document.createElement('h2')
title.textContent = 'Is this thing on?';

test.appendChild(title);
// console.log('this wordBreakks');
// console.log('this works again');
console.log('this works again and again');
// document.write('hello')
// document.write('testing 123')

const tryagain = 'is my ES6 working?'

// console.info(tryagain)

if (module.hot) {
  // module.hot.dispose(function() {
  //   sideEffectNode.parentNode.removeChild(sideEffectNode);
  // });
  module.hot.accept();
}