import { ImFileEmpty } from "react-icons/im"; // IMPORT ICONS
import { IoChevronForward } from 'react-icons/io5'; // IMPORT ICONS
import { Link } from 'react-router-dom'; // REACT ROUTER LINK

const ListTitle = ({ id, name }) => {
    return (
        <h2 className="shopping-list_heading heading-5">
            <Link className="has-text-black is-flex is-align-items-center is-justify-content-center" to={`/list/${id}`}>
                <span className="icon">
                    <ImFileEmpty className="mr-2" />
                </span>
                <span>{name}</span>
                <span className="icon"><IoChevronForward /></span>
            </Link>
        </h2>
    )
}

export default ListTitle