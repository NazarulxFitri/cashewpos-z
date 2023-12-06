import { ref, set } from "firebase/database";
import db from "../../services/firebaseApp";
import useGetTransaction from "./useGetTransaction";
import { recentActivity } from "@/state/atom";
import { useRecoilState } from "recoil";

export default function usePostAddTransaction() {
  const { data: transaction } = useGetTransaction();
  const [message, setMessage] = useRecoilState(recentActivity);

  const id = !transaction?.length ? 0 : transaction?.length;

  const action = async (
    date: string,
    time: string,
    paymentType: string,
    subtotal: number,
    amountPaid: number,
    balance: string,
    itemAdded: any,
    additionalDiscount: number,
    remark: string,
    total: number
  ) => {
    try {
      set(ref(db, "transaction/" + (1000000000 + id)), {
        id: `trx-` + (1000000000 + id),
        date,
        time,
        paymentType,
        subtotal,
        amountPaid,
        balance,
        itemAdded,
        additionalDiscount,
        remark,
        total
      });
      setMessage(`trx-` + (1000000000 + id))
    } catch (err) {}
  };

  return {
    action,
  };
}
