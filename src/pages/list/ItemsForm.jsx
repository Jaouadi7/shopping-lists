import { useParams, Link } from "react-router-dom";
import Header from "./content/Header";
import { ImSad, ImBin } from "react-icons/im"


const ItemsForm = ({ lists, setLists }) => {

  const { id } = useParams();

  const activeList = lists.filter((list) => Number(id) === list.id);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="shopping-lists_items">
      {
        activeList.length === 0 ? (
          <div className="errorMsg is-flex is-justify-content-center is-align-items-center is-flex-direction-column" style={{ 'height': '100vh' }}>
            <h1 className="primary-title heading-4 title"><span className="icon mr-3"><ImSad /></span><span>Something went worng please try again</span>  </h1>
            <Link to={'/creat-shoping-list'} className='button primary-button has-no-border  has-text-weight-bold'>Try again</Link>
          </div>
        ) : (
          <>
            <Header name={activeList[0].name} />
            <div className="container">
              <div className="p-4">
                <div className="display-shopping-items">
                  <ul>
                    <li className={`shopping-list_item mb-4 pb-3`} >
                      <div className="shopping-list_header is-flex is-justify-content-space-between is-align-items-baseline">
                        <h2 className="shopping-list_heading heading-5">OMO Matic( x12 )</h2>

                        <div className="shopping-list_control">
                          <span className="icon delete-item ">
                            <ImBin />
                          </span>
                        </div>
                      </div>
                      <div className="shopping-list_details is-flex">
                        <h4 className='shopping-list_total mr-4 heading-7'>Total: 100 DH</h4>
                      </div>
                    </li>

                  </ul>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <label htmlFor="name" className="label is-uppercase">Item Name</label>
                      <input type="text" className="input is-medium" name="name" required pattern="" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <label htmlFor="price" className="label is-uppercase">Item Price (DH)</label>
                      <input type="text" className="input is-medium" name="price" required pattern="" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label htmlFor="quantity" className="label is-uppercase">Quantity</label>
                      <input type="text" className="input is-medium" name="quantity" required pattern="" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="buttons">
                      <button className='button is-uppercase primary-button is-fullwidth submit-button ' type='submit'>Add to list</button>
                      <Link to={'/'} className='button is-uppercase cancleBtn is-fullwidth'>Add item & save list</Link>
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