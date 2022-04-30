import { ImCheckmark } from "react-icons/im";

const ListControl = () => {
    return (
        <div>
            <div className="shopping-list_control">
                <span className="icon isCompleted">
                    <ImCheckmark />
                </span>
            </div>
        </div>
    )
}

export default ListControl