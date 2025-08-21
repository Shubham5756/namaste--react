const Restorant = (props) => {
  const { resData } = props;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg h-[570px] hover:bg-gray-300">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" +
          resData.info.cloudinaryImageId
        }
        alt=""
      />
      <h3 className="font-bold py-3 text-lg">{resData.info.name}</h3>
      <h4 className="font-bold my-1">Cuisenes - {resData.info.cuisines.join(" , ")}</h4>
      <h4 className="font-medium my-1">average rating - {resData.info.avgRating}</h4>
      <h4 className="font-medium my-1">Price - {resData.info.costForTwo}</h4>
      <h5 className="font-medium my-1">delivery time - {resData.info.sla.deliveryTime} Minutes </h5>
    </div>
  );
};

export const withOfferRestaurant = (Restorant) => {
  return (props) => {
    return (
      <div>
        <label htmlFor="">offer</label>
        <Restorant {...props} />
      </div>
    );
  };
};

export default Restorant;
