import  CARD_IMAGE_URL from "../utils/constants";
const RestCards = (props) => {
    const {resData} = props;
    const {name,avgRating,locality,costForTwo,cloudinaryImageId} = resData.info;
    const {deliveryTime} = resData.info.sla;
    return (
      <>
        <div className="card-details">
          <img
            className="card-img"
            src={CARD_IMAGE_URL+cloudinaryImageId}
          />
          <p className="card-title">{name}</p>
          <p className="card-message">
            {locality}
          </p>
          <div className="delivery-details">
            <ul>
              <li>{avgRating}</li>
              <li>{deliveryTime}</li>
              <li>{costForTwo}</li>
            </ul>
          </div>
          <h3>Free Delivery</h3>
        </div>
      </>
    );
  };

  export default RestCards;
  