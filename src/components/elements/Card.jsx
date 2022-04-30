
const Card = ({ title, total, classes }) => {
    return (
        <div className={`${classes} box is-shadowless p-3 mb-3`}>
            <h3 className="has-text-weight-semibold">{title}</h3>
            <h4>{total}</h4>
        </div>
    )
}

export default Card