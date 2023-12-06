import { ref, get, child } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import db from "../../services/firebaseApp";

export interface GetTransactionConfig {
  id: string;
  amountPaid: string;
  balance: string;
  date: string;
  time: string;
  total: number;
  additionalDiscount: number;
  subtotal: number;
  paymentType: string;
  remark?: string;
  itemAdded: {
    category: string;
    color: string;
    name: string;
    price: number;
    qty: number;
    sku: string;
  }[];
}

export default function useGetTransaction() {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null);

  const getValue = async () => {
    try {
      const root = ref(db);
      const dbGet = await get(child(root, "transaction"));
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
  const data: GetTransactionConfig[] = [];

  for (let key in dataObj as any) {
    data.push(dataObj?.[key]!);
  }

  return { data, isLoading };
}
