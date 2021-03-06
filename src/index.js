// ---------------- IMPORT FILES ----------------- //
import React from 'react';
import * as ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // USE STATS HOOK
import { getLists } from './data/Data'; // STATIC SHOPPING LISTS DATA

// APPLICATION COMPONENTS
import App from './App'; // APP HOME COMPONENT
import ListsForm from './pages/lists/ListsForm';
import List from './pages/list/List';
import ItemsForm from './pages/list/ItemsForm';
import NotFound from './pages/errors/NotFound';

// --------------- VARIABLES -------------------- //
const rootElem = document.getElementById('root');

const ShoppingListsApplication = () => {
  let shoppingLists = getLists(); // STORE DATA IN VARIABLE
  const [lists, setLists] = useState(shoppingLists); // STORE SHOPPING LISTS DATA IN USE STATS HOOK

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<App shoppingLists={lists} setLists={setLists} />}
          />
          <Route
            path="creat-shoping-list"
            element={<ListsForm lists={lists} setLists={setLists} />}
          />
          <Route
            path="list/:id"
            element={<List shoppingLists={lists} setLists={setLists} />}
          />
          <Route
            path="list/:id/add-shopping-items"
            element={<ItemsForm lists={lists} setLists={setLists} />}
          />
          <Route
            path="list/:id/update-shopping-items"
            element={<ItemsForm lists={lists} setLists={setLists} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

// --------------- VARIABLES -------------------- //
ReactDom.createRoot(rootElem).render(<ShoppingListsApplication />);
