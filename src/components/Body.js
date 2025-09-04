import ResturantCard from "./ResturantCard";
import restList from "../Utils/mockdata";
const Body = () => {

  return (
    <div className="body">
      <div className="search-bar">
        <input type="search" placeholder="Search for restaurants or dishes" />
      </div>
      <div className="res-container">
        {restList.map((resturant)=>(
        <ResturantCard key={resturant.info.id} resData = {resturant.info}/>
        ))}
      </div>
    </div>
  );
};

export default Body;