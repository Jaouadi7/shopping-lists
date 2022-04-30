import './scss/app.scss'; // CORE STYLE
import { getLists } from './data/Data'; // STATIC SHOPPING LISTS DATA
import Header from './components/layouts/Header'; // HEADER COMPONENT

import Lists from './pages/lists/Lists';
import Welcome from './pages/no-lists/Welcome';

// ---------------  APP COMPONENT ---------------- //
const App = ( ) => {

    let shoppingLists = getLists();

    return (
        <div id="shopping-list_application">
            <div className="container">
            {
                shoppingLists.length > 0 ? (
                    <>
                       <Header shoppingListsCounter={shoppingLists.length} />
                       <Lists lists={ shoppingLists } /> 
                    </>
                ) :
                <Welcome />
            }
            </div>
           
        </div>
    )
}

export default App;
