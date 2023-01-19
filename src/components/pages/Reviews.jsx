import { ReviewsApp } from 'services/FilmsApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function ApiReviews() {
      setIsLoading(true);
      await ReviewsApp(id)
        .then(setReviews)
        .catch(error => {
          console.log(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    ApiReviews();
  }, [id]);

  return (
    !isLoading &&
    reviews && (
      <ul>
        {reviews.length ? (
          reviews.map(({ author, id, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>No information about Reviews 😢</p>
        )}
      </ul>
    )
  );
};
export default Reviews;
