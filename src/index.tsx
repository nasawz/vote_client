import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import store from './store';
import Root from './root';
var container = document.getElementById('mainContainer');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Root />
    </Provider>
  </AppContainer>,
  container
);

declare var module: any;
if (module.hot) {
  module.hot.accept();
}
