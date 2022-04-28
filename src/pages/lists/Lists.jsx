import { ImFileEmpty, ImCheckmark } from "react-icons/im";
import { Link } from 'react-router-dom';
import './lists.scss';


const Lists = ( { lists } ) => {
  return (
    <ul className="shopping-lists">
      {
        lists.map( ( list ) => {
          return  <li key={ list.id }>
                    <div className="shopping-list_header">
                      <h2 className="shopping-list_heading">
                        <Link to={`/list/${list.id}`}>
                          <ImFileEmpty /> { list.name }
                        </Link>
                      </h2>
                      <div className="shopping-list_control">
                        <ImCheckmark />
                      </div>
                    </div>
                    <div className="shopping-list_details">
                    <h4 className='shopping-list_total'>Total: { list.total }DH</h4>
                      <h4 className='shopping-list_date'>Date: { list.date } </h4>
                    </div>
                  </li> 
        })
      }
      
    </ul>
  )
}

export default Lists