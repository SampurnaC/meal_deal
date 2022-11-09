import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect, useState } from 'react';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMeals = async (url) => {
    console.log(url);
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
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);
  return (
    <AppContext.Provider value={{ loading, meals, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
