const Header = () => {
  const headingStyle = {
    title: {
      color: "white",
      margin: "0px 5px",
    },
  };
  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.pinimg.com/736x/81/68/a6/8168a6d3ca80a355fdbadb18b89a960a.jpg" />
      </div>
      <div style={headingStyle.title}>
        <h1>Welcome to Hello Resturant</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
