import { ref, set } from "firebase/database";
import db from "../../services/firebaseApp";

export default function usePostAddOpening() {
  const action = async (date: string, cashOnHand: number) => {
    const strippedDate = date.replaceAll("/", "");
    try {
      set(ref(db, "zreporting/" + strippedDate), {
        date: date,
        cashOnHand: cashOnHand,
        hasOpened: true,
        hasClosed: false,
      });
    } catch (err) {}
  };

  return {
    action,
  };
}
