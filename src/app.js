import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';

const App = () => (
  <div>
    <Title text="Hello, everyone!!" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}