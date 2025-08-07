

const Restorant = (props) => {
  const {resData} = props
  return (
    <div className="resto-panel">
      <img
        src={
        "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" + resData.info.cloudinaryImageId}
        alt=""
      />
      <h3>{resData.info.name}</h3>
      <h4>Cuisenes - {resData.info.cuisines.join(" , ")}</h4>
      <h4>average rating - {resData.info.avgRating}</h4>
      <h4>Price - {resData.info.costForTwo}</h4>
      <h5>delivery time - {resData.info.sla.deliveryTime} Minutes </h5>
    </div>
  );
};

export default Restorant