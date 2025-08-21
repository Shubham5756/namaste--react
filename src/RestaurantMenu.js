import { useState } from "react";

import Shimmer from "./components/Shimmer";
import { useParams } from "react-router";
import useResData from "./components/utils.js/useResData";
import useOnlineStatus from "./components/utils.js/useOnlineStatus";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestorantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const resData = useResData(resId);

  if (resData === null) return <Shimmer />;

  const { itemCards } =
    resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  const { name, cuisines, costForTwo } =
    resData?.data?.cards[2]?.card?.card?.info;

  const categories =
    resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>

      <p className="text-2xl">{cuisines.join(",")}</p>

      <ul>
        {categories.map((category, index) => (
          <li key={category?.card?.card?.categoryId}>
            <RestaurantMenuCategory
              data={category?.card?.card}
              showIndex={index === showIndex && true}
              setShowIndex={() => setShowIndex(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestorantMenu;
