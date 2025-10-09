import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [list,setList] = useState([]);

  useEffect(()=>{
    //API call
    GetData();
  },[])

  const GetData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1570854&lng=72.9966711&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    .then(async res=>{
      const jsonForm = await res.json();
      setList(jsonForm.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }).catch(err=>{
      console.log(err);
    })
  }
  
  return list.length ===0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
           <input type="search" placeholder="Search for restaurants or dishes" />
           <button className="filter-btn" onClick={()=>{
            const filteredList = list.filter(res=>res.info.avgRating>4);
            setList(filteredList);
           }}>Top Rated</button>
      </div>
      <div className="res-container">
        {list.map((resturant)=>(
        <ResturantCard key={resturant.info.id} resData = {resturant.info}/>
        ))}
      </div>
    </div>
  );
};

export default Body;