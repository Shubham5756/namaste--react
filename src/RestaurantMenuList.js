import React from "react";

const RestaurantMenuList = ({ items }) => {
  console.log("items");
  console.log(items);
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
              <button className="bg-black text-white rounded-md px-[5px] cursor-pointer">
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
