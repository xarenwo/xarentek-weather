var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: 'Andrew',
    location: 'Milan'
};

var objTwo = {
    age:24,
    ...objOne

};

console.log(objTwo);

ReactDOM.render(
  <h1>React JS Boilerplate</h1>,
  document.getElementById('app')
);
