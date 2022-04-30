import { useParams, useNavigate } from 'react-router-dom';
import Header from './content/Header';
import ListControl from './content/ListControl';
import ListPrice from './content/ListPrice';
import ListTitle from './content/ListTitle';

const List = ({ shoppingLists }) => {

  const { id } = useParams(); // GET SHOPPING LIST ID
  const navigate = useNavigate(); // TO NAVIGATE APP PAGES
  const currentList = shoppingLists.filter(list => (list.id === Number(id))) // FILTERING DATA TO SORT THE ACTIVE SHOPPING LIST BY ID
  const backHomePage = () => navigate('/');   // BACK HOMEPAGE FUNCTION

  return (
    <>
      <div className="shopping-lists list">
        <Header name={currentList[0].name} />
        <div className="container">
          <div className="p-4">
            <ul>
              {
                currentList[0].items.map((list) => {
                  return (
                    <li key={list.id} className={`shopping-list_item mb-4 pb-3 ${list.isBought && 'completed'}`} >
                      <div className="shopping-list_header is-flex is-justify-content-space-between is-align-items-baseline">
                        <ListTitle name={list.name} quantity={list.quantity} />
                        <ListControl />
                      </div>
                      <ListPrice price={list.price} />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>

      <div className="back-btn m-5">
        <button className='button is-uppercase primary-button is-fullwidth' onClick={backHomePage}>Back</button>
      </div>
    </>
  )
}

export default List