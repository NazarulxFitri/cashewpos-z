import { UniTypography } from "@/components";
import type { GetTransactionConfig } from "@/data/useGetTransaction";
import usePostUpdateOpening from "@/data/usePostUpdateOpening";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface openingData {
  cashOnHand?: number;
  date?: string;
  hasOpened?: boolean;
  hasClosed?: boolean;
}

interface IdleProps {
  openingData?: openingData;
  transactionData: GetTransactionConfig[];
}

const Idle: React.FC<IdleProps> = ({ openingData, transactionData }) => {
  const { action } = usePostUpdateOpening();

  let totalSale = 0;
  transactionData?.forEach((i) => (totalSale += +i.totalAmount));

  const handleClick = async () => {
    await action(
      openingData?.date!,
      totalSale,
      +totalSale + +openingData?.cashOnHand!
    );
    window?.location.reload();
  };

  return (
    <Box>
      <Grid container sx={{ mt: 1 }} flexDirection={"column"} gap={1}>
        <Grid item display="flex">
          <UniTypography
            sx={{
              background: "#EFEFEF",
              borderRadius: "8px",
              p: 1,
              width: "fit-content",
            }}
            variant="body1"
            text={
              openingData?.hasOpened && !openingData?.hasClosed
                ? "Active"
                : "Closed"
            }
          />
          <Box
            sx={{
              display: !openingData?.hasClosed ? "block" : "none",
              m: "auto 0 auto auto",
            }}
            onClick={handleClick}
          >
            <UniTypography
              sx={{
                background: "#EFEFEF",
                borderRadius: "8px",
                p: 1,
                width: "fit-content",
              }}
              variant="body1"
              text={"Closing"}
            />
          </Box>
        </Grid>
        <Grid item>
          <UniTypography variant="body1" text={`${openingData?.date}`} />
        </Grid>
        <Grid item>
          <UniTypography
            variant="body1"
            text={`Opening cash on hand <b>RM${openingData?.cashOnHand}</b>`}
          />
        </Grid>
        <Grid item>
          <UniTypography
            variant="body1"
            text={`Total sale <b>RM${totalSale}</b>`}
          />
        </Grid>
        <Grid item>
          <UniTypography
            variant="body1"
            text={`Total sale + Opening cash <b>RM${totalSale + openingData?.cashOnHand!}</b>`}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <TableContainer sx={{ overflow: "scroll", width: "480px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <UniTypography variant="body1" text={`Transaction ID`} />
                </TableCell>
                <TableCell>
                  <UniTypography variant="body1" text={`Payment type`} />
                </TableCell>
                <TableCell>
                  <UniTypography variant="body1" text={`Total (RM)`} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactionData?.map((i, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <UniTypography variant="body1" text={`${i.id}`} />
                  </TableCell>
                  <TableCell>
                    <UniTypography variant="body1" text={`Cash`} />
                  </TableCell>
                  <TableCell>
                    <UniTypography variant="body1" text={`${i.totalAmount}`} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Idle;
