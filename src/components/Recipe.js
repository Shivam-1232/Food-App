import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../context/FoodContext";
import { IoCloseSharp } from "react-icons/io5";

const Recipe = () => {
  const { name } = useParams();
  const {setShowModal} = useContext(FoodContext);

  return (
    <div className="recipe-page">
      {/* Home button to navigate back to the home page */}
      <IoCloseSharp onClick={()=>setShowModal(false)} className="close-icon"/>
      <h2>Recipe Details of {name}</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PK0czgdbHoY?si=Y8QPEHsLOjbRWnlT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="recipe-details">
        <h2>Ingredients to used in this recipe</h2>
        <ol>
          <li>1 small pizza crust</li>
          <li>1/2 cup tomato sauce</li>
          <li>1/2 cup shredded mozzarella cheese</li>
          <li>1/4 cup grated Parmesan cheese</li>
          <li>1 egg</li>
          <li>Salt and pepper to taste</li>
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
