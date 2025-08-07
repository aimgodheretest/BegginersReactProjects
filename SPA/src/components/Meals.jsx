import { useEffect, useState } from "react";
import axios from "axios";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setMeals(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mealList = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section
        key={idMeal}
        className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
      >
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <section className="text-center">
          <p className="text-lg font-semibold">{strMeal}</p>
          <span className="text-gray-400 text-sm">ID: {idMeal}</span>
        </section>
      </section>
    );
  });

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        Seafood Meals
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mealList}
      </div>
    </div>
  );
};

export default Meals;
