import { ImFileEmpty, ImCheckmark } from "react-icons/im";
import { Link } from 'react-router-dom';
import './lists.scss';


const Lists = ( { lists } ) => {
  return (
    <ul className="shopping-lists">
      {
        lists.map( ( list ) => {
          return  <li key={ list.id } className="shopping-list_item pb-2 mb-2">
                    <div className="shopping-list_header is-flex is-justify-content-space-between is-align-content-center">
                      <h2 className="shopping-list_heading">
                        <Link to={`/list/${list.id}`} className="has-text-black">
                          <span className="icon">
                            <ImFileEmpty className="mr-2" />
                          </span>
                          <span>{ list.name }</span>
                        </Link>
                      </h2>
                      <div className="shopping-list_control">
                        <span className="icon">
                          <ImCheckmark  />
                        </span>
                      </div>
                    </div>
                    <div className="shopping-list_details is-flex">
                      <h4 className='shopping-list_total mr-4'>Total: { list.total }DH</h4>
                      <h4 className='shopping-list_date'>Date: { list.date } </h4>
                    </div>
                  </li> 
        })
      }
      
    </ul>
  )
}

export default Lists