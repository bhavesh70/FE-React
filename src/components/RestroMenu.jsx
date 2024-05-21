import { useEffect, useState } from "react";
import { IMG_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestroMenu from "../utils/customHooks/useRestroMenu";
import { FaStar } from "react-icons/fa6";
import Category from "./category";

const RestroMenu = () => {
  const { resId } = useParams();
  const menuDetails = useRestroMenu(resId);

  const [showItems, setShowItems] = useState(0);
  console.log(
    "hello",
    menuDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
      .itemCards
  );

  const categories = menuDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cat => cat?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

  console.log("crttgrryy   ...", categories);
  console.log("hullu", menuDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  if (menuDetails.length === 0) {
    return <Shimmer />;
  } else {
    const Restaurant = menuDetails.filter(menu => menu?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant')
    console.log("filtwrd restro", Restaurant[0]);
    return (
      <div>
        <div className="menu-page flex flex-col items-start mx-auto my-0 w-7/12 p-5 gap-3 custom-gradient rounded-lg">
          <h1 className="title text-2xl font-bold -ml-3">
            {Restaurant[0]?.card?.card?.info?.name}
          </h1>
          <div className="flex flex-col border rounded-xl w-[100%] p-4 gap-3 bg-white">
            <div className="rating-price flex flex-row gap-4 font-semibold">
              <h2 className="rating ">
                {Restaurant[0]?.card?.card?.info?.avgRating} - (
                {Restaurant[0]?.card?.card?.info?.totalRatingsString})
              </h2>
              <h2 className="price">
                ₹ {Restaurant[0]?.card?.card?.info?.costForTwo / 100} for two
              </h2>
            </div>
            <div className="flex flex-row gap-1 ml-4 items-center">
              <div className=" flex flex-col items-center">
                <div className="w-[7px] h-[7px] rounded-[50px] custom-bg"></div>
                <div className="w-[1px] h-[23px] custom-bg"></div>
                <div className="w-[7px] h-[7px] rounded-[50px] custom-bg"></div>
              </div>
              <div className="time-location flex flex-col ml-4 w-full text-sm">
                <h3 className="location">
                  <span className=" font-semibold">Outlet</span>{" "}
                  <span className="ml-4 text-gray-600">
                    {Restaurant[0]?.card?.card?.info?.areaName}
                  </span>
                </h3>
                <h3 className="duration font-semibold">
                  {Restaurant[0]?.card?.card?.info?.sla.slaString}
                </h3>
              </div>
            </div>

            <hr className="w-full border-t border-gray-300 mt-1" />
            <h2 className="distance text-gray-600">
              {Restaurant[0]?.card?.card?.info?.feeDetails?.message.replace(
                /<[^>]+>/g,
                ""
              )}
            </h2>
          </div>
        </div>

        <div className="mt-32">
            {categories.map((cat, index)=> <Category ItemCategory = {cat} showItems = {index === showItems ? true : false} setShowItems= {()=>setShowItems(index)} />)}
        </div>
      </div>
    );
  }
};

export default RestroMenu;

{
  /* <div className="recommendation">
<div className="rec-cards">
  {menuDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
    (rcCard) => {
      let price =
        rcCard?.card?.info?.variantsV2?.variantGroups?.[0]
          ?.variations?.[0]?.price;
      const name = rcCard?.card?.info?.name;
      let rating =
        rcCard?.card?.info?.ratings?.aggregatedRating?.rating;
      price = price ? price : rcCard?.card?.info?.price;

      console.log("hello 1", price);
      return (
        <div className="rec-cards" key={rcCard.card.info.id}>
          <h1 className="title">{name}</h1>
          <h2 className="price">{price}</h2>
          {rating !== undefined && (
            <h2 className="rating">{rating}</h2>
          )}
        </div>
      );
    }
  )}
</div>
</div> */
}
