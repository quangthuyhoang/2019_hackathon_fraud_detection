import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/index';
// import initState from '../Reducer/initState';

// export default function configureStore() {
//   const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducer, initState);
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../Reducers/index.js', () => {
//       const nextReducer = require('../Reducer/index.js');
//       store.replaceReducer(nextReducer);
//     });
//   }

//   return store;
// }

// import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
// // Redux thunk need to be added as middleware to allow 
// // async function calls
// import thunk from 'redux-thunk';

// // import reducers
// import MainApp from '../Reducer/';

export default function configureStore() {
  return createStore(
    rootReducer, 
    compose(
      applyMiddleware(thunk), 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
}

