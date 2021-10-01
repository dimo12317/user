import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import dispatch from './store/dispatch/dispatch'
import store from './store/store.json'

dispatch.subscribe(store);

dispatch.render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={dispatch.info} dispatch={dispatch.options.bind(dispatch)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

dispatch.render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
