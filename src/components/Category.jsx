import { FaStar } from "react-icons/fa6";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/reduxSlices/cartSlice";
import ItemList from "./ItemList";

const Category = (props) => {
  const { ItemCategory, showItems, setShowItems } = props;
  const handleClick = () => {
    setShowItems();
  };



  console.log(showItems);
  return (
    <div className="mt-2 flex flex-col items-start justify-center my-0 mx-auto w-7/12">
      <div className=" w-full h-[16px] custom-bg-line"></div>

      <div className=" flex flex-col w-full p-4">
        <div
          className="flex justify-between items-center w-full h-[73px]  text-xl cursor-pointer"
          onClick={handleClick}
        >
          <h1 className="font-bold">{ItemCategory?.card?.card?.title}</h1>
          {!showItems && <h1>^</h1>}
          {showItems && <h1>⌄</h1>}
        </div>
        {showItems && (
          <div className="recommendation">
            <div className="rec-cards flex flex-col">
              {ItemCategory?.card?.card?.itemCards?.map((rcCard) => (
                <ItemList rcCard={rcCard} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
