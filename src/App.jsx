// --------------- IMPORT FILES ------------------ //
import 'bulma/css/bulma.css';
import './app.scss';
import { getLists } from './data/Data';
import Lists from './pages/lists/Lists';
import Welcome from './pages/no-lists/Welcome';

// ---------------  APP COMPONENT ---------------- //
const App = ( ) => {

    let shoppingLists = getLists();

    return (
        <div id="shoping-list-app">
            {
                shoppingLists.length > 0 ? (
                    <>
                        <h1>Shopping Lists ( { shoppingLists.length } )</h1>
                        <Lists lists={ shoppingLists } /> 
                    </>
                ) :
                <Welcome />
            }
        </div>
    )
}

export default App;
