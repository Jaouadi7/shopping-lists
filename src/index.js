// ---------------- IMPORT FILES ----------------- //
import React from 'react';
import * as ReactDom from 'react-dom/client';
import App from './App';

// --------------- VARIABLES -------------------- //
const rootElem = document.getElementById('root');

// --------------- VARIABLES -------------------- //
ReactDom.createRoot(rootElem).render(<App />);
