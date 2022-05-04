
const ListDetails = ({ total, date, items }) => {
    return (
        <>
            <h4 className="shopping-list_date  mr-3">Date: {date}</h4>
            <h4 className="shopping-list_total mr-3">Total: {total} DH</h4>
            <h4 className="shopping-list_items">Items: {items}</h4>
        </>
    )
}

export default ListDetails