import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { reducers } from './reducers';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'rsuite/lib/styles/index.less';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
