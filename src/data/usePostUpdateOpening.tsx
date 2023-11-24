import db from "../../services/firebaseApp";

import { ref, update } from "firebase/database";

export default function usePostUpdateOpening() {
  const action = async (date: string, totalSale: number, amountOnHand: number) => {
    const strippedDate = date.replaceAll("/", "");

    try {
      update(ref(db, `zreporting/${strippedDate}`), {
        totalSale: totalSale,
        amountOnHand: amountOnHand,
        hasOpened: true,
        hasClosed: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    action,
  };
}
