import { useParams, useNavigate } from 'react-router-dom';
import { ImCheckmark } from "react-icons/im";
import './list.scss';
import { getLists } from '../../data/Data';


const List = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const shoppingLists = getLists();
  const currentList = shoppingLists.filter( list => (list.id === Number(id) ))

  // BACK HOMEPAGE
  const backHomePage = ( ) => navigate('/');
  return (
    <>
      <div className="shopping-list p-5">
        <h1 className='app-title title is-size-5'>{currentList[0].name}</h1>
        <ul className='shopping-lists'>
          {
            currentList[0].items.map( ( list ) => {
              return (
                <li key={ list.id } className={ `shopping-list_item pb-2 mb-2 ${list.isBought && 'completed'}`} >
                  <div className="shopping-list_header is-flex is-justify-content-space-between is-align-content-center">
                    <h2 className="shopping-list_heading">{ list.name } ( x{list.quantity} )</h2>
                    <div className="shopping-list_control">
                      <span className="icon isCompleted">
                        <ImCheckmark  />
                      </span>
                    </div>
                  </div>
                  <div className="shopping-list_details is-flex">
                    <h4 className='shopping-list_total mr-4'>Total: { list.price } DH</h4>
                  </div>
                </li> 
              )
            })
          }
          
        </ul>
      </div>
      <div className="back-btn m-5">
        <button className='button is-uppercase primaryBtn is-fullwidth' onClick={backHomePage}>Back</button>
      </div>
    </>
  )
}

export default List