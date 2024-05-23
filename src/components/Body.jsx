import { useContext, useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Cards, { withDiscount } from "./RestroCards";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [ListOfRestro, RestroCardFilter] = useState([]);

  let [searchedRestro, FilteredRestro] = useState([]);

  const [searchData, searchFilter] = useState([]);

  const { setCustomContext } = useContext(UserContext);

  const UpdatedCard = withDiscount(Cards);

  useEffect(() => {
    getSwiggyData();
  }, []);

  // bundle splitting
  console.log("hello state");

  const getSwiggyData = async () => {
    const data = await fetch(SWIGGY_URL);
    const jsonData = await data.json();

    console.log(jsonData);
    RestroCardFilter(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    FilteredRestro(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return searchedRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center ml-2 justify-center">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => {
              searchFilter(e.target.value);
            }}
          />
          <button
            className="m-4 bg-gray-100 px-2 py-1 border border-solid rounded"
            onClick={() => {
              const Restro = ListOfRestro.filter((list) =>
                list.info.name.toLowerCase().includes(searchData.toLowerCase())
              );
              console.log(Restro);
              FilteredRestro(Restro);
            }}
          >
            search
          </button>
        </div>

        <button
          className="border border-solid rounded px-1 py-1 bg-gray-200"
          onClick={() => {
            ListOfRestro = ListOfRestro.filter(
              (list) => list.info.avgRating < 4.3
            );
            console.log(ListOfRestro);
            RestroCardFilter(ListOfRestro);
          }}
        >
          Top Rated Restro
        </button>

        <div className="contextChange">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => {
              setCustomContext(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="all-cards flex flex-row flex-wrap mx-auto my-0 overflow-hidden justify-center w-10/12 gap-5">
        {searchedRestro.map((card) => (
          <Link to={"/restro/" + card.info.id}>
            {card.info.aggregatedDiscountInfoV3 ? (
              <UpdatedCard key={card.info.id} cards={card} />
            ) : (
              <Cards key={card.info.id} cards={card} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
