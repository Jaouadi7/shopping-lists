import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "./content/Header";
import { ImSad, ImBin } from "react-icons/im"
import { useState } from "react";

const ItemsForm = ({ lists, setLists }) => {

  const { id } = useParams();

  const navigate = useNavigate();

  const activeList = lists.filter((list) => Number(id) === list.id);

  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    quantity: '',
  })

  const formInputs = [
    {
      id: 1,
      name: 'name',
      label: 'Item Name',
      placeholder: '',
      isRequired: true,
      type: 'text',
      pattern: '^[A-Za-z 0-9]{4,}$',
      errorMsg: '* Name should be min 4 characters, special characters not allowed',
      classes: 'input is-medium',
      isExpended: true

    },
    {
      id: 2,
      name: 'price',
      label: 'Item Price',
      placeholder: '',
      isRequired: true,
      type: 'text',
      pattern: '^[0-9.]{1,}$',
      errorMsg: '* Price value should be a valid number',
      classes: 'input is-medium',
      isExpended: false
    },
    {
      id: 3,
      name: 'quantity',
      label: 'Quantity',
      placeholder: '',
      isRequired: true,
      type: 'text',
      pattern: '^[0-9]{1,}$',
      errorMsg: '* Quantity value should be a valid number',
      classes: 'input is-medium ',
      isExpended: false
    },

  ]


  // PASSING THE FORM DATA
  const handleOnChange = (e) => setNewItem({ ...newItem, [e.target.name]: e.target.value });

  // GENERATE LIST ID
  const ID = Math.floor(Math.random() * 1000) + 1;

  // SET DEFAULT PROPS
  const defaultProps = {
    id: ID,
    isBought: false,
  }

  // MERGE TWO OBJECT { NEW LIST AND  DEFAULT PROPS }
  const item = { ...newItem, ...defaultProps };

  const addToList = (e) => {

    e.preventDefault();

    // UPDATE ACTIVE LIST WITH THE NEW ITEM
    const selectList = lists[lists.length - 1];
    selectList.items.push(item);

    // EMPTY FORM
    setNewItem({
      name: '',
      price: '',
      quantity: '',
    })

    // SET CHECKER TO THE DEFAULT
    const inputs = document.querySelectorAll('.items-form .input');
    inputs.forEach(input => input.setAttribute('focused', 'false'));

  }

  // BACK HOMEPAGE
  const backHomePage = () => navigate(`/`);


  // DELETE ITEM
  const deleteItem = (itemID) => {

    // FILTER ITEMS: SELECT ITEM BY INDEX 
    const selectedItem = activeList[0].items.findIndex(item => (item.id !== itemID))
    // REMOVE SELECTED ITEM FORM  ITEMS OBJ
    activeList[0].items.splice(selectedItem, 1);
    // UPDATE LISTS
    setLists([...lists]);

  }


  return (
    <div className="shopping-lists_items">
      {
        activeList.length === 0 ? (
          <div className="errorMsg is-flex is-justify-content-center is-align-items-center is-flex-direction-column" style={{ 'height': '100vh' }}>
            <h1 className="primary-title heading-4 title"><span className="icon mr-1"><ImSad /></span><span>Oops! please try again and create a new list</span>  </h1>
            <Link to={'/creat-shoping-list'} className='button primary-button has-no-border  has-text-weight-bold'>New List</Link>
          </div>
        ) : (
          <>
            <Header name={activeList[0].name} />
            <div className="container">
              <div className="p-4">
                <div className="display-shopping-items">
                  <ul>
                    {
                      activeList[0].items.map(item => {
                        return (
                          <li key={item.id} className={`shopping-list_item mb-4 pb-3`} >
                            <div className="shopping-list_header is-flex is-justify-content-space-between is-align-items-baseline">
                              <h2 className="shopping-list_heading heading-5">{item.name} ( x {item.quantity} )</h2>

                              <div className="shopping-list_control">
                                <span className="icon delete-item" onClick={() => deleteItem(item.id)}>
                                  <ImBin />
                                </span>
                              </div>
                            </div>
                            <div className="shopping-list_details is-flex">
                              <h4 className='shopping-list_total mr-4 heading-7'>Total: {Number(item.price) * Number(item.quantity)} DH</h4>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>

                <form onSubmit={addToList} className='items-form'>

                  {
                    formInputs.map(input => {
                      return (
                        <div key={input.id} className={!input.isExpended ? 'field w-50' : 'field'}>
                          <div className="control">
                            <label htmlFor={input.name} className="label is-uppercase">{input.label}</label>
                            <input
                              className={input.classes}
                              type={input.type}
                              name={input.name}
                              id={input.name}
                              placeholder={input.placeholder}
                              onChange={handleOnChange}
                              pattern={input.pattern}
                              value={newItem[input.name]}
                              onBlur={(e) => {
                                e.target.attributes.focused.value = true
                              }}
                              focused="false"
                              autoComplete='false'
                              required={input.isRequired}
                            />
                            <small className="errorMsg help is-danger mb-1 ">{input.errorMsg}</small>
                          </div>
                        </div>
                      )
                    })

                  }

                  <div className="field">
                    <div className="buttons">
                      <button className='button is-uppercase  primary-button is-fullwidth' type="submit"> Add & Save item</button>
                      <button className='button is-uppercase is-fullwidth is-warning' onClick={backHomePage} >Lists</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )
      }

    </div>
  )
}

export default ItemsForm