import { useEffect, useState } from "react";
import Restorant from "./Restorant";
import { restoList } from "./utils.js/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [state, setState] = useState([]);
  const[update , setUpdate] = useState([])

   const[search , setSearch]= useState("")

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5121025&lng=73.8477608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    

    setState(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setUpdate(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

//console.log({search})

  return state.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-panel">
        <input type="text" placeholder="serch here" value={search} onChange={(e)=> {setSearch(e.target.value)}}/>
        <button onClick={() => {
        const filteredData =  state.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()))
        setUpdate(filteredData)
        }}>search</button>
         <button
          onClick={() => {
            state = state.filter((res) => res.info.avgRating > 4.5);

            setState(state);
          }}
        >
          top restaurants
        </button>
      </div>
     
      <div className="resto-carts">
        {update.map((resto) => (
          <Restorant key={resto.info.id} resData={resto} />
        ))}
      </div>
    </div>
  );
};

export default Body;
