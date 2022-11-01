import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const response = await axios(url);
      if (response.data.meals) {
        setMeals(response.data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);
  return (
    <AppContext.Provider value={{ loading, meals }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
