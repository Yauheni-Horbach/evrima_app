import React from 'react';
import {Provider} from 'react-redux';

import store from './store/index';
import {RootNavigator} from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
