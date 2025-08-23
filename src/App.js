import React from "react";
import ReactDOM from "react-dom/client";

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

const Body = () => {
  const restList = [
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "1003414",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
        locality: "Chhindwara",
        areaName: "Chhindwara City",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        parentId: "721",
        avgRatingString: "4.3",
        totalRatingsString: "173",
        sla: {
          deliveryTime: 47,
          lastMileTravel: 13.1,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "13.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-24 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9c5ab7ec-876b-4e7d-8355-758bfd6d6b11",
      },
      cta: {
        link: "https://www.swiggy.com/city/chhindwara/pizza-hut-chhindwara-city-rest1003414",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "151649",
        name: "Hotel Sai Nath & Sai Restaurant",
        cloudinaryImageId: "vkhcohhmqfczycw9vsar",
        locality: "railway station",
        areaName: "Chhindwara Locality",
        costForTwo: "₹200 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts",
        ],
        avgRating: 4.2,
        veg: true,
        parentId: "101802",
        avgRatingString: "4.2",
        totalRatingsString: "1.0K+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 11.3,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "11.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-23 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹175 OFF",
          subHeader: "ABOVE ₹699",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9c5ab7ec-876b-4e7d-8355-758bfd6d6b11",
      },
      cta: {
        link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "234875",
        name: "Adil Hotel",
        cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
        locality: "Rautha Wada",
        areaName: "Chhindwara Locality",
        costForTwo: "₹150 for two",
        cuisines: ["Biryani", "Tandoor"],
        avgRating: 4.4,
        parentId: "27123",
        avgRatingString: "4.4",
        totalRatingsString: "1.3K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 11.5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "11.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-24 00:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9c5ab7ec-876b-4e7d-8355-758bfd6d6b11",
      },
      cta: {
        link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "150591",
        name: "Satkar Restaurant",
        cloudinaryImageId: "rvxp5xbniat84r6efku2",
        locality: "Sinchai Colony",
        areaName: "Satkar Chowk",
        costForTwo: "₹250 for two",
        cuisines: ["South Indian", "Indian", "Salads", "Desserts"],
        avgRating: 4.4,
        veg: true,
        parentId: "21553",
        avgRatingString: "4.4",
        totalRatingsString: "3.1K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 13.4,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "13.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-23 22:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!",
            },
            {
              imageId:
                "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId:
                      "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹129",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9c5ab7ec-876b-4e7d-8355-758bfd6d6b11",
      },
      cta: {
        link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "151515",
        name: "Gupta Bhojnalay",
        cloudinaryImageId: "jo9pdipf4elcuch8g55q",
        locality: "fulwara chowk",
        areaName: "Chhindwara Locality",
        costForTwo: "₹200 for two",
        cuisines: ["Fast Food", "Indian", "Beverages"],
        avgRating: 4.1,
        veg: true,
        parentId: "91635",
        avgRatingString: "4.1",
        totalRatingsString: "452",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 10.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "10.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-23 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹999",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9c5ab7ec-876b-4e7d-8355-758bfd6d6b11",
      },
      cta: {
        link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "774546",
        name: "Shree Naivedyam",
        cloudinaryImageId: "2274f59cb8efcfab1f446b195bcbda3b",
        locality: "Khajri Road",
        areaName: "Chhindwara City",
        costForTwo: "₹300 for two",
        cuisines: ["Chinese", "South Indian", "Pizzas", "Beverages"],
        avgRating: 4.2,
        veg: true,
        parentId: "428968",
        avgRatingString: "4.2",
        totalRatingsString: "121",
        sla: {
          deliveryTime: 59,
          lastMileTravel: 13.6,
          serviceability: "SERVICEABLE",
          slaString: "55-60 mins",
          lastMileTravelString: "13.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-23 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹40 OFF",
          subHeader: "ABOVE ₹399",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9c5ab7ec-876b-4e7d-8355-758bfd6d6b11",
      },
      cta: {
        link: "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "382152",
        name: "Shriji Namkeen",
        cloudinaryImageId: "wa8ek94fp9d97ru1tcyn",
        locality: "Palika Market",
        areaName: "Chhindwara City",
        costForTwo: "₹250 for two",
        cuisines: ["Snacks", "Beverages", "Desserts"],
        avgRating: 3.3,
        parentId: "187168",
        avgRatingString: "3.3",
        totalRatingsString: "61",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 11.1,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "11.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-23 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9c5ab7ec-876b-4e7d-8355-758bfd6d6b11",
      },
      cta: {
        link: "https://www.swiggy.com/city/chhindwara/shriji-namkeen-palika-market-chhindwara-city-rest382152",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "151518",
        name: "Bakery World",
        cloudinaryImageId: "mt2aggiscfl3yviatwng",
        locality: "Parasia Road",
        areaName: "Parasia Road",
        costForTwo: "₹250 for two",
        cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
        avgRating: 4.3,
        veg: true,
        parentId: "40363",
        avgRatingString: "4.3",
        totalRatingsString: "288",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 14.1,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "14.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-08-23 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-9c5ab7ec-876b-4e7d-8355-758bfd6d6b11",
      },
      cta: {
        link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
  ];
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

//when we share data between components if invdividua values are shared then react witll club these values and create
//object called props
//so while accessing these values we have to use props.valueName
//example : resData = {resturant.info}  here resturant.info is an object so we can access its values using props.resData.valueName
const ResturantCard = (props) => {
  const {id,name,cuisines,avgRating,cloudinaryImageId} = props.resData;
  return (
    <div className="res-card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Rating: <span>{avgRating}</span></h3>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
