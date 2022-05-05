import { ImCheckmark, ImPencil, ImBin, ImAlarm } from "react-icons/im"; // IMPORT ICONS
import { BiAlarmOff } from "react-icons/bi";
import { Link } from 'react-router-dom'

const ListControl = ({ list, lists, setLists }) => {

    let disabled = list.isCompleted;

    const toggleIsCompleted = () => {
        setLists(lists.map(ls => ls.id === list.id ? { ...ls, isCompleted: !list.isCompleted } : ls))
    }

    const toggleIsReminder = () => {
        setLists(lists.map(ls => ls.id === list.id ? { ...ls, isReminder: !list.isReminder } : ls))
    }

    const deleteList = () => {
        setLists(lists.filter((ls) => ls.id !== list.id))
    }

    return (
        <div className="shopping-list_control">

            <button className={`button is-small mr-1 isCompleted ${list.isCompleted && 'is-success'}`} onClick={toggleIsCompleted}>
                <span className="icon "><ImCheckmark /></span>
            </button>

            <button className="button is-small is-black mr-1" disabled={disabled} onClick={toggleIsReminder} >
                <span className="icon ">{list.isReminder ? <ImAlarm /> : <BiAlarmOff />}</span>
            </button>

            <Link to={`list/${list.id}/update-shopping-items`} className="button is-small is-warning mr-1" disabled={disabled}>
                <span className="icon "><ImPencil /></span>
            </Link>

            <button className="button is-small is-danger" onClick={deleteList}>
                <span className="icon "><ImBin /></span>
            </button>

        </div>
    )
}

export default ListControl