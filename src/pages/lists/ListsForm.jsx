import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ListsForm = ({ lists, setLists }) => {

  const navigate = useNavigate();

  const [newList, setNewList] = useState({ name: '', date: '' });

  // STORE FORM INPUTS
  const formInputs = [
    {
      id: 1,
      type: 'text',
      placeholder: 'New List',
      label: 'Give this list a name',
      name: 'name',
      classes: 'input is-medium',
      errorMsg: '* Name should be 4-16 characters, special characters not allowed',
      pattern: "^[A-Za-z 0-9]{4,16}$"
    },
    {
      id: 2,
      type: 'date',
      placeholder: '',
      label: 'Date to shopping',
      name: 'date',
      classes: 'input is-medium',
      errorMsg: 'Please select a date for shopping',
    }
  ]

  // SET CHECKER TO HANDLE AND CHECK THE INPUTS ERROR ON BLUR AND FOCUESED EVENT
  // TO DISPLAY ERRORS
  const [checker, setChecker] = useState(false);

  // CHANGE CHECKER VALUE FROM FALSE TO TRUE ON BLURE AND FOCUESED EVENTS
  const handleChecker = (e) => setChecker(true);

  // PASSING THE FORM DATA
  const handleOnChange = (e) => setNewList({ ...newList, [e.target.name]: e.target.value });

  // GENERATE LIST ID
  const id = Math.floor(Math.random() * 1000) + 1;

  // SET DEFAULT PROPS
  const defaultProps = {
    id: id,
    isReminder: true,
    isCompleted: false,
    total: 0,
    items: []
  }

  // MERGE TWO OBJECT { NEW LIST AND  DEFAULT PROPS }
  const list = { ...newList, ...defaultProps };

  // ON SUBMIT
  const handleFormData = (e) => {
    e.preventDefault(); // PREVENT RELOADING THE PAGE

    document.querySelector('.create-list-form .submit-button').classList.add('is-loading'); // DISPLAY LOADING ICON

    // ADD NEW LIST TO THE OTHER LISTS
    setLists([...lists, list]);

    setTimeout(() => { navigate('/lists/add-items') }, 500);

  };


  return (
    <div className="shopping-list-form" onSubmit={handleFormData}>
      <div className="container">
        <div className="p-4">
          <form className='create-list-form is-flex is-align-items-stretch is-justify-content-center is-flex-direction-column'>
            {
              formInputs.map(input => {
                return (
                  <div key={input.id} className="field">
                    <div className="control">
                      <label htmlFor={input.name} className='label heading-5'>{input.label}</label>
                      <input className={input.classes} type={input.type} name={input.name} id={input.name} placeholder={input.placeholder} onChange={handleOnChange} checked={input.checked} required pattern={input.pattern} value={newList[input.name]} onBlur={handleChecker} focused={checker.toString()} />
                      <small className='errorMsg has-text-danger'>{input.errorMsg}</small>
                    </div>
                  </div>
                )
              })
            }

            <div className="buttons">
              <button className='button is-uppercase primary-button is-fullwidth submit-button ' type='submit'>Add items</button>
              <Link to={'/'} className='button is-uppercase cancleBtn is-fullwidth'>Cancel</Link>
            </div>

          </form>
        </div>
      </div>
    </div>

  )
}

export default ListsForm;