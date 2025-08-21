import { useState, useEffect } from "react";
import { resturantUrl } from "./constants";

const useResData = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    resMenu();
  }, []);

  const resMenu = async () => {
    const data1 = await fetch(
      resturantUrl + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data1.json();
    console.log(json);
    setResData(json);
  };

  return resData;
};
export default useResData;
