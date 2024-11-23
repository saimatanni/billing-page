import React from "react";

const BillingTable = ({ items, handleDeleteItem }) => {
  return (
    <div className="overflow-x-auto rounded-md shadow-md border border-gray-200">
      <table className="w-full bg-white rounded-md">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="py-3 px-4 text-left font-medium">Item Name</th>
            <th className="py-3 px-4 text-left font-medium">Quantity</th>
            <th className="py-3 px-4 text-left font-medium">Price</th>
            <th className="py-3 px-4 text-left font-medium">Total</th>
            <th className="py-3 px-4 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-gray-200 transition`}
              >
                <td className="py-3 px-4 text-gray-800">{item.itemName}</td>
                <td className="py-3 px-4 text-gray-700">{item.quantity}</td>
                <td className="py-3 px-4 text-gray-700">${item.price.toFixed(2)}</td>
                <td className="py-3 px-4 text-gray-700">${item.total.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-4 text-center text-gray-500">
                No items added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BillingTable;
