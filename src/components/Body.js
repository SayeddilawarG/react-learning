import { useEffect, useState } from "react";
import RestCards from "./RestCards";
import ShimmerUI from "./ShimmerUI";

const Body = (props) => {
  const { resList } = props;
  const [reslistUpdated, setResListUpdated] = useState([]);
  const [filteredData,setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1570854&lng=72.9966711&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setResListUpdated(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // if(reslistUpdated.length===0){
  //   return <ShimmerUI />
  // }

  return reslistUpdated.length === 0 ? (
    <ShimmerUI />
  ) : (
    
    <div className="res-container">
      <div className="Filter">
        <div className="Search">
          <input type="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button onClick={()=>{
            let filteredRes = reslistUpdated.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRes(filteredRes);
          }}>Search</button>
          
        </div>
        <button
        className="filter-btn"
          type="button"
          onClick={() => {
            const filteredData = resList.filter(
              (list) => list.info.avgRating > 4.5
            );
            setFilteredRes(filteredData);
          }}
        >
          Top Rated Resturants
        </button>
      </div>

      <div className="res-cards-all">
        {filteredData.map((resturant) => (
          <RestCards resData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
