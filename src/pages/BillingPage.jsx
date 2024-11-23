import React, { useState, useEffect } from "react";
import BillingForm from "../components/BillingForm";
import BillingTable from "../components/BillingTable";
import TotalAmount from "../components/TotalAmount";

const BillingPage = () => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("billItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("billItems", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (data) => {
    const newItem = {
      id: Date.now(),
      itemName: data.itemName,
      quantity: parseInt(data.quantity),
      price: parseFloat(data.price),
      total: parseInt(data.quantity) * parseFloat(data.price),
    };

    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setItems([]);
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.total, 0).toFixed(2);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Billing Page
        </h2>
        <BillingForm handleAddItem={handleAddItem} />
        <BillingTable items={items} handleDeleteItem={handleDeleteItem} />
        {items.length > 0 && (
          <TotalAmount total={calculateTotal()} handleClearAll={handleClearAll} />
        )}
      </div>
    </div>
  );
};

export default BillingPage;
