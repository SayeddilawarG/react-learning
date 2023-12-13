import RestCards from "./RestCards";

const Body = (props) => {
    const {resList} = props;
    return (
      <div className="res-container">
        <div className="search"></div>
        <div className="res-cards-all">
          {resList.map((resturant)=><RestCards resData = {resturant} key={resturant.info.id}/>)}
        </div>
      </div>
    );
  };

export default Body;