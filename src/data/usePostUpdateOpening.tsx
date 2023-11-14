import db from "../../services/firebaseApp";

import { ref, update } from "firebase/database";

export default function usePostUpdateOpening() {
  const action = async (date: string, totalSale: number, amountOnHand: number) => {
    const strippedDate = date.replaceAll("/", "");

    try {
      update(ref(db, `zreporting/${strippedDate}`), {
        isOpening: false,
        totalSale: totalSale,
        amountOnHand: amountOnHand,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    action,
  };
}
