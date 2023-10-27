import { ref, set } from "firebase/database";
import db from "../../services/firebaseApp";
import { useState } from "react";

export default function usePostAddProduct() {
  const action = async (
    sku: string,
    name: string,
    price: number,
    category: string,
    color: string,
    image: string
  ) => {
    try {
      set(ref(db, "product/" + sku), {
        sku,
        name,
        price,
        category,
        color,
        image,
        qty: 0,
      });
    } catch (err) {}
  };

  return {
    action,
  };
}
