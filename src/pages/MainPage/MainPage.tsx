
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { Header } from "../../components/UI/Header/Header";
import { useGetPropertiesQuery } from "../../store/api/userApi";
import { SCMainPage } from "./MainPage.styled";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const {data, error} = useGetPropertiesQuery('5002,6020')

  // if (data) {
    console.log(data);
    
  // }
  // if (error) {
  //   console.log(error);
    
  // }

  // const home = data.hits;
  
  return (
    <div className="MainPage">
      <Header />
      <SCMainPage>
        
        <div className="MainPageFrame">
          <div className="workFrame">
            {data && data.hits.map((property, index) => (
              <div className="workCard" key={index}>
                <Link to={`/details/${property.id}`}>
                <img src={property.coverPhoto.url} alt={`Property ${index}`} id={`workCard-${index}`} />
                <div className="cardText">
                  <span>Title: {property.title}</span>
                  <p>ID: {property.id}</p>
                  <span>Price: {property.price}</span>
                  {/* <p>{property.rooms}</p> */}
                  {/* <p>{property.area}</p> */}
                </div>
                </Link>{" "}
              </div>
            ))}
          </div>
        </div>
        
      </SCMainPage>
    </div>
  );
};

export default MainPage;