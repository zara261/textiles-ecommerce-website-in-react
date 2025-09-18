// frontend/src/components/Checkout.js
const handlePlaceOrder = async () => {
  const orderData = {
    customer_name: name,
    customer_email: email,
    product: selectedProduct,
    quantity,
    total_price
  };

  const res = await fetch("http://localhost/backend/add-order.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });

  const data = await res.json();
  if (data.success) {
    alert("Order placed successfully!");
  } else {
    alert("Failed to place order");
  }
};
