// import './lists.scss';
import List from "./loop/List"; // LOOP SHOPPING LIST ITEM
import Stats from "../../components/Stats/Stats";

const Lists = ({ lists, setLists }) => {
  return (
    <>
      <ul className="shopping-lists lists">
        <div className="container">
          <div className="p-4">
            {lists.map((list, index) => <List key={index} list={list} setLists={setLists} lists={lists} />)}
          </div>
        </div>
      </ul>
      <Stats />
    </>

  )
}

export default Lists