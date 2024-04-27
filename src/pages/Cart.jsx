import React from "react";

const Cart = ({ counts }) => {

  console.log(counts);
  if (!counts) {
    return <div>Loading...</div>;
  }
  const totalCount = Object.values(counts).reduce((total, count) => total + count, 0);

  return (
    <div>
      <h2>Cart</h2>
      {totalCount === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Object.entries(counts).map(([productId, count]) => (
            <li key={productId}>
              Product ID: {productId} - Quantity: {count}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
