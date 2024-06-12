import React, { createContext, useState, useEffect } from "react";

export const CheckoutContext = createContext();

export const CheckoutContextWrapper = ({ children }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [discount, setDiscount] = useState({ label: "", amount: 0 });
  const [selectedGiftCards, setSelectedGiftCards] = useState([]);
  const [containerOpen, setContainerOpen] = useState(0);
  //eslint-disable-next-line
  const [cartItems, setCartItems] = useState([]); // Example cartItems state
  //eslint-disable-next-line
  const [quantity, setQuantity] = useState({}); // Example quantity state

  useEffect(() => {
    const savedPaymentMethod = localStorage.getItem("paymentMethod");
    if (savedPaymentMethod) {
      setPaymentMethod(savedPaymentMethod);
    }

    const clearLocalStorage = () => {
      localStorage.removeItem("paymentMethod");
    };

    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

// gift card section
  const handleGiftCardChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      let discountLabel = "";
      let discountAmount = 0;
    
      switch (value) {
        case "Swigato Gift Card":
          discountLabel = "Swigato Gift Card";
          discountAmount = 100;
          break;
        case "Swigato Rewards Redemption Card":
          discountLabel = "Swigato Rewards Redemption";
          discountAmount = 150;
          break;
        case "Swigato Gift & Reward card":
          discountLabel = "Swigato Gift & Reward card";
          discountAmount = 200;
          break;
        default:
          break;
      }
      setSelectedGiftCards([...selectedGiftCards, value]);
      setDiscount({ label: discountLabel, amount: discountAmount });
    } else {
      setSelectedGiftCards([]);
    setDiscount({ label: "", amount: 0 });
    }
  };


   const handlePaymentChange = (e) => {
   const selectedPayment = e.target.value;
    setPaymentMethod(selectedPayment);

 };


  const handleSaveAndContinue = () => {
    
    setContainerOpen(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContainerOpen(3);
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * quantity[item.id],
    0
  );

  const estimatedDelivery = 110;
  const today = new Date();
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = today
    .toLocaleDateString("en-IN", options)
    .toUpperCase();
  const finalTotal = totalAmount + estimatedDelivery - discount.amount;

  const values = {
    deliveryInfo,
    paymentMethod,
    containerOpen,
    setContainerOpen,
    handleDeliveryChange,
    handlePaymentChange,
    handleSaveAndContinue,
    handleSubmit,
    cartItems,
    quantity,
    totalAmount,
    estimatedDelivery,
    formattedDate,
    finalTotal,
    handleGiftCardChange,
    selectedGiftCards,
    discount
  };

  return (
    <CheckoutContext.Provider value={values}>
      {children}
    </CheckoutContext.Provider>
  );
};