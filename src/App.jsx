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
                        <header className='is-flex is-justify-content-space-between'>
                            <h1 className='app-title title mb-6'>Shopping Lists ( { shoppingLists.length } )</h1>
                            <button className='button is-small new-list-btn'> New List </button>
                        </header>
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
