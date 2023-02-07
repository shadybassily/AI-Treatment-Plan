import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// Most of these new issues (textEditor issue ex:uploading images) are related to React 18 strict mode,
// On development, disable the StrictMode,
// On production, they will work fine because StrictMode only works on dev mode

ReactDOM.createRoot(document.getElementById('root')).render(
   // <React.StrictMode>
   <Provider store={store}>
      <PersistGate persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>
   // </React.StrictMode>,
);
