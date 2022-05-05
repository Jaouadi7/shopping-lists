import Card from "../elements/Card" // CARD COMPONENT

const Stats = () => {
    return (
        <div className='shopping-lists_stats'>
            <div className="container">
                <div className="p-4">
                    <h2 className='title primary-title heading-4 mb-4'>You Spent:</h2>
                    <div className="stats-details is-flex is-justify-content-space-between is-flex-wrap-wrap">
                        <Card classes="today stats-item" title='Today' total='0 DH' />
                        <Card classes="yesterday stats-item" title='Yesterday' total='0 DH' />
                        <Card classes="week stats-item" title='This Week' total='0 DH' />
                        <Card classes="month stats-item" title='This Month' total='0 DH' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats