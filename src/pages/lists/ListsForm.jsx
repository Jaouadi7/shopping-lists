import { Link } from 'react-router-dom';
import './form.scss';

const ListsForm = () => {
  return (
    <div className="shopping-list-form p-5 ">
      <form className='create-list-form is-flex is-align-items-stretch is-justify-content-center is-flex-direction-column'>
        <div className="field">
          <div className="control">
            <label htmlFor="name" className='label'>Give this list a name</label>
            <input className='input is-medium' type="text"  name='name' id='name' placeholder='New list'/>
          </div>
        </div>
        <div className="field mb-5">
          <div className="control">
            <label htmlFor="date" className='label'>Date to shopping</label>
            <input className='input is-medium' type="date"  name='date' id='date'/>
          </div>
        </div>
        <div className="buttons">
          <button className='button is-uppercase primaryBtn is-fullwidth'>Add items</button>
          <Link to={'/'} className='button is-uppercase cancleBtn is-fullwidth'>Cancel</Link>
        </div>
      </form>
    </div>
   
  )
}
  
export default ListsForm;