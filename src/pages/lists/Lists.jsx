import { ImFileEmpty, ImCheckmark, ImPencil, ImBin } from "react-icons/im";
import { Link } from 'react-router-dom';
import './lists.scss';
import Stats from "../../components/Stats/Stats";


const Lists = ( { lists } ) => {
  return (
    <>
      <ul className="shopping-lists">
        {
          lists.map( ( list ) => {
            return  <li key={ list.id } className={ `shopping-list_item pb-2 mb-2 ${list.isCompleted && 'completed'}`} >
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

                         <button className={`button is-small mr-1 isCompleted ${list.isCompleted && 'is-success'}` }>
                            <span className="icon ">
                              <ImCheckmark  />
                            </span>
                          </button>

                          <button className="button is-small is-warning mr-1">
                            <span className="icon ">
                              <ImPencil  />
                            </span>
                          </button>
                        
                          <button className="button is-small is-danger">
                            <span className="icon ">
                              <ImBin  />
                            </span>
                          </button>

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
      <Stats />
    </>
    
  )
}

export default Lists