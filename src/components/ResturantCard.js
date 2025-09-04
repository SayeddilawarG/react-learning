import {CDN_URL} from "../Utils/constant";
//when we share data between components if invdividua values are shared then react witll club these values and create
//object called props
//so while accessing these values we have to use props.valueName
//example : resData = {resturant.info}  here resturant.info is an object so we can access its values using props.resData.valueName
const ResturantCard = (props) => {
  const {id,name,cuisines,avgRating,cloudinaryImageId} = props.resData;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Rating: <span>{avgRating}</span></h3>
    </div>
  );
};

export default ResturantCard;
