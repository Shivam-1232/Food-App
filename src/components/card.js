import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { FoodContext } from "../context/FoodContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const customStyles = {
//   content: {
//   top: '120%',
//   left: '50%',
//   right: 'auto',
//   bottom: 'auto',
//   marginRight: '-50%',
//   transform: 'translate(-50%, -50%)',
//   },
// };
// const Card = () => {
//     const {displayFood}= useContext(FoodContext)
//       return (
//     <div className="food-container">
//     {displayFood.map(({ id, img, name, desc, price, rating }) => (
//       <div key={id} className="card">
//         <img src={img} alt="" className="food-image" />
//         <div className="details">
//           <h2>{name}</h2>
//           <span className="price">₹{price}</span>
//         </div>
//         <p className="description">{desc.slice(0, 50)}...</p>
//         <div className="rating-container">
//           <span className="rating">
//             <AiFillStar className="star" />
//             {rating}
//           </span>
//           <button className="add-to-cart">Go to Recipe</button>
//         </div>
//       </div>
//     ))}
//   </div>

//   )
// }

// export default Card
const Card = () => {
  const { displayFood, addToCart, setShowModal, setRecipeItems } =
    useContext(FoodContext);

  const handleClick = (name, desc) => {
    setRecipeItems({
      name,
      desc,
    });
    setShowModal(true);
  };

  return (
    <>
      <div className="food-container">
        {displayFood.map(({ id, img, name, desc, price, rating }) => (
          <div key={id} className="card">
            <div className="container">
              <img src={img} alt={name} className="food-image" />
            </div>
            <div className="content">
              <div className="heading-details">
                <h2>{name}</h2>
                <div className="price-rating">
                  <h3 className="price">₹{price}</h3>
                  <span className="rating">
                    <AiFillStar className="star" />
                    {rating}
                  </span>
                </div>
              </div>
              <p className="description">{desc.slice(0, 50)}...</p>
              <div className="button-controller">
                <button
                  className="add-to-cart"
                  onClick={() => handleClick(name, desc)}
                >
                  Go to Recipe
                </button>
                <button
                  className="add-to-cart"
                  onClick={() => {
                    addToCart({ id, img, name, desc, price, rating });
                    toast.success(`${name} added to cart!`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
