
const Header = ({ name }) => {
    return (
        <header>
            <div className="container">
                <div className="pt-5 pb-5 pr-4 pl-4">
                    <h1 className='primary-title heading-4 title'>{name}</h1>
                </div>
            </div>
        </header>
    )
}

export default Header