import { ImCheckmark } from "react-icons/im";

const ListControl = ({ toggleIsBought }) => {
    return (
        <div>
            <div className="shopping-list_control">
                <span className="icon isCompleted" onClick={toggleIsBought}>
                    <ImCheckmark />
                </span>
            </div>
        </div>
    )
}

export default ListControl