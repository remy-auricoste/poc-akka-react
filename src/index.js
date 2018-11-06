import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

window.state = {
  numbers: []
};

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const stream = new EventSource('http://localhost:9000/events');
stream.onmessage = function(event) {
  const { data } = event;
  if (!data) {
    console.log('SSE ping');
  } else {
    const number = parseInt(data);
    window.state.numbers.push(number);
    render();
  }
};
