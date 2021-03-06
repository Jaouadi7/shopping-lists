import './scss/app.scss'; // CORE STYLE
import Header from './components/layouts/Header'; // HEADER COMPONENT
import Lists from './pages/lists/Lists'; // SHOPPING LISTS  COMPONENT TO DISPLAY DATA
import Welcome from './pages/no-lists/Welcome'; // DISPLAY WELCOME COMPONENT PAGE WHEN WE WILL NOT HAVE SHOPPING LISTS

// ---------------  APP COMPONENT ---------------- //
const App = ({ shoppingLists, setLists }) => {

    return (
        <div id="shopping-list_application">
            <div className="container">
                {
                    shoppingLists.length > 0 ? (
                        <>
                            <Header shoppingListsCounter={shoppingLists.length} />
                            <Lists lists={shoppingLists} setLists={setLists} />
                        </>
                    ) :
                        <Welcome />
                }
            </div>

        </div>
    )
}

export default App;




