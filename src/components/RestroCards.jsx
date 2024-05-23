import { useContext } from "react";
import card from "../../assets/restro-card.jpg";
import { CARD_IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const Cards = (props) => {
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    locality,
    sla,
    cloudinaryImageId,
  } = props.cards.info;
  const { loggedUser } = useContext(UserContext);

  return (
    <div className="body">
      <div className="flex flex-col ml-[10px] gap-5 w-[350px] p-[7px] mb-2.5  border-solid hover:shadow-xl hover:border rounded-xl">
        <img
          className="card-image w-[350px] h-[210px] rounded-lg"
          src={CARD_IMG_URL + cloudinaryImageId}
        />
        <div className="details">
          <div className="title-star flex gap-2 justify-between">
            <h2 className="title">{name}</h2>
            <h2 className="stars">{avgRating}</h2>
          </div>
          <div className="menu-price flex gap-2 justify-between">
            <p className="menu text-ellipsis overflow-hidden w-[300px] whitespace-nowrap text-xl">
              {cuisines.join(", ")}
            </p>
            <h3 className=" whitespace-nowrap">{costForTwo}</h3>
          </div>
          <div className="menu-price flex gap-2 justify-between">
            <h4 className="area">{locality}</h4>
            <h4 className="distance">{sla.lastMileTravelString}</h4>
          </div>
          <div>
            <h3>Published by: {loggedUser}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withDiscount = (Cards) => {
  return (props) => {
    console.log("hello");
    const { aggregatedDiscountInfoV3 } = props.cards.info;
    const { header, subHeader } = aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute mt-3 ml-3 bg-black text-white bg-opacity-35">
          {header + subHeader}{" "}
        </label>
        <Cards {...props} />
      </div>
    );
  };
};

export default Cards;
