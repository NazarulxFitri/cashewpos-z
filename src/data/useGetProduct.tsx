import { ref, get, child } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import db from "../../services/firebaseApp";

export interface GetProductConfig {
  category: string;
  color: string;
  name: string;
  price: number;
  size: string;
  sku: string;
  qty: number;
}

export default function useGetProduct() {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null);

  const getValue = async () => {
    try {
      const root = ref(db);
      const dbGet = await get(child(root, "product"));
      const dbValue = dbGet.val();
      snapshot.current = dbValue;
    } catch (getError) {
      // @ts-ignore
      error.current = getError.message;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getValue();
  }, [snapshot]);

  const dataObj = snapshot.current;
  const data: GetProductConfig[] = [];

  for (let key in dataObj as any) {
    data.push(dataObj?.[key]!);
  }

  return { data, isLoading };
}
