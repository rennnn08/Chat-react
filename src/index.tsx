import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import actionCable from 'actioncable';
import { Provider } from "./Provider";

import App from './App';

import * as serviceWorker from './serviceWorker';

import './styles/index.css';

const cable = actionCable.createConsumer(`ws:${process.env.REACT_APP_API_URL}/cable`);

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App cableApp={cable} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement,
);

serviceWorker.unregister();