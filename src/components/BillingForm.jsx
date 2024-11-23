import React from "react";
import { useForm } from "react-hook-form";

const BillingForm = ({ handleAddItem }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    handleAddItem(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row gap-4 mb-6"
    >
      {/* Item Name Input */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Item Name"
          {...register("itemName", { required: "Item Name is required" })}
          className={`w-full h-12 p-3 border rounded-md focus:outline-none focus:ring-2 ${
            errors.itemName ? "border-red-500 focus:ring-red-300" : "focus:ring-indigo-300"
          }`}
        />
        {errors.itemName && (
          <p className="text-red-500 text-xs mt-2">{errors.itemName.message}</p>
        )}
      </div>

      {/* Quantity Input */}
      <div className="flex-1">
        <input
          type="number"
          placeholder="Quantity"
          {...register("quantity", {
            required: "Quantity is required",
            min: { value: 1, message: "Quantity must be greater than zero" },
          })}
          className={`w-full h-12 p-3 border rounded-md focus:outline-none focus:ring-2 ${
            errors.quantity ? "border-red-500 focus:ring-red-300" : "focus:ring-indigo-300"
          }`}
        />
        {errors.quantity && (
          <p className="text-red-500 text-xs mt-2">{errors.quantity.message}</p>
        )}
      </div>

      {/* Price Input */}
      <div className="flex-1">
        <input
          type="number"
          placeholder="Price"
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be greater than zero" },
          })}
          className={`w-full h-12 p-3 border rounded-md focus:outline-none focus:ring-2 ${
            errors.price ? "border-red-500 focus:ring-red-300" : "focus:ring-indigo-300"
          }`}
        />
        {errors.price && (
          <p className="text-red-500 text-xs mt-2">{errors.price.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="h-12 px-6 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition flex items-center justify-center"
      >
        Add to Bill
      </button>
    </form>
  );
};

export default BillingForm;
