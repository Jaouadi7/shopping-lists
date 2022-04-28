// ---------------- IMPORT FILES ----------------- //
import React from 'react';
import * as ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Lists from './pages/lists/Lists';
import ListsForm from './pages/lists/ListsForm';
import List from './pages/list/List';
import ItemsForm from './pages/list/ItemsForm';
import NotFound from './pages/errors/NotFound';

// --------------- VARIABLES -------------------- //
const rootElem = document.getElementById('root');

// --------------- VARIABLES -------------------- //
ReactDom.createRoot(rootElem).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="lists" element={<Lists />} />
      <Route path="creat-shoping-list" element={<ListsForm />} />
      <Route path="list/:id" element={<List />} />
      <Route path="add-shopping-items" element={<ItemsForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
