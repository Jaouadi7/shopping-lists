import ListTitle from "./content/ListTitle";
import ListControl from "./content/ListControl";
import ListDetails from "./content/ListDetails";

const List = ({ list }) => {
    return (
        <li className={`shopping-list_item mb-4 pb-3 ${list.isCompleted && 'completed'}`}>
            <div className="shopping-list_header is-flex is-justify-content-space-between is-align-items-baseline">
                <ListTitle id={list.id} name={list.name} />
                <ListControl isCompleted={list.isCompleted} />
            </div>
            <div className="shopping-list_details is-flex heading-7">
                <ListDetails total={list.total} date={list.date} />
            </div>
        </li>
    );
};

export default List;
