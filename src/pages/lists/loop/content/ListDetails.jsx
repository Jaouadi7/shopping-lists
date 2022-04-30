
const ListDetails = ({ total, date }) => {
    return (
        <>
            <h4 className="shopping-list_total mr-4">Total: {total}DH</h4>
            <h4 className="shopping-list_date">Date: {date} </h4>
        </>
    )
}

export default ListDetails