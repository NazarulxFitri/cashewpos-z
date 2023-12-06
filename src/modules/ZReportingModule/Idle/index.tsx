import { UniButton, UniTypography } from "@/components";
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
  transactionData?.forEach((i) => (totalSale += +i.total));

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
        <Grid item>
          <UniTypography
            sx={{
              background: "#5cbdb9",
              borderRadius: "24px",
              color: "#FFF",
              p: 1,
              fontSize: "12px",
              width: "fit-content",
              height: "fit-content",
            }}
            variant="body1"
            text={
              openingData?.hasOpened && !openingData?.hasClosed
                ? "Active"
                : "Closed"
            }
          />
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
            text={`Total sale + Opening cash <b>RM${
              totalSale + openingData?.cashOnHand!
            }</b>`}
          />
        </Grid>
        <Grid item mt={2}>
          <UniButton onClick={handleClick}>
            <UniTypography
              variant="body1"
              sx={{ textTransform: "capitalize", fontWeight: "300" }}
              text={"Closing"}
            />
          </UniButton>
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
                    <UniTypography variant="body1" text={i.paymentType} />
                  </TableCell>
                  <TableCell>
                    <UniTypography variant="body1" text={`${i.total}`} />
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
