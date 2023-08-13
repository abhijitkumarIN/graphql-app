import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_ITEMS = gql`
query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

function ItemList() {
  const { loading, error, data } = useQuery(GET_ITEMS);
// loading as boolean 
  if (loading) return <p>Loading...</p>;
// if have error that 'll get populated as message 
  if (error) return <p>Error: {error.message}</p>;

  console.log(data , " data ")
  return (
    <div>
  {JSON.stringify(data)}
    </div>
  );
}

export default ItemList;