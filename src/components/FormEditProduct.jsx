import React, { useEffect, useState } from "react";
import InputNormal from "./inputs/InputNormal";
import InputSelect from "./inputs/InputSelect";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function FormEditProduct({ id }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const { name, price, category, quantity } = product;

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api-dashboard-app.vercel.app/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api-dashboard-app.vercel.app/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((response) => response.json());

    toast.success("Product updated");

    navigate("/dashboard");
  };

  const options = [
    "Electronics",
    "Clothing",
    "Books",
    "Beauty and Personal Care",
    "Toys and Games",
    "Health and Wellness",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputNormal
        type="text"
        name="name"
        label="Name of product"
        value={name}
        handleChange={(value) => setProduct({ ...product, name: value })}
      />
      <InputNormal
        type="number"
        name="price"
        label="Price of product"
        value={price}
        handleChange={(value) => setProduct({ ...product, price: value })}
      />
      <InputSelect
        value={category}
        handleChange={(value) => setProduct({ ...product, category: value })}
        name="Category"
        options={options}
      />
      <InputNormal
        type="number"
        name="quantity"
        label="Quantity"
        value={quantity}
        handleChange={(value) => setProduct({ ...product, quantity: value })}
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Update Product
        </button>
      </div>
    </form>
  );
}
