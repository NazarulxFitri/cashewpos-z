import db from "../../services/firebaseApp";

import { ref, update } from "firebase/database";
import useGetProduct from "./useGetProduct";

export default function usePostUpdateProduct() {
  const { data } = useGetProduct();

  const action = async (sku: string, qty: number) => {
    const checkedSku = data.find((i) => i.sku === sku);
    const skuQty = checkedSku?.qty! + qty;

    try {
      update(ref(db, `product/${sku}`), {
        qty: skuQty,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    action,
  };
}
