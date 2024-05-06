
import { useParams } from 'react-router-dom';
import { useGetDetailsQuery } from '../../store/api/detailsApi';
import { Header } from '../../components/UI/Header/Header';
import { SCMainPage } from '../MainPage/MainPage.styled';

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error } = useGetDetailsQuery(id);

  console.log(data);

  return (
    <div className="DetailsPage">
      <Header />
          <div className="workFrame">
            {data && Array.isArray(data) && (
              data.map((details, index) => (
                <div className="workCard" key={details.id}>
                  <img src={details.photos.url} alt={`Details ${index}`} id={`workCard-${index}`} />
                  <div className="cardText">
                    <span>Price: {details.price}</span>
                    <p>ID: {details.id}</p>
                    <p>Purpose: {details.purpose}</p>
                    <p>Description: {details.description}</p>
                  </div>
                </div>
              ))
            )}
          
        </div>
     
    </div>
  );
};

export default DetailsPage;