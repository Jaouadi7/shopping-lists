import Card from "../elements/Card" // CARD COMPONENT

const Stats = ({ lists }) => {

    const completedLists = lists.filter(ls => ls.isCompleted === true);

    let totalSpent = 0;

    completedLists.forEach(ls => {
        return totalSpent += Number(ls.total)
    });


    return (
        <div className='shopping-lists_stats'>
            <div className="container">
                <div className="p-4">
                    <h2 className='title primary-title heading-4 mb-4'>You Spent:</h2>
                    <div className="stats-details is-flex is-justify-content-space-between is-flex-wrap-wrap">
                        <Card classes="today stats-item" title='Today' total={`${totalSpent} DH`} />
                        <Card classes="yesterday stats-item" title='Yesterday' total='0 DH' />
                        <Card classes="week stats-item" title='This Week' total={`${totalSpent} DH`} />
                        <Card classes="month stats-item" title='This Month' total={`${totalSpent} DH`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats