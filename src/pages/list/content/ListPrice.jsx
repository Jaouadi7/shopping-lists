const ListPrice = ({ price }) => {
    return (
        <div className="shopping-list_details is-flex">
            <h4 className='shopping-list_total mr-4 heading-7'>Total: {price} DH</h4>
        </div>
    )
}

export default ListPrice