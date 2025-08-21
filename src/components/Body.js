import { useState } from "react";
import Restorant, { withOfferRestaurant } from "./Restorant";
import { userContext } from "./utils.js/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "./utils.js/useOnlineStatus";
import { useContext } from "react";
import useBody from "./utils.js/useBody";

const Body = () => {
  const [search, setSearch] = useState("");
  const { state, update, setUpdate } = useBody();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h1 className='text-4xl font-bold m-4'>check your internet connection. you are currently offline</h1>;
  }
  //console.log(state)

  const OfferRestorant = withOfferRestaurant(<Restorant />);

  const { loggedInUser, setUserName } = useContext(userContext);

  return state.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-panel">
        <input
          className="m-4 border border-solid border-black "
          type="text"
          placeholder="serch here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="px-4 bg-green-200 m-2 rounded-sm hover:cursor-pointer"
          onClick={() => {
            const filteredData = state.filter((res) =>
              res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setUpdate(filteredData);
          }}
        >
          search
        </button>
        <input
          type="text"
          className="border border-black"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap">
        {update.map((resto) => (
          <Link
            key={resto.info.id}
            to={`${resto.info.areaName}/${resto.info.id}`}
          >
            <Restorant resData={resto} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
