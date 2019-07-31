import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import store from './store';
// import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(<Provider {...store}>
  <App />
</Provider>, document.getElementById('root'));

