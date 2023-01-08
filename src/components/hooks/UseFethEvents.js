import { fetchEventById } from 'services/FilmsApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const FilmsPage = () => {
  // const [films, setFilms] = useState(null);
  // const { id } = useParams;
  const { id } = useParams;
  const product = fetchEventById(id);
  return (
    <main>
      <img src="" alt="" />
      <div>
        <h2>Product</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
  // useEffect(() => {
  //   fetchEventById(id).then(setFilms);
  // }, [id]);
  // return films;
};

// import { getProductById } from '../fakeAPI';

// export const ProductDetails = () => {
//   const { id } = useParams();
//   const product = getProductById(id);
//   return (
// <main>
//   <img src="https://via.placeholder.com/960x240" alt="" />
//   <div>
//     <h2>
//       Product - {product.name} - {id}
//     </h2>
//     <p>
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
//       sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
//       a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
//       atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
//       elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
//       praesentium ipsum quos unde voluptatum?
//     </p>
//   </div>
// </main>
//   );
// };
