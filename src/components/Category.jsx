import { FaStar } from "react-icons/fa6";
import { IMG_URL } from "../utils/constants";

const Category = (props) => {
  const { ItemCategory, showItems, setShowItems } = props;
  const handleClick = () => {
    setShowItems();
  }
  console.log(showItems);
  return (
    <div className="mt-2 flex flex-col items-start justify-center my-0 mx-auto w-7/12">
      <div className=" w-full h-[16px] custom-bg-line"></div>

      <div className=" flex flex-col w-full p-4">
        <div className="flex justify-between items-center w-full h-[73px]  text-xl cursor-pointer" onClick={handleClick}>
          <h1 className="font-bold">{ItemCategory?.card?.card?.title}</h1>
          <h1>^</h1>
        </div>
        {showItems && (
          <div className="recommendation">
            <div className="rec-cards flex flex-col">
              {ItemCategory?.card?.card?.itemCards?.map((rcCard) => {
                let price =
                  rcCard?.card?.info?.variantsV2?.variantGroups?.[0]
                    ?.variations?.[0]?.price;
                const name = rcCard?.card?.info?.name;
                let rating =
                  rcCard?.card?.info?.ratings?.aggregatedRating?.rating;
                price = price ? price : rcCard?.card?.info?.price;

                console.log("hello 1", price);
                return (
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between w-full items-center">
                      <div
                        className="rec-cards mt-4 "
                        key={rcCard.card.info.id}
                      >
                        <h1 className="title font-bold">{name}</h1>
                        <h2 className="price">₹ {price}</h2>
                        {rating !== undefined && (
                          <div className="flex items-center mt-3 text-[#19A672] gap-2">
                            <FaStar />
                            <h2 className="rating">{rating}</h2>
                          </div>
                        )}
                        <p className="mt-3 text-gray-600">
                          {rcCard.card.info.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 rounded-md mt-12 ">
                        <div className=" absolute">
                          <button className="p-3 mx-10 my-[100px] bg-white text-[#19A672] rounded-lg h-10 text-center border shadow-xl">
                            Add +
                          </button>
                        </div>
                        <img
                          className=" w-[156] h-[144] rounded-lg "
                          src={IMG_URL + rcCard.card.info.imageId}
                        ></img>
                      </div>
                    </div>
                    <hr className="w-full border-t border-gray-300 mt-7 mb-4" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
