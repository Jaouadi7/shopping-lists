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
        <div id="shoping-list-app" className='p-5'>
            <div className="container">
            {
                shoppingLists.length > 0 ? (
                    <>
                        <h1 className='app-title title is-size-5'>Shopping Lists ( { shoppingLists.length } )</h1>
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
