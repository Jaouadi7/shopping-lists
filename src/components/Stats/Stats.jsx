import './stats.scss';

const Stats = () => {
  return (
    <div className='shopping-lists_stats'>
        <h2 className='title app-title mb-3'>You Spent:</h2>
        <div className="stats-details is-flex is-justify-content-space-between">
            <div className="stats-item today box is-shadowless p-3 mb-3">
                <h3>Today</h3>
                <h4>1040,00 DH</h4>
            </div>
            <div className="stats-item yesterday  box is-shadowless p-3 mb-3">
                <h3>Yesterday</h3>
                <h4>1040,00 DH</h4>
            </div>
            <div className="stats-item week  box is-shadowless p-3 mb-3">
                <h3>This Week</h3>
                <h4>1040,00 DH</h4>
            </div>
            <div className="stats-item month  box is-shadowless p-3 mb-3">
                <h3>This Month</h3>
                <h4>1040,00 DH</h4>
            </div>
        </div>
    </div>
  )
}

export default Stats