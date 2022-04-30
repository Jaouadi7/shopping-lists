import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';

const Welcome = () => {
  return (
    <div className='shopping-lists_welcome is-flex is-flex-direction-column is-align-items-center is-justify-content-center'>
      <figure className="image  is-48x48">
        <img src={Logo} alt="Shopping List" />
      </figure>
      <h1 className='shopping-lists_title is-size-2'>Shopping List</h1>
      <h3 className='subtitle'>Make your shopping More easier</h3>
      <Link className='button has-no-border has-text-weight-semibold' to={'/creat-shoping-list'}>
        <span>Let's create a list</span>
        <span className='icon'>
          <ImArrowRight2 />
        </span>
      </Link>
    </div>
  )
}

export default Welcome