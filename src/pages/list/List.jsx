import { useParams } from 'react-router-dom';
import { ImCheckmark } from "react-icons/im";
import './list.scss';
import { getLists } from '../../data/Data';


const List = () => {

  const { id } = useParams();
  const shoppingLists = getLists();
  const currentList = shoppingLists.filter( list => (list.id === Number(id) ))
  return (
    <div className="shopping-list">
      <h1>{currentList[0].name}</h1>
      <ul>
        {
          currentList[0].items.map( ( list ) => {
            return (
              <li key={list.id}>
                <div className="shopping-list_header">
                      <h2 className="shopping-item_heading">{ list.name } (x{list.quantity})</h2>
                      <div className="shopping-item_control">
                        <ImCheckmark />
                      </div>
                    </div>
                    <div className="shopping-list_details">
                      <h4 className='shopping-list_total'>Total: { list.price }DH</h4>
                    </div>
              </li>
            )
          })
        }
        
      </ul>
    </div>
   
  )
}

export default List