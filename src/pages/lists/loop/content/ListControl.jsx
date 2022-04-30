import { ImCheckmark, ImPencil, ImBin, ImAlarm } from "react-icons/im"; // IMPORT ICONS

const ListControl = ({ isCompleted }) => {

    let disabled = isCompleted;

    return (
        <div className="shopping-list_control">

            <button className={`button is-small mr-1 isCompleted ${isCompleted && 'is-success'}`}>
                <span className="icon "><ImCheckmark /></span>
            </button>

            <button className="button is-small is-black mr-1" disabled={disabled} >
                <span className="icon "><ImAlarm /></span>
            </button>

            <button className="button is-small is-warning mr-1" disabled={disabled}>
                <span className="icon "><ImPencil /></span>
            </button>

            <button className="button is-small is-danger">
                <span className="icon "><ImBin /></span>
            </button>

        </div>
    )
}

export default ListControl