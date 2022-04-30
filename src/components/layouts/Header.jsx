import { Link } from 'react-router-dom'; // REACT ROUTER LINK\
import { ImFilesEmpty } from 'react-icons/im'; // FILES ICON


const Header = ({ shoppingListsCounter }) => {
  return (
    <header className='mb-3'>
      <div className="container">
        <div className="header-content is-flex is-justify-content-space-between p-4">
          <h1 className='primary-title heading-4 title mb-0'><ImFilesEmpty className='mr-1' />  Shopping Lists ( {shoppingListsCounter} )</h1>
          <Link to={'/creat-shoping-list'} className='button primary-button has-no-border is-small  has-text-weight-bold'>New List</Link>
        </div>
      </div>
    </header>
  )
}

export default Header