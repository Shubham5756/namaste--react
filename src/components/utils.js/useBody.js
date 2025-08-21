import React from 'react'
import { useEffect, useState } from "react";
const useBody = () => {
      const [state, setState] = useState([]);
      const [update, setUpdate] = useState([]);

      useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5121025&lng=73.8477608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);

    setState(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setUpdate(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(state);
  };

  return{
    state ,update ,setUpdate
  }
}

export default useBody
