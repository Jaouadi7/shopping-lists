
const ListTitle = ({ name, quantity }) => {
    return (
        <div>
            <h2 className="shopping-list_heading heading-5">{name} ( x{quantity} )</h2>
        </div>
    )
}

export default ListTitle