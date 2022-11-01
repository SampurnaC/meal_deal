import { useContext } from 'react';
import { AppContext } from '../context';
import { FiThumbsUp } from 'react-icons/fi';
const Meals = () => {
  const { loading, meals } = useContext(AppContext);
  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No items matched your search item. Please try again.</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            <img src={image} className="img" />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">
                <FiThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
