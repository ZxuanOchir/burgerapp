import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import burgerReducer from './redux/reducer/burgerReducer'



const loggerMiddleWare = store => {
  return (next) => {
    return action => {
      console.log("MyLoggerMiddleWare : Dispatching ==> ", action );
      console.log("MyLoggerMiddleWare : State before : ", store.getState());
      const result = next(action);
      console.log("MyLoggerMiddleWare : State after :", store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  burgerReducer, 
  composeEnhancers(applyMiddleware(loggerMiddleWare))
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
