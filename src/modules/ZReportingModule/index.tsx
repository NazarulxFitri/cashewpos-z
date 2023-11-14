import { UniTypography } from "@/components";
import { Box } from "@mui/material";
import Opening from "./Opening";
import useGetOpening from "@/data/useGetOpening";
import useGetTransaction from "@/data/useGetTransaction";
import usePostUpdateOpening from "@/data/usePostUpdateOpening";

const ZReportingModule = () => {
  const { data } = useGetOpening();
  const { data: transaction } = useGetTransaction();
  const date = new Date().toLocaleDateString();
  const openingData = data?.find((i) => i.date === date);
  const transactionData = transaction?.filter((i) => i.date === date);
  const initialCash = openingData?.cashOnHand;

  let totalSale = 0;
  transactionData?.forEach((i) => (totalSale += +i.totalAmount));

  const { action } = usePostUpdateOpening();

  const handleClick = async () => {
    await action(date, totalSale, +totalSale + +initialCash!);
    window?.location.reload();
  };

  return (
    <Box>
      <UniTypography variant="h1" text="Z-reporting" />
      <Box>{!!openingData?.isOpening && <Opening />}</Box>
      {!openingData?.isOpening && (
        <Box>
          <Box>
            <UniTypography
              variant="body1"
              text={`Initial cash : ${initialCash}`}
            />
            <UniTypography variant="body1" text={`Total sale : ${totalSale}`} />
          </Box>
          <Box onClick={handleClick}>Closing</Box>
        </Box>
      )}
    </Box>
  );
};

export default ZReportingModule;
