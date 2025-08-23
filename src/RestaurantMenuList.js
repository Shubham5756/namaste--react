import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./components/utils.js/CartSlice";
const RestaurantMenuList = ({ items }) => {
  console.log("items");
  console.log(items);
  const Dispatch = useDispatch();
  const handleAddItem = (data) => {
    Dispatch(addItem(data));
  };

  return (
    <div>
      <div>
        {items.map((data) => (
          <div
            key={data.categoryId}
            className="p-2 m-2 border-black-200  border-b-1 "
          >
            <div className="flex justify-between">
              <span>{data.title}</span>
              <button
                className="bg-black text-white rounded-md px-[5px] cursor-pointer"
                onClick={() => handleAddItem(data)}
              >
                add+
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuList;
