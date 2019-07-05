import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Main from './component/MainComponent';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Main />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
