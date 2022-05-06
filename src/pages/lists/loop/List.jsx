import ListTitle from "./content/ListTitle";
import ListControl from "./content/ListControl";
import ListDetails from "./content/ListDetails";
import { useEffect } from "react";

const List = ({ list, lists, setLists }) => {

    // CALC ITEM TOTAL
    const getItemTotal = list.items.map(item => {
        let total = item.price * item.quantity;
        return total;
    });

    // CALC LIST TOTAL
    let getTotals = 0;
    getItemTotal.forEach((total) => getTotals += total)

    // UPDATE LIST TOTALS
    useEffect(() => {
        setLists(lists.map(ls => ls.id === list.id ? { ...ls, total: getTotals } : ls))
    }, [])

    return (
        <li className={`shopping-list_item mb-4 pb-3 ${list.isCompleted && 'completed'}`}>
            <div className="shopping-list_header is-flex is-justify-content-space-between is-align-items-baseline">
                <ListTitle id={list.id} name={list.name} />
                <ListControl list={list} lists={lists} setLists={setLists} />
            </div>
            <div className="shopping-list_details is-flex heading-7">
                <ListDetails items={list.items.length} total={list.total} date={list.date} />
            </div>
        </li>
    );
};

export default List;
