import { ReportIcon, UniTypography } from "@/components";
import { Box } from "@mui/material";
import Opening from "./Opening";
import useGetOpening from "@/data/useGetOpening";
import useGetTransaction from "@/data/useGetTransaction";
import Idle from "./Idle";

const ZReportingModule = () => {
  const { data } = useGetOpening();
  const { data: transaction } = useGetTransaction();
  const date = new Date().toLocaleDateString();
  const openingData = data?.find((i) => i.date === date);
  const transactionData = transaction?.filter((i) => i.date === date);

  return (
    <Box sx={{ position: "relative", px: 4 }}>
      <Box sx={{ display: "flex", pt: 4 }}>
        <Box sx={{ my: "auto", mr: 1 }}>
          <ReportIcon size="24px" />
        </Box>
        <UniTypography
          variant="body1"
          sx={{ fontSize: "24px" }}
          text="Z-reporting"
        />
      </Box>
      <Box mt={4}>
        {!openingData?.hasOpened ? (
          <Opening />
        ) : (
          <Idle {...{ openingData, transactionData }} />
        )}
      </Box>
    </Box>
  );
};

export default ZReportingModule;
